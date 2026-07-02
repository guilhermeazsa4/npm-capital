"use client";

import Image from "next/image";
import {
  BanknoteArrowUp,
  CircleDollarSign,
  Gavel,
  Handshake,
  LineChart,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { FloatingWhatsApp, MotionBlock } from "@/components/ui";

const services = [
  {
    icon: ShieldCheck,
    title: "Receita 100% garantida",
    text: "A NPG garante a arrecadação mensal prevista, mesmo quando existem unidades inadimplentes. O condomínio ganha previsibilidade para folha, contratos, manutenção e reservas.",
  },
  {
    icon: BanknoteArrowUp,
    title: "Cobrança de taxas atrasadas",
    text: "A recuperação dos valores vencidos passa a seguir uma rotina especializada, com acompanhamento contínuo e comunicação adequada com o morador inadimplente.",
  },
  {
    icon: Gavel,
    title: "Cobrança judicial inclusa",
    text: "Quando a cobrança administrativa não resolve, a condução jurídica entra no fluxo com documentação organizada, critérios claros e custo absorvido pela operação.",
  },
  {
    icon: TrendingUp,
    title: "Antecipação para obras",
    text: "Projetos, melhorias e manutenções importantes podem sair do papel com mais velocidade, sem depender do ritmo irregular da arrecadação mensal.",
  },
  {
    icon: Handshake,
    title: "Gestão sem desgaste",
    text: "Síndico e administradora deixam de ocupar o papel de cobradores e passam a focar em operação, relacionamento, planejamento e melhoria da vida no condomínio.",
  },
] as const;

export function ServicosContent() {
  return (
    <main className="bg-white">
      <section className="npg-company-section relative min-h-screen overflow-hidden px-5 pb-20 pt-32 text-[#14344E] lg:px-8 lg:pb-24 lg:pt-40">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F1C75B]/70 to-transparent" />

        <div className="relative z-10 mx-auto grid max-w-[1220px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <MotionBlock>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-[#A66A12]">
              Serviços NPG Capital
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
              O suporte financeiro que tira a inadimplência do centro da gestão.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#14344E]/72 md:text-lg">
              A NPG combina garantia de receita, cobrança especializada e
              soluções de caixa para que condomínios tenham previsibilidade sem
              transformar síndico e administradora em cobradores.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {[
                "Receita garantida",
                "Cobrança administrativa",
                "Cobrança judicial",
                "Antecipação para obras",
              ].map((item, index) => (
                <div
                  key={item}
                  className="group rounded-[8px] border border-[#14344E]/10 bg-white px-4 py-3 text-sm font-black text-[#14344E] shadow-[0_12px_34px_rgba(20,52,78,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A66A12]/28 hover:shadow-[0_18px_44px_rgba(20,52,78,0.12)]"
                >
                  <span className="mr-3 text-[#A66A12]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-3 overflow-hidden rounded-[8px] border border-[#14344E]/10 bg-white shadow-[0_16px_46px_rgba(20,52,78,0.08)]">
              {[
                ["100%", "arrecadação"],
                ["24h", "visão de caixa"],
                ["menos", "atrito interno"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border-r border-[#14344E]/10 px-4 py-4 last:border-r-0"
                >
                  <p className="text-2xl font-black text-[#14344E]">{value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[#14344E]/52">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </MotionBlock>

          <MotionBlock delay={0.12}>
            <div className="services-hero-visual relative min-h-[520px] overflow-hidden rounded-[18px] border border-white/70 bg-white shadow-[0_28px_80px_rgba(20,52,78,0.18)]">
              <Image
                src="/assets/analog-landscape-city-with-buildings.jpg"
                alt="Condomínio moderno visto de fora"
                fill
                className="services-hero-image object-cover opacity-85"
                sizes="(min-width: 1024px) 560px, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,17,24,0.08),rgba(4,17,24,0.64))]" />

              <div className="services-finance-line absolute left-8 right-8 top-8 hidden h-20 md:block">
                <span className="absolute left-0 top-9 h-px w-full bg-white/28" />
                <span className="services-finance-runner absolute left-0 top-[31px] h-4 w-4 rounded-full bg-[#F1C75B] shadow-[0_0_22px_rgba(241,199,91,0.66)]" />
                <div className="absolute left-0 top-0 rounded-[8px] border border-white/20 bg-[#0E1F1E]/62 px-4 py-3 text-white backdrop-blur-2xl">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#F1C75B]">
                    entrada
                  </p>
                  <p className="text-sm font-black">taxas condominiais</p>
                </div>
                <div className="absolute right-0 top-0 rounded-[8px] border border-white/20 bg-[#0E1F1E]/62 px-4 py-3 text-white backdrop-blur-2xl">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#F1C75B]">
                    repasse
                  </p>
                  <p className="text-sm font-black">caixa previsível</p>
                </div>
              </div>

              <div className="absolute right-5 top-5 w-[210px] rounded-[8px] border border-white/18 bg-white/88 p-4 text-[#14344E] shadow-[0_18px_54px_rgba(4,17,24,0.18)] backdrop-blur-2xl">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8F5A0E]">
                    previsibilidade
                  </p>
                  <LineChart aria-hidden="true" className="h-5 w-5 text-[#33C46B]" />
                </div>
                <div className="mt-4 flex items-end gap-2">
                  {[46, 68, 54, 82, 74, 94].map((height, index) => (
                    <span
                      key={index}
                      className="services-bar block w-full rounded-t-[4px] bg-[#14344E]"
                      style={{ height }}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-[8px] border border-white/18 bg-[#0E1F1E]/78 p-5 text-white shadow-[0_18px_54px_rgba(4,17,24,0.28)] backdrop-blur-2xl">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#F1C75B] text-[#0E1F1E]">
                    <CircleDollarSign aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#F1C75B]">
                      Caixa protegido
                    </p>
                    <p className="mt-1 text-lg font-black leading-tight">
                      O condomínio sabe quanto recebe e quando recebe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </MotionBlock>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0E1F1E] px-5 py-24 text-white lg:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(20,52,78,0.94),rgba(14,31,30,1)_52%,rgba(20,52,78,0.84))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F1C75B]/70 to-transparent" />
        <div className="relative z-10 mx-auto max-w-[1220px]">
          <MotionBlock>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#F1C75B]">
              O que a NPG faz
            </p>
            <div className="mt-4 grid gap-7 lg:grid-cols-[0.78fr_1fr] lg:items-end">
              <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
                Serviços pensados para devolver previsibilidade ao condomínio.
              </h2>
              <p className="text-base leading-8 text-white/72 md:text-lg">
                A atuação da NPG começa no caixa, passa pela cobrança e termina
                no que mais importa: uma gestão com menos improviso, menos
                atrito e mais capacidade de planejar.
              </p>
            </div>
          </MotionBlock>

          <div className="services-grid relative mt-14 grid gap-5 lg:grid-cols-3">
            <span className="services-grid-trace pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px lg:block" />
            {services.map((service, index) => {
              const Icon = service.icon;
              const featured = index === 0;

              return (
                <MotionBlock
                  key={service.title}
                  delay={index * 0.06}
                  className={featured ? "lg:col-span-2" : ""}
                >
                  <article
                    className={`services-card group relative h-full overflow-hidden rounded-[8px] border bg-white/8 p-6 shadow-[0_20px_58px_rgba(4,17,24,0.22)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/12 ${
                      featured
                        ? "border-[#F1C75B]/55"
                        : "border-white/16"
                    }`}
                  >
                    <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.18),transparent_32%,rgba(255,255,255,0.08)_70%,transparent)] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="flex items-start gap-4">
                      <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-[8px] bg-[#F1C75B] text-[#0E1F1E] shadow-[0_16px_34px_rgba(241,199,91,0.18)]">
                        <Icon aria-hidden="true" className="h-6 w-6" />
                      </span>
                      <div className="relative z-10">
                        <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#F1C75B]/78">
                          Serviço {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="text-2xl font-black leading-tight text-white">
                          {service.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-white/74 md:text-base">
                          {service.text}
                        </p>
                      </div>
                    </div>
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
