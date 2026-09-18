<?php
declare(strict_types=1);

/**
 * Modelo do arquivo de credenciais do backend (formulários + painel admin).
 *
 * Copie este arquivo para "config.php" (mesma pasta) e preencha os valores
 * abaixo. O config.php de verdade NUNCA deve ser commitado no git — está
 * listado no .gitignore justamente para isso. Suba o config.php para o
 * servidor separadamente, por FTP.
 */

// --- Banco de dados (MySQL da Locaweb) --------------------------------------
// Painel Locaweb → Hospedagem → Banco de Dados → MySQL. Crie um banco e um
// usuário com acesso a ele; a Locaweb te dá o host (normalmente é
// "localhost" ou um endereço tipo mysql.seudominio.com.br). Depois rode
// schema.sql nesse banco (phpMyAdmin → aba Importar) para criar a tabela.
define('DB_HOST', 'localhost');
define('DB_NAME', 'COLE_O_NOME_DO_BANCO_AQUI');
define('DB_USER', 'COLE_O_USUARIO_DO_BANCO_AQUI');
define('DB_PASS', 'COLE_A_SENHA_DO_BANCO_AQUI');

// --- Login do painel /admin --------------------------------------------------
// Usuário em texto puro é só o "nome de login" — a senha real nunca fica
// aqui em texto puro, só o hash dela.
define('ADMIN_USERNAME', 'admin');

// Gere o hash rodando isto no terminal (troque "sua_senha_aqui"):
//   php -r "echo password_hash('sua_senha_aqui', PASSWORD_DEFAULT), PHP_EOL;"
// Cole o resultado (começa com $2y$) abaixo. Guarde a senha em texto puro
// só no seu gerenciador de senhas — aqui só entra o hash.
define('ADMIN_PASSWORD_HASH', 'COLE_O_HASH_GERADO_AQUI');
