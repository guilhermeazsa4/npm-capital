"use client";

import Image from "next/image";
import { MotionBlock } from "@/components/ui";

export function ProblemaSection() {
  return (
    <section
      data-snap-section
      className="npg-company-section relative flex min-h-[108vh] items-center overflow-hidden px-3 py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-24 bg-[linear-gradient(180deg,rgba(14,31,30,0.12),transparent)]" />

      <div className="relative z-10 mx-auto mt-8 w-full max-w-[1120px] lg:mt-10">
        <div className="grid items-center gap-16 lg:grid-cols-[620px_420px] lg:justify-between">
          <MotionBlock>
            <div className="mx-auto max-w-[620px] text-center lg:mx-0 lg:text-left">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#C99A31]">
                Aqui na <span className="font-black text-[#B88622]">NPG</span>
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-[#14344E] md:text-4xl">
                A gente cuida da inadimplência para o síndico cuidar melhor do condomínio.
              </h2>

              <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-[#0E1F1E]">
                Administrar um condomínio não deveria ser uma sequência de
                cobranças, improvisos e conversas difíceis.
              </p>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#18302F]">
                A <span className="font-black text-[#0E1F1E]">NPG</span> entra
                para dar previsibilidade ao caixa e aliviar essa parte delicada
                da rotina, para que a gestão consiga focar no que realmente
                melhora a vida no prédio.
              </p>
            </div>
          </MotionBlock>

          <MotionBlock delay={0.12} className="w-full justify-self-end">
            <div className="relative w-full">
              <div className="npg-company-photo relative overflow-hidden rounded-[18px] border border-white/70 bg-[#0E1F1E] shadow-[0_28px_80px_rgba(20,52,78,0.18)]">
                <Image
                  src="/assets/analog-landscape-city-with-buildings-vertical.jpg"
                  alt="Condomínio residencial moderno com área externa arborizada"
                  width={1280}
                  height={1707}
                  className="h-[460px] w-full object-cover opacity-95 lg:h-[560px]"
                  sizes="(min-width: 1024px) 420px, 100vw"
                  priority={false}
                />

                <div className="npg-image-glass-card absolute bottom-4 left-4 right-4 z-10 rounded-[18px] p-4 text-white">
                  <p className="relative z-10 text-xs font-black uppercase tracking-[0.2em] text-[#F1C75B]">
                    Para a rotina
                  </p>
                  <p className="relative z-10 mt-2 text-base font-black leading-tight">
                    Mais tranquilidade para manter tudo em movimento.
                  </p>
                </div>
              </div>
            </div>
          </MotionBlock>
        </div>
      </div>
    </section>
  );
}
