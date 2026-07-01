"use client";

import {
  CheckCircle2,
  Gavel,
  PiggyBank,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Eyebrow, MotionBlock } from "@/components/ui";

export function BeneficiosSection() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Receita 100% garantida",
      text: "O condomínio recebe o valor previsto todo mês, independentemente de quem pagou.",
    },
    {
      icon: Users,
      title: "Fim da cobrança a vizinho",
      text: "A NPG assume a relação com o inadimplente. O síndico sai do papel de cobrador.",
    },
    {
      icon: TrendingUp,
      title: "Caixa previsível",
      text: "Orçamento estável o ano inteiro — dá para planejar obras e contratos com segurança.",
    },
    {
      icon: PiggyBank,
      title: "Fundo de reserva preservado",
      text: "Sem usar a reserva para tapar buracos de inadimplência. Ela fica para emergências reais.",
    },
    {
      icon: Gavel,
      title: "Sem custo de processo",
      text: "A recuperação da dívida fica por nossa conta — o condomínio não gasta com ação judicial.",
    },
    {
      icon: Zap,
      title: "Implantação sem burocracia",
      text: "Análise rápida e início simples, sem mudar de administradora nem virar a operação de cabeça para baixo.",
    },
  ];

  return (
    <section className="section-grid bg-white px-5 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1220px]">
        <MotionBlock>
          <Eyebrow icon={<CheckCircle2 aria-hidden="true" className="h-4 w-4" />}>
            Por que a NPG
          </Eyebrow>
          <h2 className="max-w-xl text-4xl font-black leading-tight text-[#14344E] md:text-5xl">
            Previsibilidade financeira, sem a parte ingrata.
          </h2>
        </MotionBlock>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <MotionBlock key={b.title} delay={i * 0.06}>
                <article
                  className="group h-full border-l-2 border-[#F1C75B] bg-white p-6 shadow-[0_16px_46px_rgba(20,52,78,0.08)] transition-transform duration-300 hover:translate-x-1.5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#14344E] text-[#F1C75B] shadow-[0_14px_30px_rgba(20,52,78,0.18)]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-black text-[#14344E]">{b.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#14344E]/70">{b.text}</p>
                </article>
              </MotionBlock>
            );
          })}
        </div>
      </div>
    </section>
  );
}
