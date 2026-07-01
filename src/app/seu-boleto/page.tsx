import type { Metadata } from "next";
import { SeuBoletoContent } from "./content";

export const metadata: Metadata = {
  title: "Seu Boleto — NPG Capital",
  description:
    "Emita a 2ª via do seu boleto condominial de forma rápida e segura, a qualquer hora.",
};

export default function SeuBoletoPage() {
  return <SeuBoletoContent />;
}
