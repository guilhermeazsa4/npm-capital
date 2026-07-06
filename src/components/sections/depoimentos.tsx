"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { MotionBlock } from "@/components/ui";

export function DepoimentosSection() {
  const testimonials = [
    {
      quote: "A inadimplência tinha travado a reforma da fachada. Com a garantia, conseguimos planejar e executar a obra.",
      name: "Sandra Beltrão",
      role: "Edifício Aurora · Itaim Bibi, São Paulo, SP",
      photo: "/assets/Pessoa1.png",
    },
    {
      quote: "Parei de perseguir morador no corredor. O condomínio recebe certo todo mês e eu cuido do que importa.",
      name: "Ricardo Almeida",
      role: "Condomínio Panamérica · Vila Olímpia, São Paulo, SP",
      photo: "/assets/Pessoa2.png",
    },
    {
      quote: "O que mais pesava era a cobrança. Hoje isso é da NPG, e as assembleias ficaram muito menos tensas.",
      name: "Marcos Tavares",
      role: "Edifício Fidalga · Pinheiros, São Paulo, SP",
      photo: "/assets/Pessoa3.png",
    },
  ];

  return (
    <section className="relative flex min-h-[104vh] items-center overflow-hidden bg-white px-5 py-24 lg:px-8 lg:py-28">
      <div className="relative z-10 mx-auto w-full max-w-[1220px]">
        <MotionBlock className="flex flex-col items-center text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#F1C75B]">
            Quem já garantiu
          </p>
          <h2 className="mt-4 max-w-3xl px-4 text-4xl font-black leading-tight text-[#14344E] md:text-5xl">
            Síndicos que pararam de
            <br />
            se preocupar com o caixa.
          </h2>
        </MotionBlock>

        <div className="mt-14 grid gap-5 md:px-16 lg:grid-cols-3 lg:px-0">
          {testimonials.map((t, i) => (
            <MotionBlock key={t.name} delay={i * 0.08}>
              <article className="premium-glass-button topbar-ticket-button group relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-[16px] p-7">
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.36),transparent_34%,rgba(255,255,255,0.14)_72%,transparent)] opacity-85 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        aria-hidden="true"
                        className="h-4 w-4 fill-[#F1C75B] text-[#F1C75B]"
                      />
                    ))}
                  </div>
                  <p className="text-base leading-7 text-white/85">{t.quote}</p>
                </div>
                <div className="relative z-10 mt-6 flex items-center gap-3">
                  <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-[#F1C75B]/50">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </span>
                  <div>
                    <p className="text-sm font-black text-[#FFE8A6]">{t.name}</p>
                    <p className="text-xs text-white/55">{t.role}</p>
                  </div>
                </div>
              </article>
            </MotionBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
