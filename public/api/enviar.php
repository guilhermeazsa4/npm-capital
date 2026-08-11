<?php
declare(strict_types=1);

/**
 * Recebe os formulários do site (proposta, contato e e-books).
 *
 * Grava cada lead em dados/leads.csv e envia um aviso por e-mail via SMTP
 * autenticado do Google (não pelo mail() da hospedagem — o domínio já
 * autoriza só o Google no SPF, então enviar por lá evita cair em spam).
 * O CSV é a fonte de verdade: se o envio de e-mail falhar, o lead
 * continua registrado e a resposta ainda é de sucesso.
 *
 * Sobe junto com o site: vira /api/enviar.php na raiz do domínio.
 * Precisa subir junto: a pasta PHPMailer/ e o arquivo config.php (este
 * último NUNCA vai para o git — ver config.example.php).
 */

require_once __DIR__ . '/PHPMailer/Exception.php';
require_once __DIR__ . '/PHPMailer/SMTP.php';
require_once __DIR__ . '/PHPMailer/PHPMailer.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as PHPMailerException;

if (is_file(__DIR__ . '/config.php')) {
    require_once __DIR__ . '/config.php';
}

// ---------------------------------------------------------------------------
// Configuração — ajustar antes de publicar
// ---------------------------------------------------------------------------

/** Para onde chegam os avisos de lead novo. */
const DESTINO = 'gerencia@npgcapital.com.br';

/**
 * Conta do Workspace usada para autenticar e enviar. Precisa ser a mesma
 * dona da senha de app em config.php.
 */
const SMTP_USUARIO = 'gerencia@npgcapital.com.br';
const SMTP_HOST = 'smtp.gmail.com';
const SMTP_PORTA = 587;

/** Máximo de envios por IP dentro da janela, para conter robô de spam. */
const LIMITE_ENVIOS = 5;
const LIMITE_JANELA_SEG = 600;

// ---------------------------------------------------------------------------

const DIR_DADOS = __DIR__ . '/dados';
const ARQUIVO_CSV = DIR_DADOS . '/leads.csv';
const ARQUIVO_THROTTLE = DIR_DADOS . '/throttle.json';

/** Campos aceitos. Qualquer outra coisa enviada é descartada. */
const CAMPOS = [
    'origem',
    'nome',
    'email',
    'telefone',
    'condominio',
    'receita',
    'cidade',
    'estado',
    'profissao',
    'ebook',
    'mensagem',
    'consentimento',
];

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

/**
 * @param array<string,mixed> $extra
 */
function responder(int $status, bool $ok, string $mensagem = '', array $extra = []): void
{
    http_response_code($status);
    echo json_encode(
        ['ok' => $ok, 'erro' => $ok ? null : $mensagem] + $extra,
        JSON_UNESCAPED_UNICODE
    );
    exit;
}

function ip(): string
{
    $valor = $_SERVER['REMOTE_ADDR'] ?? '';
    return is_string($valor) ? $valor : '';
}

/** Remove quebras de linha, que é como se injeta cabeçalho em e-mail. */
function limpar(string $valor): string
{
    $valor = str_replace(["\r", "\n", "\0"], ' ', $valor);
    return trim($valor);
}

/** Corta o texto sem depender de mbstring, que nem toda hospedagem habilita. */
function cortar(string $valor, int $limite): string
{
    if (function_exists('mb_substr')) {
        return mb_substr($valor, 0, $limite);
    }

    if (strlen($valor) <= $limite) {
        return $valor;
    }

    // Sem mbstring: corta em bytes e descarta o caractere partido no fim.
    $cortado = substr($valor, 0, $limite);
    return (string) preg_replace('/[\xC0-\xFF][\x80-\xBF]*$/', '', $cortado);
}

function garantirPastaDados(): void
{
    if (!is_dir(DIR_DADOS)) {
        mkdir(DIR_DADOS, 0750, true);
    }

    // O CSV tem dado pessoal e mora dentro da pasta pública: bloqueia acesso
    // direto via navegador. Recriado aqui caso o deploy não tenha subido o arquivo.
    $htaccess = DIR_DADOS . '/.htaccess';
    if (!file_exists($htaccess)) {
        file_put_contents(
            $htaccess,
            "Require all denied\n<IfModule !mod_authz_core.c>\n  Deny from all\n</IfModule>\n"
        );
    }
}

/** Throttle simples por IP, em arquivo. Retorna false se estourou o limite. */
function dentroDoLimite(): bool
{
    $agora = time();
    $ip = ip();
    $registros = [];

    $handle = fopen(ARQUIVO_THROTTLE, 'c+');
    if ($handle === false) {
        return true; // não dá pra checar: deixa passar em vez de derrubar o form
    }

    flock($handle, LOCK_EX);
    $conteudo = stream_get_contents($handle);
    if (is_string($conteudo) && $conteudo !== '') {
        $decodificado = json_decode($conteudo, true);
        if (is_array($decodificado)) {
            $registros = $decodificado;
        }
    }

    // Descarta o que já saiu da janela.
    foreach ($registros as $chave => $marcas) {
        $marcas = array_values(array_filter(
            (array) $marcas,
            static fn($t): bool => is_int($t) && $t > $agora - LIMITE_JANELA_SEG
        ));
        if ($marcas === []) {
            unset($registros[$chave]);
        } else {
            $registros[$chave] = $marcas;
        }
    }

    $doIp = $registros[$ip] ?? [];
    $permitido = count($doIp) < LIMITE_ENVIOS;

    if ($permitido) {
        $doIp[] = $agora;
        $registros[$ip] = $doIp;
    }

    ftruncate($handle, 0);
    rewind($handle);
    fwrite($handle, json_encode($registros) ?: '{}');
    flock($handle, LOCK_UN);
    fclose($handle);

    return $permitido;
}

