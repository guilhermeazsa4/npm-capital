import type { Metadata } from "next";
import { EbooksContent } from "./content";

export const metadata: Metadata = {
  title: "E-books — NPG Capital",
  description:
    "Materiais práticos e gratuitos para a gestão do seu condomínio. Baixe em troca apenas do seu e-mail.",
};

export default function EbooksPage() {
  return <EbooksContent />;
}
