"use client";

import { MotionBlock, PrimaryButton, WhatsAppButton } from "@/components/ui";

export function CtaFinal() {
  return (
    <section
      data-snap-section
      className="relative flex min-h-[100vh] items-center overflow-hidden bg-[#14344E] px-5 py-24 text-white lg:px-8 lg:py-28"
    >
      <div className="cta-image absolute inset-0 bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,52,78,0.98),rgba(14,31,30,0.9)_62%,rgba(14,31,30,0.62))]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-[#F1C75B]/12 blur-[110px]" />
      <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-transparent via-[#F1C75B] to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1220px]">
        <MotionBlock className="flex justify-center">
          <div className="hero-highlight-card w-full max-w-[1120px] rounded-[28px] px-6 py-14 text-center sm:px-14 lg:px-24">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F1C75B]">
              Próximo passo
            </p>
            <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-black leading-tight md:text-5xl">
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
