"use client";

import Image from "next/image";
import {
  BanknoteArrowUp,
  Gavel,
  Handshake,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { FloatingWhatsApp, MotionBlock } from "@/components/ui";

const services = [
  {
    icon: ShieldCheck,
    title: "Receita garantida",
    text: "O condomínio recebe a arrecadação prevista mesmo com unidades inadimplentes, mantendo folha, contratos e manutenção dentro do planejamento mensal.",
  },
  {
    icon: BanknoteArrowUp,
    title: "Cobrança especializada",
    text: "A NPG assume a cobrança administrativa com método, comunicação adequada e acompanhamento contínuo dos valores em aberto.",
  },
  {
    icon: Gavel,
    title: "Cobrança judicial",
    text: "Quando a cobrança administrativa não resolve, a condução jurídica entra no fluxo para proteger o caixa coletivo com documentação organizada.",
  },
  {
    icon: TrendingUp,
    title: "Antecipação para obras",
    text: "Melhorias, manutenções e obras prioritárias podem avançar com mais segurança, sem depender do ritmo irregular dos pagamentos.",
  },
  {
    icon: Handshake,
    title: "Gestão sem desgaste",
    text: "Síndico e administradora deixam de ocupar o papel de cobradores, reduzindo atritos e preservando o relacionamento com moradores.",
  },
  {
    icon: ShieldCheck,
    title: "Caixa previsível",
    text: "A gestão passa a enxergar entradas e compromissos com mais clareza, reduzindo decisões de última hora no fechamento do mês.",
  },
] as const;

const highlights = [
  {
    title: "Previsibilidade de caixa",
    description:
      "A arrecadação deixa de depender do comportamento individual de cada unidade. O condomínio passa a trabalhar com uma receita prevista, facilitando folha, contratos, manutenção, reservas e decisões de assembleia.",
  },
  {
    title: "Cobrança conduzida",
    description:
      "A cobrança deixa de pesar sobre síndico e administradora. A NPG acompanha os atrasos com rotina própria, comunicação adequada, critérios definidos e evolução documentada dos valores em aberto.",
  },
  {
    title: "Planejamento financeiro",
    description:
      "Com o caixa protegido, a gestão consegue organizar prioridades com mais segurança: contratos, melhorias, obras, reserva financeira e negociações importantes deixam de depender de improviso.",
  },
] as const;

export function ServicosContent() {
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);

  return (
    <main className="bg-white">
      <section className="relative z-20 flex min-h-[760px] items-center overflow-visible bg-[#0E1F1E] px-4 py-24 text-white sm:px-6 md:min-h-[820px] lg:px-8 lg:py-28 xl:min-h-screen">
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
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F1C75B]/70 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[980px] translate-y-2 text-center lg:translate-y-6 2xl:max-w-[1180px]">
          <MotionBlock>
            <p className="-translate-y-4 text-xs font-black uppercase tracking-[0.2em] text-[#F1C75B] sm:text-sm lg:-translate-y-7 lg:tracking-[0.22em] 2xl:text-base">
              Serviços NPG Capital
            </p>
            <h1 className="mx-auto mt-5 max-w-4xl -translate-y-4 text-balance text-3xl font-black leading-tight sm:text-4xl md:text-5xl lg:-translate-y-7 lg:text-[58px] 2xl:max-w-[1120px] 2xl:text-[74px]">
              Soluções financeiras para condomínios com caixa previsível.
            </h1>
          </MotionBlock>

          <MotionBlock delay={0.12} className="hidden xl:block">
            <div className="mx-auto mt-7 grid max-w-[520px] items-start gap-3 sm:mt-9 xl:max-w-[860px] xl:grid-cols-3 2xl:max-w-[1040px] 2xl:gap-5">
              {highlights.map((item, index) => {
                const isActive = activeHighlight === index;

                return (
                  <div key={item.title} className="relative min-h-[70px] xl:h-[70px] 2xl:h-[84px]">
                    <article
                      tabIndex={0}
                      role="button"
                      aria-expanded={isActive}
                      onClick={() => setActiveHighlight(isActive ? null : index)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setActiveHighlight(isActive ? null : index);
                        }
                      }}
                      className={`hero-highlight-card group relative z-20 cursor-pointer overflow-hidden rounded-[16px] px-5 py-4 text-white transition-[height] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F1C75B]/25 xl:absolute xl:inset-x-0 xl:top-0 xl:rounded-[18px] xl:hover:h-[260px] xl:focus-visible:h-[260px] 2xl:px-7 2xl:py-5 2xl:hover:h-[300px] 2xl:focus-visible:h-[300px] ${
                        isActive ? "h-auto xl:h-[260px] 2xl:h-[300px]" : "h-auto xl:h-[70px] 2xl:h-[84px]"
                      }`}
                    >
                      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.36),transparent_34%,rgba(255,255,255,0.14)_72%,transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-85 group-focus-visible:opacity-85" />
                      <div className="relative z-10 flex min-h-10 items-center justify-center text-center">
                        <h3 className="text-[15px] font-black leading-tight text-white 2xl:text-lg">
                          {item.title}
                        </h3>
                      </div>
                      <p
                        className={`relative z-10 mx-auto mt-4 max-w-[360px] text-center text-sm font-semibold leading-6 text-white/90 opacity-100 transition-all duration-300 xl:mt-0 xl:max-h-0 xl:max-w-[240px] xl:overflow-hidden xl:opacity-0 xl:group-hover:mt-5 xl:group-hover:max-h-44 xl:group-hover:opacity-100 xl:group-focus-visible:mt-5 xl:group-focus-visible:max-h-44 xl:group-focus-visible:opacity-100 2xl:max-w-[300px] 2xl:text-base 2xl:leading-7 2xl:group-hover:max-h-52 2xl:group-focus-visible:max-h-52 ${
                          isActive ? "xl:mt-5 xl:max-h-44 xl:opacity-100 2xl:max-h-52" : ""
                        }`}
                      >
                        {item.description}
                      </p>
                    </article>
                  </div>
                );
              })}
            </div>
          </MotionBlock>
        </div>
      </section>

      <section className="npg-company-section relative z-10 flex min-h-[auto] items-center overflow-hidden px-4 py-14 text-[#14344E] sm:px-6 md:py-16 lg:px-8 xl:min-h-[108vh] xl:py-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F1C75B]/70 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[980px] text-center 2xl:max-w-[1180px]">
          <MotionBlock>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#A66A12] sm:text-sm sm:tracking-[0.22em] 2xl:text-base">
              O que a NPG faz
            </p>
            <h2 className="mx-auto mt-4 max-w-4xl text-balance text-3xl font-black leading-tight text-[#14344E] md:text-[44px] 2xl:max-w-[1080px] 2xl:text-[58px]">
              A operação que protege a arrecadação e simplifica a gestão.
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-[#14344E]/72 md:text-base 2xl:max-w-[860px] 2xl:text-lg 2xl:leading-8">
              Em vez de tratar inadimplência como uma urgência recorrente, a NPG
              estrutura o fluxo financeiro para que o condomínio tenha clareza,
              previsibilidade e menos atrito na rotina.
            </p>

          </MotionBlock>

          <div className="mx-auto mt-10 grid w-full max-w-[560px] grid-cols-1 gap-4 xl:relative xl:left-1/2 xl:w-screen xl:max-w-none xl:-translate-x-1/2 xl:grid-cols-6 xl:px-8 2xl:mt-14 2xl:gap-5 2xl:px-12">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <MotionBlock key={service.title} delay={index * 0.04}>
                  <article className="relative h-full min-h-[220px] overflow-hidden rounded-[8px] border border-white/30 bg-[#0F2F49]/94 p-5 text-center text-white shadow-[0_22px_64px_rgba(20,52,78,0.22),0_0_0_1px_rgba(255,255,255,0.08),inset_0_1px_0_rgba(255,255,255,0.24),inset_0_-1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl xl:min-h-[260px] xl:p-4 2xl:min-h-[320px] 2xl:p-6">
                    <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.26),transparent_34%,rgba(255,255,255,0.1)_72%,transparent)] opacity-90" />
                    <span className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#F1C75B] text-[#0E1F1E] shadow-[0_14px_30px_rgba(4,17,24,0.18)] 2xl:h-14 2xl:w-14">
                      <Icon aria-hidden="true" className="h-6 w-6 2xl:h-7 2xl:w-7" />
                    </span>
                    <h3 className="relative z-10 mt-4 text-base font-black leading-tight text-white 2xl:mt-5 2xl:text-xl">
                      {service.title}
                    </h3>
                    <p className="relative z-10 mt-3 text-[13px] leading-5 text-white/80 2xl:mt-4 2xl:text-[15px] 2xl:leading-7">
                      {service.text}
                    </p>
                  </article>
                </MotionBlock>
              );
            })}
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  );
}
