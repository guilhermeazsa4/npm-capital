"use client";

import { MotionBlock, PrimaryButton, WhatsAppButton } from "@/components/ui";

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-[#14344E] px-5 py-24 text-white lg:px-8 lg:py-28">
      <div className="cta-image absolute inset-0 bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,52,78,0.98),rgba(14,31,30,0.9)_62%,rgba(14,31,30,0.62))]" />
      <div className="relative z-10 mx-auto max-w-[1220px] text-center">
        <MotionBlock>
          <h2 className="mx-auto max-w-3xl text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
            Quanto a inadimplência custa ao seu condomínio este mês?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/75">
            Faça uma análise gratuita e descubra qual seria a arrecadação
            garantida do seu prédio. Sem custo e sem compromisso.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryButton href="/contato#solicitar-proposta">
              Solicitar Proposta
            </PrimaryButton>
            <WhatsAppButton>Falar no WhatsApp</WhatsAppButton>
          </div>
          <p className="mt-6 text-sm text-white/50">
            Análise gratuita &middot; Resposta em até 1 dia útil &middot; Sem compromisso
          </p>
        </MotionBlock>
      </div>
    </section>
  );
}
