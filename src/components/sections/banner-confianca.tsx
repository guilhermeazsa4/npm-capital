"use client";

import { BadgeCheck } from "lucide-react";
import { Eyebrow, MotionBlock, PrimaryButton } from "@/components/ui";

export function BannerConfianca() {
  return (
    <section className="relative overflow-hidden bg-[#14344E] px-5 py-24 text-white lg:px-8 lg:py-28">
      <div className="trust-image absolute inset-0 bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,52,78,0.96),rgba(14,31,30,0.88)_62%,rgba(14,31,30,0.5))]" />
      <div className="relative z-10 mx-auto max-w-[1220px]">
        <MotionBlock>
          <Eyebrow icon={<BadgeCheck aria-hidden="true" className="h-4 w-4" />}>
            Por que confiam na NPG
          </Eyebrow>
          <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Quem garante o caixa sustenta o condomínio inteiro.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">
            De obras em dia a assembleias tranquilas: quando a arrecadação é
            previsível, a gestão muda de patamar.
          </p>
          <div className="mt-9">
            <PrimaryButton href="/contato#solicitar-proposta">
              Solicitar Proposta
            </PrimaryButton>
          </div>
        </MotionBlock>
      </div>
    </section>
  );
}
