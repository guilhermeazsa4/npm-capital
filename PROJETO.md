# Site NPG Capital — resumo completo do projeto

Levantamento do estado atual, pendências e decisões de infraestrutura.
Atualizado em 06/08/2026.

---

## 1. O que é

Site institucional da **NPG Capital**, empresa de serviços financeiros para
condomínios (antecipação de recebíveis / gestão de inadimplência).

- **Público-alvo:** síndicos e administradoras de condomínio
- **Objetivo:** apresentar a empresa, captar leads (proposta e contato),
  distribuir conteúdo (e-books, revistas, notícias) e oferecer 2ª via de boleto
- **Situação:** pronto visualmente, **não publicado**, com pendências
  funcionais bloqueantes (seção 5)

## 2. Tecnologia

| Item | Valor |
|---|---|
| Framework | Next.js 16.2.10 (App Router) |
| Runtime | Node.js 20+ (desenvolvido no Node 24.15) |
| UI | React 19.2.4 + TypeScript 5 |
| Estilo | Tailwind CSS 4 |
| Ícones | lucide-react |
| Scroll suave | lenis |
| Banco de dados | **nenhum** |
| Backend / rotas de API | **nenhum** |

O conteúdo editorial fica em arquivos TypeScript no próprio código
(`src/lib/`), não em CMS: `blog-posts.ts` (128 linhas), `ebooks.ts` (145),
`revistas.ts` (229).

## 3. Estrutura

**13 rotas**, todas estáticas (as dinâmicas usam `generateStaticParams`):

```
/                        home
/a-empresa
/servicos
/contato                 formulário: proposta + contato
/seu-boleto              formulário: CPF/CNPJ + unidade
/e-books                 /e-books/[slug]
/revistas                /revistas/[number]
/noticias                /noticias/[slug]
/politica-de-privacidade
```

**19 componentes**, sendo 11 seções da home (`hero`, `problema`, `beneficios`,
`como-funciona`, `comparativa`, `depoimentos`, `ebooks`, `revistas`,
`cta-final`, `banner-confianca`, `beneficios-diferente`), mais `header`,
`footer`, `cookie-banner`, `ebook-download-modal`, `ebooks-marquee`,
`smooth-scroll` e a base de UI.

26 arquivos são Client Components (`"use client"`).

**Assets:** 13 MB em `public/assets` (18 PNG, 10 JPG, 2 WebP). Já passaram por
uma redução via `scripts/optimize-images.js`; o `next/image` faz a segunda
camada (AVIF/WebP e tamanhos responsivos) em tempo de execução.

**Tamanho total do site:** ~15 MB.

## 4. Dados de contato (`src/lib/constants.ts`)

| Campo | Valor |
|---|---|
| WhatsApp | 5511978589115 |
| Telefone | (11) 97858-9115 |
| E-mail | contato@npgcapital.com.br |
| Endereço | Av. Paulista, 1000 — São Paulo, SP |
| CNPJ | `00.001.010/0001-00` ⚠️ **placeholder** |
| Instagram | instagram.com/npgcapital |
| Facebook | facebook.com/npgcapital |

## 5. Pendências

### Bloqueantes — resolver antes de publicar

**5.1 Os formulários de captação não salvam nada.**
`contato` e o modal de e-book apenas chamam
`e.preventDefault(); setSubmitted(true)`. O dado digitado é descartado e a tela
exibe *"Solicitação recebida. Nossa equipe entra em contato em até 1 dia
útil"* — mensagem falsa. Todo lead se perde.

- `src/app/contato/content.tsx:84`
- `src/components/ebook-download-modal.tsx:60`

**5.2 O e-mail `contato@npgcapital.com.br` não existe.** Aparece no site e no
rodapé, mas não há caixa postal criada no domínio.

**5.3 CNPJ é placeholder.** `00.001.010/0001-00` aparece no rodapé e na
política de privacidade. Há um TODO no código (`constants.ts:11`).

**5.4 O domínio não aponta para lugar nenhum.** Sem registro A, sem `www`.

### Importantes

**5.5 `/seu-boleto` deve redirecionar para o sistema de pagamentos**, não
gravar nada. Hoje o formulário simula envio localmente
(`src/app/seu-boleto/content.tsx:54`) — precisa apenas apontar para a página
externa de 2ª via. Falta a URL de destino.

**5.6 Política de privacidade x realidade.** A política descreve tratamento de
dados que hoje não acontece. Quando os formulários passarem a gravar, precisa
declarar onde os dados ficam, por quanto tempo e quem é o operador.

