<?php
declare(strict_types=1);

require_once __DIR__ . '/_auth.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'GET') {
    adminJson(405, ['ok' => false, 'erro' => 'Método não permitido.']);
}

adminStartSession();

if (empty($_SESSION['admin_authenticated'])) {
    adminJson(401, ['ok' => false, 'erro' => 'Não autenticado.']);
}

adminJson(200, [
    'ok' => true,
    'username' => $_SESSION['admin_username'] ?? '',
    'csrfToken' => $_SESSION['admin_csrf'] ?? '',
]);
