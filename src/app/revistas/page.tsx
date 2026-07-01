import type { Metadata } from "next";
import { RevistasContent } from "./content";

export const metadata: Metadata = {
  title: "Revistas — NPG Capital",
  description:
    "Edições com análises de mercado, jurídico condominial e boas práticas de gestão para síndicos e administradoras.",
};

export default function RevistasPage() {
  return <RevistasContent />;
}
