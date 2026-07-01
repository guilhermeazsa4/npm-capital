"use client";

import { Download, FileText } from "lucide-react";
import Link from "next/link";
import { Eyebrow, MotionBlock } from "@/components/ui";

export function EbooksSection() {
  const ebooks = [
    { title: "Guia do síndico para reduzir a inadimplência", format: "24 páginas" },
    { title: "Checklist de transição de administradora", format: "16 páginas" },
    { title: "Modelo de planejamento orçamentário anual", format: "Planilha + guia" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0E1F1E] px-5 py-24 text-white lg:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(20,52,78,0.9),rgba(14,31,30,1)_55%,rgba(20,52,78,0.82))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F1C75B]/70 to-transparent" />
      <div className="relative z-10 mx-auto max-w-[1220px]">
        <MotionBlock>
          <Eyebrow icon={<Download aria-hidden="true" className="h-4 w-4" />}>
            Materiais gratuitos
          </Eyebrow>
          <h2 className="max-w-xl text-4xl font-black leading-tight md:text-5xl">
            Guias práticos para a gestão do seu condomínio.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
            Materiais aprofundados para baixar e consultar quando precisar.
            Gratuitos, em troca apenas do seu e-mail.
          </p>
        </MotionBlock>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ebooks.map((eb, i) => (
            <MotionBlock key={eb.title} delay={i * 0.08}>
              <article
                className="glass-premium flex h-full flex-col justify-between rounded-[8px] p-6 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="relative z-10">
                  <FileText aria-hidden="true" className="mb-4 h-8 w-8 text-[#F1C75B]" />
                  <h3 className="text-lg font-black text-white">{eb.title}</h3>
                  <p className="mt-2 text-sm text-white/50">{eb.format}</p>
                </div>
                <div className="relative z-10 mt-6">
                  <Link
                    href="/contato#formularios"
                    className="group inline-flex items-center gap-2 text-sm font-bold text-[#F1C75B] transition-colors hover:text-[#E1B34C]"
                  >
                    Baixar gratuitamente
                    <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  </Link>
                </div>
              </article>
            </MotionBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
