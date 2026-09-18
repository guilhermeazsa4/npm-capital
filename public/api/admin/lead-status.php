<?php
declare(strict_types=1);

require_once __DIR__ . '/_auth.php';
require_once __DIR__ . '/../db.php';

if (is_file(__DIR__ . '/../config.php')) {
    require_once __DIR__ . '/../config.php';
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    adminJson(405, ['ok' => false, 'erro' => 'Método não permitido.']);
}

adminRequireAuth();
adminRequireCsrf();

const STATUS_VALIDOS_UPDATE = ['novo', 'em_contato', 'proposta', 'convertido'];

$corpo = json_decode((string) file_get_contents('php://input'), true);
$id = is_array($corpo) ? (int) ($corpo['id'] ?? 0) : 0;
$status = is_array($corpo) && is_string($corpo['status'] ?? null) ? $corpo['status'] : '';

if ($id <= 0) {
    adminJson(422, ['ok' => false, 'erro' => 'Lead inválido.']);
}

if (!in_array($status, STATUS_VALIDOS_UPDATE, true)) {
    adminJson(422, ['ok' => false, 'erro' => 'Status inválido.']);
}

try {
    $stmt = db()->prepare('UPDATE leads SET status = :status WHERE id = :id');
    $stmt->execute(['status' => $status, 'id' => $id]);

    if ($stmt->rowCount() === 0) {
        // Pode ser "id não existe" ou "já estava nesse status" — confere se existe antes de dar erro.
        $confere = db()->prepare('SELECT 1 FROM leads WHERE id = :id');
        $confere->execute(['id' => $id]);
        if ($confere->fetchColumn() === false) {
            adminJson(404, ['ok' => false, 'erro' => 'Lead não encontrado.']);
        }
    }
} catch (Throwable $e) {
    error_log('admin/lead-status.php: falha ao atualizar status — ' . $e->getMessage());
    adminJson(500, ['ok' => false, 'erro' => 'Não foi possível atualizar o status agora.']);
}

adminJson(200, ['ok' => true]);
