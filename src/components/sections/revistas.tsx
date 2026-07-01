"use client";

import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { Eyebrow, MotionBlock } from "@/components/ui";

export function RevistasSection() {
  const revistas = [
    { edition: "Edição 12", title: "Inadimplência condominial: o que mudou na lei" },
    { edition: "Edição 11", title: "Como aprovar o orçamento anual sem desgaste em assembleia" },
    { edition: "Edição 10", title: "Fundo de reserva: quanto guardar e quando usar" },
  ];

  return (
    <section className="section-grid bg-white px-5 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1220px]">
        <MotionBlock>
          <Eyebrow icon={<BookOpen aria-hidden="true" className="h-4 w-4" />}>
            Conteúdo
          </Eyebrow>
          <h2 className="max-w-xl text-4xl font-black leading-tight text-[#14344E] md:text-5xl">
            Gestão condominial sem achismo.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#14344E]/72">
            Edições com análises de mercado, jurídico condominial e boas
            práticas de gestão para síndicos e administradoras.
          </p>
        </MotionBlock>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {revistas.map((r, i) => (
            <MotionBlock key={r.edition} delay={i * 0.08}>
              <article
                className="group overflow-hidden rounded-[8px] border border-[#14344E]/10 bg-white shadow-[0_16px_46px_rgba(20,52,78,0.06)] transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="flex h-48 items-center justify-center bg-[#14344E]">
                  <BookOpen className="h-12 w-12 text-[#F1C75B]" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold text-[#F1C75B]">{r.edition}</p>
                  <h3 className="mt-2 text-base font-black leading-snug text-[#14344E]">
                    {r.title}
                  </h3>
                </div>
              </article>
            </MotionBlock>
          ))}
        </div>

        <MotionBlock delay={0.3} className="mt-10">
          <Link
            href="/revistas"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#F1C75B] transition-colors hover:text-[#b8882e]"
          >
            Ver todas as edições
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </MotionBlock>
      </div>
    </section>
  );
}
