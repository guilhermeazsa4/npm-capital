"use client";

import { FloatingActions } from "@/components/ui";
import { ProblemaSection, BeneficiosDiferenteSection, CtaFinal } from "@/components/sections";

export function ServicosContent() {
  return (
    <main className="bg-white">
      <ProblemaSection className="pt-28 sm:pt-32 lg:pt-36" />
      <BeneficiosDiferenteSection />
      <CtaFinal />

      <FloatingActions />
    </main>
  );
}
