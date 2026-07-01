"use client";

import { Clock, Download, LockKeyhole, MessageCircle } from "lucide-react";
import { useState } from "react";
import { FloatingWhatsApp, MotionBlock, PageHeader } from "@/components/ui";
import { WHATSAPP_URL } from "@/lib/constants";

export function SeuBoletoContent() {
  const [searched, setSearched] = useState(false);

  return (
    <main className="bg-white">
      <PageHeader
        eyebrow="Autoatendimento"
        title="Segunda via do seu boleto"
        description="Informe seu CPF/CNPJ e a unidade para emitir a 2ª via do boleto condominial."
      />

      <section className="section-grid bg-white px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          {/* Formulário */}
          <MotionBlock>
            <div className="rounded-[8px] border border-[#14344E]/10 bg-white p-6 shadow-[0_16px_46px_rgba(20,52,78,0.08)] sm:p-8">
              {searched ? (
                <div>
                  <h3 className="text-xl font-black text-[#14344E]">
                    Boleto encontrado
                  </h3>
                  <div className="mt-6 rounded-[4px] border border-[#14344E]/10 p-5">
                    <p className="text-sm font-semibold text-[#14344E]/60">
                      Boleto &middot; vencimento 10/07/2026
                    </p>
                    <p className="mt-1 text-lg font-black text-[#14344E]">
                      Taxa condominial — R$ 780,00
                    </p>
                    <button
                      type="button"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#F1C75B] transition-colors hover:text-[#b8882e]"
                    >
                      <Download className="h-4 w-4" />
                      Baixar 2ª via
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSearched(false)}
                    className="mt-4 text-sm font-semibold text-[#14344E]/50 hover:text-[#14344E]"
                  >
                    &larr; Nova busca
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSearched(true);
                  }}
                >
                  <h3 className="mb-6 text-xl font-black text-[#14344E]">
                    Buscar boleto
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="cpf" className="mb-1 block text-sm font-semibold text-[#14344E]">
                        CPF ou CNPJ <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="cpf"
                        type="text"
                        required
                        placeholder="000.000.000-00"
                        className="w-full rounded-[4px] border border-[#14344E]/15 bg-white px-4 py-3 text-sm text-[#14344E] outline-none transition-colors focus:border-[#F1C75B] focus:ring-2 focus:ring-[#F1C75B]/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="unidade" className="mb-1 block text-sm font-semibold text-[#14344E]">
                        Unidade
                      </label>
                      <input
                        id="unidade"
                        type="text"
                        placeholder="Ex.: Bloco B, ap. 51"
                        className="w-full rounded-[4px] border border-[#14344E]/15 bg-white px-4 py-3 text-sm text-[#14344E] outline-none transition-colors focus:border-[#F1C75B] focus:ring-2 focus:ring-[#F1C75B]/20"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[4px] bg-[#F1C75B] px-6 text-sm font-black text-[#0E1F1E] transition-colors hover:bg-[#E1B34C]"
                  >
                    Buscar boleto
                  </button>
                </form>
              )}
            </div>
          </MotionBlock>

          {/* Aside */}
          <MotionBlock delay={0.12}>
            <div className="space-y-4">
              {[
                {
                  icon: Clock,
                  text: "Disponível 24 horas, sem precisar falar com ninguém.",
                },
                {
                  icon: LockKeyhole,
                  text: "Ambiente seguro — seus dados não são compartilhados.",
                },
                {
                  icon: MessageCircle,
                  text: "Dúvidas no pagamento? Fale com a gente pelo WhatsApp.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    className="flex items-start gap-4 rounded-[8px] border border-[#14344E]/10 bg-white p-5 shadow-[0_8px_24px_rgba(20,52,78,0.04)]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] bg-[#14344E] text-[#F1C75B]">
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <p className="text-sm leading-6 text-[#14344E]/70">{item.text}</p>
                  </div>
                );
              })}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[4px] bg-[#1FAF67] px-5 text-sm font-black text-white transition-colors hover:bg-[#168E53]"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </div>
          </MotionBlock>
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  );
}
