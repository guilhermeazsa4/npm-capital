"use client";

import { Download, FileText } from "lucide-react";
import Link from "next/link";
import { FloatingWhatsApp, MotionBlock, PageHeader } from "@/components/ui";

const ebooks = [
  { title: "Guia do síndico para reduzir a inadimplência", format: "24 páginas" },
  { title: "Checklist de transição de administradora", format: "16 páginas" },
  { title: "Modelo de planejamento orçamentário anual", format: "Planilha + guia" },
];

export function EbooksContent() {
  return (
    <main className="bg-white">
      <PageHeader
        eyebrow="Materiais gratuitos"
        title="E-books e guias práticos"
        description="Materiais aprofundados para baixar e consultar quando precisar. Gratuitos, em troca apenas do seu e-mail."
      />

      <section className="section-grid bg-white px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ebooks.map((eb, i) => (
              <MotionBlock key={eb.title} delay={i * 0.08}>
                <article
                  className="group flex h-full flex-col justify-between overflow-hidden rounded-[8px] border border-[#14344E]/10 bg-white p-6 shadow-[0_16px_46px_rgba(20,52,78,0.06)] transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <div>
                    <FileText aria-hidden="true" className="mb-4 h-10 w-10 text-[#F1C75B]" />
                    <h3 className="text-lg font-black leading-snug text-[#14344E]">
                      {eb.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#14344E]/50">{eb.format}</p>
                  </div>
                  <Link
                    href="/contato#formularios"
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#F1C75B] transition-colors hover:text-[#b8882e]"
                  >
                    Baixar gratuitamente
                    <Download className="h-4 w-4 transition-transform group-hover/link:translate-y-0.5" />
                  </Link>
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
