<?php
declare(strict_types=1);

/**
 * Sessão e utilidades compartilhadas pelos endpoints do painel /admin.
 *
 * Autenticação é feita via cookie de sessão do PHP (HttpOnly + Secure +
 * SameSite=Strict) — nunca via token guardado no localStorage/JS do site,
 * pra não dar chance de um XSS roubar a credencial. Toda rota que muda
 * estado (status.php) também exige um token CSRF de sessão, como segunda
 * camada além do SameSite.
 */

const ADMIN_DIR_DADOS = __DIR__ . '/dados';
const ADMIN_THROTTLE_FILE = ADMIN_DIR_DADOS . '/login-throttle.json';
const ADMIN_LIMITE_TENTATIVAS = 8;
const ADMIN_JANELA_SEG = 900;

function adminJson(int $status, array $payload): void
{
    header('Content-Type: application/json; charset=utf-8');
    header('X-Content-Type-Options: nosniff');
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function adminIp(): string
{
    $valor = $_SERVER['REMOTE_ADDR'] ?? '';
    return is_string($valor) ? $valor : '';
}

function adminStartSession(): void
{
    if (session_status() === PHP_SESSION_ACTIVE) {
        return;
    }

    session_name('npg_admin_sid');
    session_set_cookie_params([
        'lifetime' => 0,
        'path' => '/',
        'secure' => true,
        'httponly' => true,
        'samesite' => 'Strict',
    ]);
    session_start();
}

/** Bloqueia a rota se não houver sessão de admin válida. Encerra a request se não autenticado. */
function adminRequireAuth(): void
{
    adminStartSession();
    if (empty($_SESSION['admin_authenticated'])) {
        adminJson(401, ['ok' => false, 'erro' => 'Sessão expirada. Faça login novamente.']);
    }
}

/** Confere o token CSRF enviado no header X-CSRF-Token contra o da sessão. */
function adminRequireCsrf(): void
{
    $enviado = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '';
    $esperado = $_SESSION['admin_csrf'] ?? '';
    if (!is_string($enviado) || !is_string($esperado) || $esperado === '' || !hash_equals($esperado, $enviado)) {
        adminJson(403, ['ok' => false, 'erro' => 'Token de segurança inválido. Recarregue a página.']);
    }
}

function adminEnsureDadosDir(): void
{
    if (!is_dir(ADMIN_DIR_DADOS)) {
        mkdir(ADMIN_DIR_DADOS, 0750, true);
    }

    $htaccess = ADMIN_DIR_DADOS . '/.htaccess';
    if (!file_exists($htaccess)) {
        file_put_contents(
            $htaccess,
            "Require all denied\n<IfModule !mod_authz_core.c>\n  Deny from all\n</IfModule>\n"
        );
    }
}

/** Throttle de tentativas de login por IP. Retorna false se estourou o limite. */
function adminDentroDoLimite(): bool
{
    adminEnsureDadosDir();

    $agora = time();
    $ip = adminIp();
    $registros = [];

    $handle = fopen(ADMIN_THROTTLE_FILE, 'c+');
    if ($handle === false) {
        return true;
    }

    flock($handle, LOCK_EX);
    $conteudo = stream_get_contents($handle);
    if (is_string($conteudo) && $conteudo !== '') {
        $decodificado = json_decode($conteudo, true);
        if (is_array($decodificado)) {
            $registros = $decodificado;
        }
    }

    foreach ($registros as $chave => $marcas) {
        $marcas = array_values(array_filter(
            (array) $marcas,
            static fn($t): bool => is_int($t) && $t > $agora - ADMIN_JANELA_SEG
        ));
        if ($marcas === []) {
            unset($registros[$chave]);
        } else {
            $registros[$chave] = $marcas;
        }
    }

    $doIp = $registros[$ip] ?? [];
    $permitido = count($doIp) < ADMIN_LIMITE_TENTATIVAS;

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
