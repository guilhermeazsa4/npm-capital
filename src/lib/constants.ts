export const WHATSAPP_NUMBER = "5511978589115";
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Sou síndico(a) e gostaria de solicitar uma proposta da NPG Capital para o meu condomínio."
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const CONTACT = {
  email: "contato@npgcapital.com.br",
  phone: "(11) 97858-9115",
  address: "Av. Paulista, 1000 — São Paulo, SP",
  // TODO: substituir pelo CNPJ real antes de publicar — aparece no footer e na política de privacidade.
  cnpj: "00.001.010/0001-00",
} as const;

export const SOCIAL = {
  instagram: "https://www.instagram.com/npgcapital",
  facebook: "https://www.facebook.com/npgcapital",
} as const;
