-- Schema do banco de leads da NPG Capital.
--
-- Rode este arquivo uma vez no phpMyAdmin da Locaweb (aba "Importar" do
-- banco que você criar) para criar a tabela. Depois preencha DB_* em
-- config.php com host/nome do banco/usuário/senha que a Locaweb te der.

CREATE TABLE IF NOT EXISTS leads (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  origem VARCHAR(255) NOT NULL DEFAULT '',
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefone VARCHAR(50) NOT NULL DEFAULT '',
  condominio VARCHAR(255) NOT NULL DEFAULT '',
  receita VARCHAR(100) NOT NULL DEFAULT '',
  cidade VARCHAR(100) NOT NULL DEFAULT '',
  estado VARCHAR(2) NOT NULL DEFAULT '',
  profissao VARCHAR(100) NOT NULL DEFAULT '',
  ebook VARCHAR(255) NOT NULL DEFAULT '',
  mensagem TEXT NOT NULL,
  consentimento TINYINT(1) NOT NULL DEFAULT 0,
  status ENUM('novo', 'em_contato', 'proposta', 'convertido') NOT NULL DEFAULT 'novo',
  ip VARCHAR(45) NOT NULL DEFAULT '',
  user_agent VARCHAR(500) NOT NULL DEFAULT '',
  criado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  atualizado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_status (status),
  KEY idx_criado_em (criado_em),
  KEY idx_nome (nome),
  KEY idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
