export const WHATSAPP_NUMBER = "5511978589115";
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Sou síndico(a) e gostaria de solicitar uma proposta da NPG Capital para o meu condomínio."
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const CONTACT = {
  email: "gerencia@npgcapital.com.br",
  phone: "(11) 97858-9115",
  address: "Av. Paulista, 1000 — São Paulo, SP",
  cnpj: "66.492.850/0001-62",
} as const;

/**
 * Portal externo onde o morador emite a 2ª via do boleto. Operado por terceiro,
 * não pela NPG — por isso a página avisa que o usuário está saindo do site.
 *
 * TODO: preencher com a URL real antes de publicar. Enquanto estiver vazio, a
 * página /seu-boleto mostra só o caminho por WhatsApp, sem link quebrado.
 */
export const BOLETO_PORTAL_URL = "";

export const SOCIAL = {
  instagram: "https://www.instagram.com/npgcapital",
  facebook: "https://www.facebook.com/npgcapital",
} as const;
