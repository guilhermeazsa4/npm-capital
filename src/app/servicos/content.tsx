"use client";

import { FloatingActions } from "@/components/ui";
import { ProblemaSection, BeneficiosDiferenteSection, CtaFinal } from "@/components/sections";

export function ServicosContent() {
  return (
    <main className="bg-white">
      <div className="pt-20 sm:pt-24 lg:pt-28">
        <ProblemaSection />
      </div>
      <BeneficiosDiferenteSection />
      <CtaFinal />

      <FloatingActions />
    </main>
  );
}