**5.7 Verificar dados de contato.** Endereço e perfis de redes sociais
precisam ser confirmados como reais.

**5.8 `InstagramEditora/` (16 MB) está versionado no repositório** — 15
arquivos, pastas `chedid`, `infinito`, `manual`, `sonhe`, `timesonhos`. Não faz
parte do site. Ocupa mais espaço que o site inteiro.

## 6. Infraestrutura

### 6.1 Hospedagem

**Requisito real:** Node.js 20+, rodar `npm install` / `npm run build` /
`npm start`, SSL, domínio próprio. ~15 MB de disco, 512 MB de RAM.

**Não serve:** hospedagem compartilhada PHP/WordPress (Locaweb Hospedagem I/II/
Dedicada, HostGator e KingHost compartilhados). A lista de recursos delas gira
em torno de WordPress, cPanel, plugins e PHP — nenhuma menciona Node.js.

**Recomendado:** **Vercel** (plano Hobby, R$ 0) — feita pelos criadores do
Next.js, com deploy automático via GitHub, SSL e CDN. Netlify e Cloudflare
Pages são equivalentes.

**Plano B — exportação estática:** `output: 'export'` no `next.config.ts` gera
uma pasta `out` com HTML puro, publicável em qualquer hospedagem. Todas as
rotas do projeto são compatíveis. Só usar se houver exigência de provedor
específico, porque custa:

- perda da otimização de imagem (`next/image` com loader padrão não é
  suportado) — pesa, já que 13 dos 15 MB são imagens
- perda dos headers de cache configurados em `next.config.ts:10` (a doc lista
  `headers` como não suportado); dá para recriar via `.htaccess`
- deploy manual por FTP

Nesse cenário, configurar também `images: { unoptimized: true }` e
`trailingSlash: true`.

### 6.2 Domínio — `npgcapital.com.br`

Registrado no Registro.br, ainda no DNS de estacionamento.

| Registro | Estado atual | Ação necessária |
|---|---|---|
| NS | `a.auto.dns.br` / `b.auto.dns.br` | manter ou migrar |
| A / www | inexistente | apontar para a hospedagem |
| MX | `0 .` (nulo — não recebe e-mail) | apontar para o Google |
| SPF | `v=spf1 -all` (bloqueia tudo) | `v=spf1 include:_spf.google.com ~all` |

### 6.3 E-mail

Decidido: **Google Workspace**, administrado pela proprietária da NPG.

Pendências, no painel dela:

1. Criar a caixa `contato@npgcapital.com.br`
2. Ajustar MX e SPF no Registro.br
3. Gerar **senha de aplicativo** para o sistema de pagamentos

Dados SMTP a informar ao fornecedor do sistema:

```
E-mail remetente: contato@npgcapital.com.br
Servidor (SMTP):  smtp.gmail.com
Porta:            587
Segurança:        STARTTLS   (ou 465 com SSL)
Usuário:          contato@npgcapital.com.br
Senha:            senha de aplicativo
Provedor:         Google Workspace
```

### 6.4 Armazenamento dos formulários

Não exige banco nem servidor próprio — a gravação fica num serviço externo, o
que mantém o site compatível com qualquer hospedagem.

| Opção | Custo | E-mail | Planilha | Histórico |
|---|---|---|---|---|
| **Google Apps Script** | R$ 0 | ✅ | ✅ | permanente |
| Web3Forms grátis | R$ 0 | ✅ | ❌ | 30 dias |
| Web3Forms Pro | ~R$ 100/mês | ✅ | ✅ | permanente |
| Supabase | R$ 0 / US$ 25 | ❌ (à parte) | ❌ | permanente |

**Recomendado: Google Apps Script.** Como a NPG terá Workspace, os leads caem
numa planilha da própria empresa e disparam e-mail de aviso, sem custo, sem
limite mensal e sem operador terceiro (simplifica a LGPD).

Supabase foi descartado por ora: resolve armazenamento, não notificação — o
lead ficaria numa tabela sem ninguém ser avisado — e o plano grátis pausa
projetos após 7 dias sem atividade, o que quebraria um site de baixo volume.

## 7. Ordem sugerida de execução

1. Criar o e-mail no Google Workspace e ajustar MX/SPF *(proprietária)*
2. Implementar a gravação dos três formulários *(dev)*
3. Substituir o CNPJ e confirmar endereço e redes sociais *(NPG)*
4. Definir o comportamento do `/seu-boleto` com o fornecedor do sistema
5. Revisar a política de privacidade conforme o destino real dos dados
6. Publicar na Vercel e apontar o domínio
7. Remover `InstagramEditora/` do repositório
