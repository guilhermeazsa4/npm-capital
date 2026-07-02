import type { Metadata } from "next";
import { PoliticaDePrivacidadeContent } from "./content";

export const metadata: Metadata = {
  title: "Política de Privacidade — NPG Capital",
  description:
    "Como a NPG Capital coleta, usa e protege os dados pessoais informados em nossos formulários, em conformidade com a LGPD.",
};

export default function PoliticaDePrivacidadePage() {
  return <PoliticaDePrivacidadeContent />;
}
