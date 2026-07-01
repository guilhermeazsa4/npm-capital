import type { Metadata } from "next";
import { ContatoContent } from "./content";

export const metadata: Metadata = {
  title: "Contato — NPG Capital",
  description:
    "Solicite uma proposta gratuita para o seu condomínio ou fale com a NPG Capital no WhatsApp.",
};

export default function ContatoPage() {
  return <ContatoContent />;
}
