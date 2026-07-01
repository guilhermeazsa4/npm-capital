import type { Metadata } from "next";
import { AEmpresaContent } from "./content";

export const metadata: Metadata = {
  title: "A Empresa — NPG Capital",
  description:
    "A NPG Capital é uma garantidora condominial focada em previsibilidade de caixa e transparência para síndicos e administradoras.",
};

export default function AEmpresaPage() {
  return <AEmpresaContent />;
}
