"use client";

import Image from "next/image";
import { FloatingActions, MotionBlock } from "@/components/ui";
import { ProblemaSection, BeneficiosDiferenteSection, CtaFinal } from "@/components/sections";

export function ServicosContent() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-36">
        <Image
          src="/assets/brigadeiro-faria-lima-avenue-sao-paulo-brazil.jpg"
          alt="Avenida Brigadeiro Faria Lima em São Paulo"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,17,24,0.42),rgba(14,31,30,0.74))]" />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(20,52,78,0.34),rgba(14,31,30,0.08)_54%,rgba(4,17,24,0.48))]" />

        <div className="relative z-10 mx-auto max-w-[1220px] text-center">
          <MotionBlock>
            <h1 className="mx-auto max-w-3xl text-balance text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Caixa previsível para o seu condomínio.
            </h1>
          </MotionBlock>
        </div>
      </section>

      <ProblemaSection />
      <BeneficiosDiferenteSection />
      <CtaFinal />

      <FloatingActions />
    </main>
  );
}
