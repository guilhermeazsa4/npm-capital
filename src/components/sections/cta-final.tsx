"use client";

import { MotionBlock, PrimaryButton, WhatsAppButton } from "@/components/ui";

export function CtaFinal() {
  return (
    <section className="home-section npg-company-section relative flex min-h-[104vh] items-center overflow-hidden px-5 py-24 text-[#14344E] lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-24 bg-[linear-gradient(180deg,rgba(14,31,30,0.08),transparent)]" />
      <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-transparent via-[#F1C75B] to-transparent" />

      <div className="home-scaled-block relative z-10 mx-auto w-full max-w-[1220px]">
        <MotionBlock className="flex justify-center">
          <div className="hero-highlight-card cta-final-card w-full max-w-[1120px] rounded-[18px] px-6 py-14 text-center sm:px-14 lg:px-24">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F1C75B]">
              Próximo passo
            </p>
            <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-black leading-tight text-white md:text-5xl">
              Quanto a <span className="text-[#F1C75B]">inadimplência</span>{" "}
              custa ao seu condomínio este mês?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/75">
              Faça uma análise gratuita e descubra qual seria a arrecadação
              garantida do seu prédio. Sem custo e sem compromisso.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <PrimaryButton href="/contato#solicitar-proposta" className="sm:w-auto">
                Solicitar Proposta
              </PrimaryButton>
              <WhatsAppButton className="sm:w-auto">Falar no WhatsApp</WhatsAppButton>
            </div>
            <p className="mt-6 text-sm text-white/50">
              Análise gratuita &middot; Resposta em até 1 dia útil &middot; Sem compromisso
            </p>
          </div>
        </MotionBlock>
      </div>
    </section>
  );
}
