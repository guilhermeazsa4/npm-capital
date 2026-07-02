import type { Metadata } from "next";
import { ServicosContent } from "./content";

export const metadata: Metadata = {
  title: "Serviços — NPG Capital",
  description:
    "Conheça os serviços da NPG Capital para condomínios: receita garantida, cobrança de inadimplentes, cobrança judicial, antecipação para obras e gestão sem desgaste.",
};

export default function ServicosPage() {
  return <ServicosContent />;
}
