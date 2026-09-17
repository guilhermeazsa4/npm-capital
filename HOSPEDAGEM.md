# Site NPG Capital — resumo técnico para contratação de hospedagem

Documento para consultar planos de hospedagem. Pode ser enviado direto ao
vendedor/suporte do provedor.

---

## 1. O que é o projeto

Site institucional da **NPG Capital**, empresa de serviços financeiros para
condomínios (antecipação de recebíveis, gestão de inadimplência).

Público: síndicos e administradoras de condomínio.
Objetivo do site: apresentar a empresa, gerar contato via WhatsApp/formulário
e distribuir conteúdo (e-books, revistas, notícias).

**Não é WordPress.** Não é loja virtual. Não tem área logada.

## 2. Tecnologia

| Item | Valor |
|---|---|
| Framework | Next.js 16.2 (App Router) |
| Runtime | Node.js 20+ (desenvolvido no Node 24) |
| Linguagem | TypeScript / React 19 |
| Estilo | Tailwind CSS 4 |
| Banco de dados | **nenhum** |
| Backend / API | **nenhum** |
| Conteúdo | arquivos estáticos no próprio código (`src/lib/*.ts`) |

## 3. Páginas

13 rotas, todas geradas estaticamente no build:

- `/` — home
- `/a-empresa`
- `/servicos`
- `/contato`
- `/seu-boleto` — 2ª via de boleto condominial
- `/e-books` e `/e-books/[slug]`
- `/revistas` e `/revistas/[number]`
- `/noticias` e `/noticias/[slug]`
- `/politica-de-privacidade`

## 4. Requisitos — checklist para avaliar um plano

Obrigatórios:

- [ ] **Node.js 20 ou superior** (o mais importante — sem isso não roda)
- [ ] Executar `npm install` e `npm run build`
- [ ] Manter um processo Node rodando (`npm start`, porta configurável)
- [ ] Certificado SSL/HTTPS
- [ ] Apontar domínio próprio (`npgcapital.com.br`)

Desejáveis:

- [ ] Deploy automático a partir do GitHub
- [ ] CDN

Recursos:

| Recurso | Necessário |
|---|---|
| Armazenamento | ~15 MB (13 MB de imagens + código) |
| Memória | 512 MB é suficiente |
| Banda | baixa — site institucional |
| Visitas esperadas | < 5.000/mês no primeiro ano |

## 5. O que NÃO é necessário (não pague por isso)

| Recurso oferecido | Por quê não serve |
|---|---|
| WordPress / plugins / criador de sites | o site já está pronto, em outra tecnologia |
| PHP, MySQL, phpMyAdmin | o projeto não usa |
| Contas de e-mail inclusas | o e-mail será **Google Workspace**, contratado à parte |
| Domínio grátis | `npgcapital.com.br` já registrado no Registro.br |
| Loja virtual / e-commerce | não se aplica |
| 35 GB, 60 GB, 120 GB de disco | o site ocupa 15 MB |

## 6. Como ler um plano

**Sinal verde:** menciona *Node.js*, *aplicações Node*, *Next.js*, *deploy via
Git*, *builds automáticos*.

**Sinal vermelho:** a lista de recursos gira em torno de *WordPress*, *cPanel*,
*plugins*, *criador de sites por IA*, *PHP*. Isso é hospedagem compartilhada
para WordPress — não roda este site.

**Atenção ao preço:** os valores promocionais (R$ 10,90 / R$ 12,99) exigem
pagamento adiantado de 3 a 4 anos. Confira o valor de **renovação**, que
costuma ser 4 a 6× maior.

## 7. Opções que atendem

| Opção | Custo | Observação |
|---|---|---|
| **Vercel** (Hobby) | R$ 0 | Feita pelos criadores do Next.js. Deploy automático do GitHub, SSL e CDN inclusos. Encaixe ideal. |
| **Netlify** (Free) | R$ 0 | Equivalente à Vercel. |
| **Cloudflare Pages** | R$ 0 | Equivalente, CDN muito boa. |
| Hostinger — planos com Node.js | ~R$ 13/mês* | Funciona, exige configuração manual. |
| VPS (Hostinger, Contabo, DigitalOcean) | R$ 25–40/mês | Funciona, exige administrar o servidor. |

\* preço promocional com pagamento adiantado de 48 meses.

**Não atendem:** Locaweb Hospedagem I / II / Dedicada, HostGator compartilhado,
KingHost compartilhado — todos são hospedagem PHP/WordPress.

## 8. E-mail (assunto separado)

O e-mail **não** vem da hospedagem. Situação atual do domínio:

- Sem caixa postal criada — `contato@npgcapital.com.br` ainda não existe
- MX nulo (domínio declara que não recebe e-mail)
- SPF `v=spf1 -all` — bloqueia qualquer envio em nome do domínio

Definido: será **Google Workspace**, administrado pela proprietária da NPG.

Pendências:
1. Criar a caixa `contato@npgcapital.com.br`
2. Gerar senha de aplicativo para o sistema de pagamentos
3. Ajustar no Registro.br: MX do Google e SPF `v=spf1 include:_spf.google.com ~all`

Dados SMTP a informar ao fornecedor do sistema de pagamentos:

```
Servidor:  smtp.gmail.com
Porta:     587
Segurança: STARTTLS
Usuário:   contato@npgcapital.com.br
Senha:     senha de aplicativo (gerada no painel do Workspace)
```
