"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { MotionBlock } from "@/components/ui";

const inputClassName =
  "w-full rounded-[4px] border border-[#14344E]/15 bg-white px-4 py-3 text-sm text-[#14344E] outline-none transition-colors focus:border-[#F1C75B] focus:ring-2 focus:ring-[#F1C75B]/20";
const labelClassName = "mb-1 block text-sm font-semibold text-[#14344E]";

export function CtaFinal() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative flex min-h-[104vh] items-center overflow-hidden bg-[#0E1F1E] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(20,52,78,0.94),rgba(14,31,30,1)_52%,rgba(20,52,78,0.86))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F1C75B]/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-transparent via-[#F1C75B] to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[980px]">
        <MotionBlock className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#F1C75B]">
            Próximo passo
          </p>
          <h2 className="mx-auto mt-6 text-xl font-black leading-tight text-white sm:whitespace-nowrap sm:text-2xl md:text-3xl">
            Descubra sua <span className="text-[#F1C75B]">arrecadação garantida</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/75">
            Faça uma análise gratuita e descubra qual seria a arrecadação garantida do seu prédio. Sem custo e sem compromisso.
          </p>
        </MotionBlock>

        <MotionBlock delay={0.12} className="mt-10">
          <div className="rounded-[8px] border border-[#14344E]/10 bg-white p-5 shadow-[0_16px_46px_rgba(20,52,78,0.24)] sm:p-8">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F1C75B]/10">
                  <MessageCircle className="h-8 w-8 text-[#F1C75B]" />
                </div>
                <h3 className="text-2xl font-black text-[#14344E]">
                  Solicitação recebida.
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#14344E]/70">
                  Obrigado. Nossa equipe entra em contato em até 1 dia útil
                  com a análise do seu condomínio.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <p className="mb-6 text-lg font-black text-[#14344E]">Solicitar Proposta</p>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div>
                      <label htmlFor="cta-nome" className={labelClassName}>
                        Nome <span className="text-red-500">*</span>
                      </label>
                      <input id="cta-nome" type="text" required placeholder="Seu nome" className={inputClassName} />
                    </div>
                    <div>
                      <label htmlFor="cta-email" className={labelClassName}>
                        E-mail <span className="text-red-500">*</span>
                      </label>
                      <input id="cta-email" type="email" required placeholder="voce@email.com" className={inputClassName} />
                    </div>
                    <div>
                      <label htmlFor="cta-telefone" className={labelClassName}>
                        Telefone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input id="cta-telefone" type="tel" required placeholder="(11) 99999-9999" className={inputClassName} />
                    </div>
                  </div>

                  <p className="pt-2 text-xs font-black uppercase tracking-[0.18em] text-[#14344E]/50">
                    Dados do condomínio
                  </p>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="cta-condominio" className={labelClassName}>
                        Nome do condomínio <span className="text-red-500">*</span>
                      </label>
                      <input id="cta-condominio" type="text" required placeholder="Nome do condomínio" className={inputClassName} />
                    </div>
                    <div>
                      <label htmlFor="cta-receita" className={labelClassName}>
                        Receita mensal
                      </label>
                      <input id="cta-receita" type="text" placeholder="Ex.: R$ 20.000" className={inputClassName} />
                    </div>
                  </div>
                </div>

                <label htmlFor="cta-consentimento" className="mt-4 flex items-start gap-2 text-xs leading-5 text-[#14344E]/70">
                  <input
                    id="cta-consentimento"
                    type="checkbox"
                    required
                    className="mt-0.5 h-4 w-4 shrink-0 rounded-[3px] border border-[#14344E]/30 text-[#F1C75B] focus:ring-2 focus:ring-[#F1C75B]/30"
                  />
                  <span>
                    Concordo com o tratamento dos meus dados de acordo com a{" "}
                    <Link href="/politica-de-privacidade" className="font-semibold text-[#14344E] underline hover:text-[#F1C75B]">
                      Política de Privacidade
                    </Link>
                    .
                  </span>
                </label>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="group relative inline-flex min-h-12 w-full items-center justify-center gap-3 overflow-hidden rounded-[8px] border border-[#FFE39A]/70 bg-[#F1C75B]/88 px-6 py-3 text-sm font-black text-[#0E1F1E] shadow-[0_16px_42px_rgba(241,199,91,0.3),inset_0_1px_0_rgba(255,255,255,0.46),inset_0_-1px_0_rgba(100,71,17,0.12)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-[#FFD66E]/92 hover:shadow-[0_20px_54px_rgba(241,199,91,0.4),inset_0_1px_0_rgba(255,255,255,0.56)] active:scale-[0.98]"
                  >
                    <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.52),transparent_36%,rgba(255,255,255,0.22)_72%,transparent)] opacity-90 transition-opacity group-hover:opacity-100" />
                    <span className="relative z-10">Solicitar proposta personalizada</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </MotionBlock>

        <MotionBlock delay={0.2}>
          <p className="mt-6 text-center text-sm text-white/55">
            Análise gratuita &middot; Resposta em até 1 dia útil &middot; Sem compromisso
          </p>
        </MotionBlock>
      </div>
    </section>
  );
}
