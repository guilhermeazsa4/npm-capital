<?php
declare(strict_types=1);

require_once __DIR__ . '/_auth.php';
require_once __DIR__ . '/../db.php';

if (is_file(__DIR__ . '/../config.php')) {
    require_once __DIR__ . '/../config.php';
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'GET') {
    adminJson(405, ['ok' => false, 'erro' => 'Método não permitido.']);
}

adminRequireAuth();

const STATUS_VALIDOS = ['novo', 'em_contato', 'proposta', 'convertido'];

$busca = trim((string) ($_GET['q'] ?? ''));
$status = (string) ($_GET['status'] ?? '');
$status = in_array($status, STATUS_VALIDOS, true) ? $status : '';

$pagina = max(1, (int) ($_GET['page'] ?? 1));
$porPagina = (int) ($_GET['pageSize'] ?? 20);
$porPagina = max(1, min(100, $porPagina));
$offset = ($pagina - 1) * $porPagina;

$condicoes = [];
$parametros = [];

if ($busca !== '') {
    $condicoes[] = '(nome LIKE :busca OR email LIKE :busca OR telefone LIKE :busca OR condominio LIKE :busca)';
    $parametros['busca'] = '%' . $busca . '%';
}

if ($status !== '') {
    $condicoes[] = 'status = :status';
    $parametros['status'] = $status;
}

$where = $condicoes === [] ? '' : ('WHERE ' . implode(' AND ', $condicoes));

try {
    $pdo = db();

    $stmtTotal = $pdo->prepare("SELECT COUNT(*) FROM leads {$where}");
    $stmtTotal->execute($parametros);
    $total = (int) $stmtTotal->fetchColumn();

    $sql = "SELECT id, origem, nome, email, telefone, condominio, receita, cidade, estado, profissao,
                   ebook, mensagem, consentimento, status, ip, criado_em, atualizado_em
            FROM leads
            {$where}
            ORDER BY criado_em DESC
            LIMIT :limite OFFSET :offset";
    $stmt = $pdo->prepare($sql);
    foreach ($parametros as $chave => $valor) {
        $stmt->bindValue($chave, $valor);
    }
    $stmt->bindValue('limite', $porPagina, PDO::PARAM_INT);
    $stmt->bindValue('offset', $offset, PDO::PARAM_INT);
    $stmt->execute();
    $leads = $stmt->fetchAll();
} catch (Throwable $e) {
    error_log('admin/leads.php: falha ao consultar leads — ' . $e->getMessage());
    adminJson(500, ['ok' => false, 'erro' => 'Não foi possível carregar os leads agora.']);
}

adminJson(200, [
    'ok' => true,
    'leads' => $leads,
    'total' => $total,
    'page' => $pagina,
    'pageSize' => $porPagina,
]);
