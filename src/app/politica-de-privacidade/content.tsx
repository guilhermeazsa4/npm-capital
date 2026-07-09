import { FloatingActions, PageHeader } from "@/components/ui";
import { CONTACT } from "@/lib/constants";

const sections = [
  {
    title: "1. Quem somos e quem é o controlador dos dados",
    body: `O controlador dos dados pessoais tratados neste site é a NPG Capital (CNPJ ${CONTACT.cnpj}), com sede em ${CONTACT.address}. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos os dados pessoais de quem navega e preenche formulários em nosso site, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).`,
  },
  {
    title: "2. Quais dados coletamos e em quais formulários",
    body: "Coletamos apenas os dados que você nos informa voluntariamente ao preencher um dos formulários do site: (i) Solicitar Proposta (/contato) — nome, e-mail, telefone/WhatsApp, nome do condomínio e, opcionalmente, a receita mensal; (ii) Contato (/contato) — nome, e-mail, telefone/WhatsApp, nome do condomínio e mensagem opcional; (iii) Download de e-book (/e-books) — nome, e-mail, profissão e telefone; (iv) Segunda via de boleto (/seu-boleto) — CPF ou CNPJ e unidade, usados apenas para localizar e emitir o boleto correspondente. Não coletamos dados sensíveis (saúde, origem racial, opinião política, etc.).",
  },
  {
    title: "3. Para que usamos seus dados",
    body: "Usamos os dados para: (i) responder solicitações de proposta e contato; (ii) localizar e emitir a 2ª via de boletos a pedido do próprio condômino; (iii) enviar materiais gratuitos (e-books, revistas) solicitados por você; (iv) entrar em contato por e-mail, telefone ou WhatsApp sobre os serviços da NPG Capital; e (v) cumprir obrigações legais e regulatórias.",
  },
  {
    title: "4. Base legal",
    body: "O tratamento dos seus dados é baseado no seu consentimento, dado ao preencher e enviar um formulário, e no legítimo interesse da NPG Capital em responder contatos comerciais que você mesmo iniciou.",
  },
  {
    title: "5. Compartilhamento de dados",
    body: "Não vendemos seus dados. Podemos compartilhá-los com prestadores de serviço que nos ajudam a operar o site e atender contatos (por exemplo, ferramentas de e-mail e CRM), sempre sob obrigação de confidencialidade, ou quando exigido por lei ou ordem judicial.",
  },
  {
    title: "6. Cookies e métricas de uso",
    body: "Este site não utiliza cookies de rastreamento, publicidade ou perfis de navegação. Guardamos apenas uma informação técnica no seu navegador (localStorage) para lembrar que você já viu o aviso de cookies — isso não identifica você nem é compartilhado com terceiros. Utilizamos (ou passaremos a utilizar) o Vercel Analytics para entender o volume de visitas e o desempenho do site: é uma ferramenta sem cookies, que não coleta dados pessoais nem identifica visitantes individualmente, apenas métricas agregadas e anônimas (como número de acessos, páginas visitadas, país e tipo de dispositivo). Caso passemos a usar cookies ou ferramentas de rastreamento no futuro, atualizaremos esta política e, se necessário, solicitaremos seu consentimento por meio de um aviso específico.",
  },
  {
    title: "7. Armazenamento e segurança",
    body: "Adotamos medidas técnicas e organizacionais razoáveis para proteger seus dados contra acesso não autorizado, perda ou alteração. Mantemos os dados apenas pelo tempo necessário para cumprir as finalidades descritas acima ou por obrigação legal.",
  },
  {
    title: "8. Seus direitos",
    body: "Nos termos da LGPD, você pode solicitar a qualquer momento: confirmação da existência de tratamento, acesso aos dados, correção de dados incompletos ou desatualizados, anonimização, bloqueio ou eliminação de dados desnecessários, portabilidade, informação sobre compartilhamento e revogação do consentimento.",
  },
  {
    title: "9. Encarregado de dados (DPO) e como falar com a gente",
    body: `Para exercer seus direitos, tirar dúvidas sobre esta política ou falar com o encarregado de dados (DPO) da NPG Capital, entre em contato pelo e-mail ${CONTACT.email}.`,
  },
  {
    title: "10. Alterações desta política",
    body: "Esta política pode ser atualizada periodicamente. A versão vigente é sempre a publicada nesta página.",
  },
];

export function PoliticaDePrivacidadeContent() {
  return (
    <main className="bg-white">
      <PageHeader
        eyebrow="Transparência"
        title="Política de Privacidade"
        description="Como tratamos os dados pessoais informados nos formulários deste site, em conformidade com a LGPD."
      />

      <section className="section-grid bg-white px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px] space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-black text-[#14344E]">{s.title}</h2>
              <p className="mt-2 max-w-[760px] text-sm leading-8 text-[#14344E]/70">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <FloatingActions />
    </main>
  );
}
