/**
 * Envio dos formulários do site para o endpoint PHP hospedado junto com os
 * arquivos estáticos (public/api/enviar.php → /api/enviar.php no domínio).
 *
 * `next dev` não executa PHP, então em desenvolvimento o envio falha e o
 * formulário mostra o estado de erro. Para testar de verdade, suba o `out/`
 * num Apache com PHP ou aponte NEXT_PUBLIC_FORM_ENDPOINT para o site publicado.
 */

export const FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "/api/enviar.php";

export type FormStatus = "idle" | "enviando" | "enviado" | "erro";

const ERRO_GENERICO =
  "Não conseguimos enviar sua solicitação agora. Tente novamente ou fale com a gente pelo WhatsApp.";

export type ResultadoEnvio = { ok: true } | { ok: false; erro: string };

/**
 * `origem` identifica qual formulário disparou o envio — vai no CSV e no
 * assunto do e-mail, para a equipe saber de onde veio o lead.
 */
export async function enviarLead(
  form: HTMLFormElement,
  origem: string
): Promise<ResultadoEnvio> {
  const dados = new FormData(form);
  dados.set("origem", origem);

  try {
    const resposta = await fetch(FORM_ENDPOINT, {
      method: "POST",
      body: dados,
    });

    // Se o PHP não estiver rodando, a resposta é 404/HTML e não JSON.
    let corpo: { ok?: boolean; erro?: string | null } | null = null;
    try {
      corpo = await resposta.json();
    } catch {
      corpo = null;
    }

    if (!resposta.ok || !corpo?.ok) {
      return { ok: false, erro: corpo?.erro || ERRO_GENERICO };
    }

    return { ok: true };
  } catch {
    return { ok: false, erro: ERRO_GENERICO };
  }
}
