<?php
declare(strict_types=1);

require_once __DIR__ . '/_auth.php';

if (is_file(__DIR__ . '/../config.php')) {
    require_once __DIR__ . '/../config.php';
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    adminJson(405, ['ok' => false, 'erro' => 'Método não permitido.']);
}

if (!adminDentroDoLimite()) {
    adminJson(429, ['ok' => false, 'erro' => 'Muitas tentativas seguidas. Aguarde alguns minutos e tente de novo.']);
}

$corpo = json_decode((string) file_get_contents('php://input'), true);
$usuario = is_array($corpo) && is_string($corpo['username'] ?? null) ? trim($corpo['username']) : '';
$senha = is_array($corpo) && is_string($corpo['password'] ?? null) ? $corpo['password'] : '';

if ($usuario === '' || $senha === '') {
    adminJson(422, ['ok' => false, 'erro' => 'Informe usuário e senha.']);
}

if (!defined('ADMIN_USERNAME') || !defined('ADMIN_PASSWORD_HASH')) {
    error_log('admin/login.php: ADMIN_USERNAME/ADMIN_PASSWORD_HASH não configurados em config.php.');
    adminJson(500, ['ok' => false, 'erro' => 'Login não configurado no servidor.']);
}

$usuarioValido = hash_equals(ADMIN_USERNAME, $usuario);
$senhaValida = password_verify($senha, ADMIN_PASSWORD_HASH);

if (!$usuarioValido || !$senhaValida) {
    adminJson(401, ['ok' => false, 'erro' => 'Usuário ou senha inválidos.']);
}

adminStartSession();
session_regenerate_id(true);

$_SESSION['admin_authenticated'] = true;
$_SESSION['admin_username'] = $usuario;
$_SESSION['admin_csrf'] = bin2hex(random_bytes(32));

adminJson(200, [
    'ok' => true,
    'username' => $usuario,
    'csrfToken' => $_SESSION['admin_csrf'],
]);
