"use client";

import Image from "next/image";
import { EbooksMarquee } from "@/components/ebooks-marquee";
import { FloatingActions, MotionBlock } from "@/components/ui";

export function EbooksContent() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-white px-4 pb-4 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-6 lg:pt-36">
        <div className="relative z-10 mx-auto max-w-[1220px] text-center">
          <MotionBlock>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#F1C75B] sm:mb-5 sm:text-sm sm:tracking-[0.22em]">
              Materiais gratuitos
            </p>
            <h1 className="mx-auto max-w-3xl text-balance text-3xl font-black leading-tight text-[#14344E] sm:text-4xl md:text-5xl lg:text-6xl">
              E-books e guias práticos
            </h1>
            <p className="mx-auto mt-5 flex max-w-2xl flex-wrap items-center justify-center gap-2 text-sm leading-7 text-[#14344E]/70 sm:gap-3 md:mt-6 md:text-lg md:leading-8">
              <span>Em parceria com</span>
              <Image
                src="/assets/BonijurisLogoBlack.png"
                alt="Bonijuris"
                width={140}
                height={32}
                className="h-7 w-auto object-contain sm:h-8"
              />
            </p>
          </MotionBlock>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-4 pb-14 pt-3 sm:px-6 lg:px-8 lg:pb-20 lg:pt-6">
        <div className="relative z-10">
          <MotionBlock>
            <EbooksMarquee />
          </MotionBlock>
        </div>
      </section>

      <FloatingActions />
    </main>
  );
}
