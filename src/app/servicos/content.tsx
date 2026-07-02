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
  {
    icon: BanknoteArrowUp,
    title: "Repasse mensal",
    text: "O fluxo de repasse fica mais organizado, permitindo que administradora e síndico saibam quando contar com os recursos.",
  },
  {
    icon: Gavel,
    title: "Acompanhamento jurídico",
    text: "As etapas formais são acompanhadas com critério, evitando improvisos e dando rastreabilidade ao processo de recuperação.",
  },
  {
    icon: TrendingUp,
    title: "Obras planejadas",
    text: "Com previsibilidade, obras deixam de depender apenas do caixa disponível no mês e podem ser estruturadas com antecedência.",
  },
  {
    icon: Handshake,
    title: "Menos atrito",
    text: "A cobrança deixa de ser uma tensão direta dentro do condomínio, criando uma rotina mais profissional e menos pessoal.",
  },
  {
    icon: ShieldCheck,
    title: "Reserva preservada",
    text: "O fundo de reserva deixa de ser usado para cobrir inadimplência recorrente e permanece disponível para emergências reais.",
  },
  {
    icon: BanknoteArrowUp,
    title: "Recuperação de atrasos",
    text: "Valores vencidos entram em uma rotina de recuperação contínua, com prioridade, registro e evolução acompanhada ao longo do tempo.",
  },
  {
    icon: Gavel,
    title: "Critérios claros",
    text: "Cada etapa da cobrança segue critérios definidos, ajudando a evitar ruídos, dúvidas e negociações conduzidas no improviso.",
  },
  {
    icon: TrendingUp,
    title: "Contratos em dia",
    text: "Com arrecadação mais estável, o condomínio consegue honrar fornecedores e serviços essenciais sem sacrificar outras prioridades.",
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
      <section className="relative z-20 flex min-h-[820px] items-center overflow-visible bg-[#0E1F1E] px-5 py-24 text-white lg:min-h-screen lg:px-8 lg:py-28">
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

        <div className="relative z-10 mx-auto max-w-[980px] translate-y-4 text-center lg:translate-y-6">
          <MotionBlock>
            <p className="-translate-y-5 text-sm font-black uppercase tracking-[0.22em] text-[#F1C75B] lg:-translate-y-7">
              Serviços NPG Capital
            </p>
            <h1 className="mx-auto mt-5 max-w-4xl -translate-y-5 text-4xl font-black leading-tight md:text-5xl lg:-translate-y-7 lg:text-[58px]">
              Soluções financeiras para condomínios com caixa previsível.
            </h1>
          </MotionBlock>

          <MotionBlock delay={0.12}>
            <div className="mx-auto mt-9 grid max-w-[860px] items-start gap-3 sm:grid-cols-3">
              {highlights.map((item, index) => {
                const isActive = activeHighlight === index;

                return (
                  <div key={item.title} className="relative h-[70px]">
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
                      className={`hero-highlight-card group absolute inset-x-0 top-0 z-20 cursor-pointer overflow-hidden rounded-[18px] px-5 py-4 text-white transition-[height] duration-300 hover:h-[260px] focus-visible:h-[260px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F1C75B]/25 ${
                        isActive ? "h-[260px]" : "h-[70px]"
                      }`}
                    >
                      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.36),transparent_34%,rgba(255,255,255,0.14)_72%,transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-85 group-focus-visible:opacity-85" />
                      <div className="relative z-10 flex min-h-10 items-center justify-center text-center">
                        <h3 className="text-[15px] font-black leading-tight text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p
                        className={`relative z-10 mx-auto mt-0 max-h-0 max-w-[240px] overflow-hidden text-center text-sm font-semibold leading-6 text-white/90 opacity-0 transition-all duration-300 group-hover:mt-5 group-hover:max-h-44 group-hover:opacity-100 group-focus-visible:mt-5 group-focus-visible:max-h-44 group-focus-visible:opacity-100 ${
                          isActive ? "mt-5 max-h-44 opacity-100" : ""
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

      <section className="npg-company-section relative z-10 flex min-h-[108vh] items-center overflow-hidden px-5 py-10 text-[#14344E] lg:px-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F1C75B]/70 to-transparent" />

        <div className="relative z-10 mx-auto max-w-[980px] text-center">
          <MotionBlock>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#A66A12]">
              O que a NPG faz
            </p>
            <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black leading-tight text-[#14344E] md:text-[44px]">
              A operação que protege a arrecadação e simplifica a gestão.
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-[#14344E]/72 md:text-base">
              Em vez de tratar inadimplência como uma urgência recorrente, a NPG
              estrutura o fluxo financeiro para que o condomínio tenha clareza,
              previsibilidade e menos atrito na rotina.
            </p>

          </MotionBlock>

          <div className="services-marquee relative left-1/2 mt-5 w-screen -translate-x-1/2 translate-y-8 overflow-hidden">
            <div className="services-marquee-track flex w-max gap-4">
              {[0, 1].map((group) => (
                <div
                  key={group}
                  className="services-marquee-group flex shrink-0 gap-4"
                  aria-hidden={group === 1}
                >
                  {services.map((service) => {
                    const Icon = service.icon;

                    return (
                      <article
                        key={`${service.title}-${group}`}
                        className="relative h-[300px] w-[230px] shrink-0 overflow-hidden rounded-[8px] border border-white/30 bg-[#0F2F49]/94 p-4 text-center text-white shadow-[0_22px_64px_rgba(20,52,78,0.22),0_0_0_1px_rgba(255,255,255,0.08),inset_0_1px_0_rgba(255,255,255,0.24),inset_0_-1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl"
                      >
                        <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.26),transparent_34%,rgba(255,255,255,0.1)_72%,transparent)] opacity-90" />
                        <span className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#F1C75B] text-[#0E1F1E] shadow-[0_14px_30px_rgba(4,17,24,0.18)]">
                          <Icon aria-hidden="true" className="h-6 w-6" />
                        </span>
                        <h3 className="relative z-10 mt-4 text-base font-black leading-tight text-white">
                          {service.title}
                        </h3>
                        <p className="relative z-10 mt-3 text-[13px] leading-5 text-white/80">
                          {service.text}
                        </p>
                      </article>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  );
}
