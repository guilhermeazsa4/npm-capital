import type { Metadata } from "next";
import { NoticiasContent } from "./content";

export const metadata: Metadata = {
  title: "Notícias — NPG Capital",
  description:
    "Artigos sobre gestão condominial, inadimplência e previsibilidade financeira para síndicos e administradoras.",
};

export default function NoticiasPage() {
  return <NoticiasContent />;
}
