"use client";

import { Download } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { EbookDownloadModal } from "@/components/ebook-download-modal";
import { FloatingWhatsApp, MotionBlock, PageHeader } from "@/components/ui";

const ebooks = [
  { title: "Guia do síndico para reduzir a inadimplência", format: "24 páginas", image: "/assets/EbookAmarelo.png" },
  { title: "Checklist de transição de administradora", format: "16 páginas", image: "/assets/EbookAzul.png" },
  { title: "Modelo de planejamento orçamentário anual", format: "Planilha + guia", image: "/assets/EbookAmarelo.png" },
  { title: "Como blindar o caixa do condomínio contra atrasos", format: "20 páginas", image: "/assets/EbookAzul.png" },
  { title: "Roteiro de assembleia sem conflito", format: "12 páginas", image: "/assets/EbookAmarelo.png" },
  { title: "Guia de transparência financeira para síndicos", format: "18 páginas", image: "/assets/EbookAzul.png" },
];

export function EbooksContent() {
  const [selectedEbook, setSelectedEbook] = useState<string | null>(null);

  return (
    <main className="bg-white">
      <PageHeader
        eyebrow="Materiais gratuitos"
        title="E-books e guias práticos"
        description="Materiais aprofundados para baixar e consultar quando precisar. Gratuitos, em troca apenas do seu e-mail."
        centered
      />

      <section className="relative overflow-hidden bg-[#0E1F1E] px-5 py-24 lg:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(20,52,78,0.9),rgba(14,31,30,1)_55%,rgba(20,52,78,0.82))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F1C75B]/70 to-transparent" />
        <div className="relative z-10 mx-auto max-w-[1120px]">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ebooks.map((eb, i) => (
              <MotionBlock key={eb.title} delay={i * 0.08}>
                <button
                  type="button"
                  onClick={() => setSelectedEbook(eb.title)}
                  className="premium-glass-button topbar-ticket-button group flex h-full w-full flex-col justify-between overflow-hidden rounded-[16px] text-left transition-transform duration-300 will-change-transform hover:-translate-y-1.5"
                >
                  <div>
                    <div className="relative aspect-[3.5/4] bg-[#0E1F1E]">
                      <Image
                        src={eb.image}
                        alt={eb.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 380px, 100vw"
                      />
                    </div>
                    <div className="relative z-10 p-6">
                      <h3 className="text-lg font-black leading-snug text-white">
                        {eb.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/60">{eb.format}</p>
                    </div>
                  </div>
                  <span className="group/link relative z-10 mx-6 mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#F1C75B] transition-colors group-hover:text-[#FFE39A]">
                    Baixar gratuitamente
                    <Download className="h-4 w-4 transition-transform group-hover/link:translate-y-0.5" />
                  </span>
                </button>
              </MotionBlock>
            ))}
          </div>
        </div>
      </section>

      {selectedEbook ? (
        <EbookDownloadModal
          ebookTitle={selectedEbook}
          onClose={() => setSelectedEbook(null)}
        />
      ) : null}

      <FloatingWhatsApp />
    </main>
  );
}
