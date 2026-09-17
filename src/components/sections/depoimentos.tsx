"use client";

import Image from "next/image";
import { MotionBlock } from "@/components/ui";

export function DepoimentosSection() {
  const highlights = [
    {
      caption: "Manutenção do prédio sempre em dia",
      photo: "/assets/manutencao.webp",
    },
    {
      caption: "Área comum bem cuidada",
      photo: "/assets/areacomum.webp",
    },
    {
      caption: "Contas do condomínio sempre pagas",
      photo: "/assets/contassempreemdia.webp",
    },
  ];

  return (
    <section className="relative flex min-h-[104vh] items-center overflow-hidden bg-white px-5 py-24 lg:px-8 lg:py-28">
      <div className="relative z-10 mx-auto w-full max-w-[1220px]">
        <MotionBlock className="flex flex-col items-center text-center">
          <p className="text-base font-black uppercase tracking-[0.2em] text-[#F1C75B]">
            Quem já garantiu
          </p>
          <h2 className="mt-4 max-w-3xl px-4 text-4xl font-black leading-tight text-[#14344E] md:text-5xl">
            Agora não se preocupa mais com o caixa e gere melhor o condomínio.
          </h2>
        </MotionBlock>

        <div className="mt-14 grid gap-5 md:px-16 lg:grid-cols-3 lg:px-0">
          {highlights.map((h, i) => (
            <MotionBlock key={h.caption} delay={i * 0.08}>
              <article className="premium-glass-button topbar-ticket-button group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-[16px]">
                <span className="relative h-48 w-full shrink-0 overflow-hidden">
                  <Image
                    src={h.photo}
                    alt={h.caption}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 380px, 100vw"
                  />
                </span>
                <div className="relative z-10 flex flex-1 items-center p-7">
                  <p className="text-base font-black leading-7 text-white">{h.caption}</p>
                </div>
              </article>
            </MotionBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