// ---------------------------------------------------------------------------

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    responder(405, false, 'Método não permitido.');
}

// Honeypot: campo escondido que só robô preenche. Responde sucesso de propósito,
// para o robô não descobrir que foi barrado.
$honeypot = $_POST['website'] ?? '';
if (is_string($honeypot) && $honeypot !== '') {
    responder(200, true);
}

garantirPastaDados();

if (!dentroDoLimite()) {
    responder(429, false, 'Muitas tentativas seguidas. Aguarde alguns minutos e tente de novo.');
}

$dados = [];
foreach (CAMPOS as $campo) {
    $valor = $_POST[$campo] ?? '';
    $dados[$campo] = is_string($valor) ? limpar(cortar($valor, 2000)) : '';
}

// A mensagem é o único campo onde quebra de linha faz sentido.
$mensagemBruta = $_POST['mensagem'] ?? '';
if (is_string($mensagemBruta)) {
    $dados['mensagem'] = trim(str_replace("\0", '', cortar($mensagemBruta, 2000)));
}

if ($dados['nome'] === '') {
    responder(422, false, 'Informe seu nome.');
}

if (!filter_var($dados['email'], FILTER_VALIDATE_EMAIL)) {
    responder(422, false, 'Informe um e-mail válido.');
}

if ($dados['consentimento'] !== '1') {
    responder(422, false, 'É necessário aceitar a Política de Privacidade.');
}

// --- Grava o CSV -----------------------------------------------------------

$linha = array_merge(
    [date('Y-m-d H:i:s')],
    array_map(static fn(string $c): string => $dados[$c], CAMPOS),
    [ip(), limpar((string) ($_SERVER['HTTP_USER_AGENT'] ?? ''))]
);

$novo = !file_exists(ARQUIVO_CSV);
$csv = fopen(ARQUIVO_CSV, 'a');

if ($csv === false) {
    responder(500, false, 'Não foi possível registrar sua solicitação. Tente novamente.');
}

flock($csv, LOCK_EX);
if ($novo) {
    // BOM para o Excel abrir os acentos corretamente.
    fwrite($csv, "\xEF\xBB\xBF");
    fputcsv($csv, array_merge(['data_hora'], CAMPOS, ['ip', 'user_agent']));
}
fputcsv($csv, $linha);
flock($csv, LOCK_UN);
fclose($csv);
@chmod(ARQUIVO_CSV, 0640);

// --- Avisa por e-mail ------------------------------------------------------

$rotulos = [
    'origem' => 'Origem',
    'nome' => 'Nome',
    'email' => 'E-mail',
    'telefone' => 'Telefone',
    'condominio' => 'Condomínio',
    'receita' => 'Receita mensal',
    'cidade' => 'Cidade',
    'estado' => 'Estado',
    'profissao' => 'Profissão',
    'ebook' => 'E-book',
    'mensagem' => 'Mensagem',
];

$corpo = "Novo contato pelo site npgcapital.com.br\n\n";
foreach ($rotulos as $campo => $rotulo) {
    if ($dados[$campo] !== '') {
        $corpo .= "{$rotulo}: {$dados[$campo]}\n";
    }
}
$corpo .= "\nRecebido em " . date('d/m/Y \à\s H:i') . "\n";

$assunto = $dados['origem'] !== ''
    ? "Novo lead do site — {$dados['origem']}"
    : 'Novo lead do site';

// Sem senha de app configurada ainda (config.php ausente ou com o valor de
// exemplo): não tenta enviar. O lead já está salvo no CSV de qualquer forma.
$senhaConfigurada = defined('SMTP_APP_PASSWORD')
    && SMTP_APP_PASSWORD !== ''
    && SMTP_APP_PASSWORD !== 'COLE_A_SENHA_DE_APP_AQUI';

if ($senhaConfigurada) {
    try {
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = SMTP_HOST;
        $mail->Port = SMTP_PORTA;
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Username = SMTP_USUARIO;
        $mail->Password = SMTP_APP_PASSWORD;
        $mail->CharSet = PHPMailer::CHARSET_UTF8;

        $mail->setFrom(SMTP_USUARIO, 'NPG Capital');
        $mail->addAddress(DESTINO);
        if ($dados['email'] !== '') {
            $mail->addReplyTo($dados['email']);
        }

        $mail->Subject = $assunto;
        $mail->Body = $corpo;

        $mail->send();
    } catch (PHPMailerException $e) {
        // Se o e-mail falhar o lead já está no CSV, então isso não vira erro
        // pro visitante — só registra o motivo para depuração.
        error_log('enviar.php: falha ao enviar e-mail — ' . $e->getMessage());
    }
}

responder(200, true);
