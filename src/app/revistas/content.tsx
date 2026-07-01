"use client";

import { BookOpen } from "lucide-react";
import { FloatingWhatsApp, MotionBlock, PageHeader } from "@/components/ui";

const revistas = [
  { edition: "Edição 12", title: "Inadimplência condominial: o que mudou na lei" },
  { edition: "Edição 11", title: "Como aprovar o orçamento anual sem desgaste em assembleia" },
  { edition: "Edição 10", title: "Fundo de reserva: quanto guardar e quando usar" },
];

export function RevistasContent() {
  return (
    <main className="bg-white">
      <PageHeader
        eyebrow="Conteúdo"
        title="Revistas NPG"
        description="Edições com análises de mercado, jurídico condominial e boas práticas de gestão para síndicos e administradoras."
      />

      <section className="section-grid bg-white px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {revistas.map((r, i) => (
              <MotionBlock key={r.edition} delay={i * 0.08}>
                <article
                  className="group overflow-hidden rounded-[8px] border border-[#14344E]/10 bg-white shadow-[0_16px_46px_rgba(20,52,78,0.06)] transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <div className="flex h-56 items-center justify-center bg-[#14344E]">
                    <BookOpen className="h-14 w-14 text-[#F1C75B]" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold text-[#F1C75B]">{r.edition}</p>
                    <h3 className="mt-2 text-lg font-black leading-snug text-[#14344E]">
                      {r.title}
                    </h3>
                    <button
                      type="button"
                      className="mt-4 text-sm font-bold text-[#F1C75B] transition-colors hover:text-[#b8882e]"
                    >
                      Ler edição &rarr;
                    </button>
                  </div>
                </article>
              </MotionBlock>
            ))}
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  );
}
