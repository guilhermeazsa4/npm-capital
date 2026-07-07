"use client";

import { Headset, MessageCircle, PaintRoller, Users } from "lucide-react";
import { MotionBlock } from "@/components/ui";

function BenefitCard({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <MotionBlock delay={delay} className="h-full">
      <div className="group relative flex h-full flex-col overflow-hidden rounded-[16px] border border-[#FFE39A]/70 bg-[#F1C75B]/88 p-8 text-[#0E1F1E] shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_0_28px_rgba(241,199,91,0.16),0_16px_42px_rgba(241,199,91,0.3),inset_0_1px_0_rgba(255,255,255,0.56),inset_0_-1px_0_rgba(100,71,17,0.12)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-[#FFD66E]/92 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.16),0_0_34px_rgba(241,199,91,0.22),0_20px_54px_rgba(241,199,91,0.4),inset_0_1px_0_rgba(255,255,255,0.62)]">
        <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.52),transparent_36%,rgba(255,255,255,0.22)_72%,transparent)] opacity-90 transition-opacity group-hover:opacity-100" />
        <Icon aria-hidden="true" className="relative z-10 h-12 w-12 text-[#14344E]" />
        <h3 className="relative z-10 mt-5 text-base font-black leading-tight text-[#0E1F1E]">{title}</h3>
        <p className="relative z-10 mt-3 flex-1 text-sm font-medium leading-6 text-[#0E1F1E]/75">{description}</p>
      </div>
    </MotionBlock>
  );
}

export function BeneficiosDiferenteSection() {
  const benefits = [
    {
      icon: Headset,
      title: "Atendimento exclusivo e personalizado",
      description:
        "Na NPG Capital você é atendido com atenção e cordialidade. O alto padrão de atendimento faz parte da filosofia da empresa em cada contato com síndicos e administradoras.",
    },
    {
      icon: MessageCircle,
      title: "Informações e orientações gratuitas",
      description:
        "Orientações condominiais e jurídicas sobre qualquer assunto de interesse do condomínio são oferecidas gratuitamente pelos nossos consultores.",
    },
    {
      icon: PaintRoller,
      title: "Antecipação para reformas e benfeitorias",
      description:
        "Condomínio sem saldo no fundo de obras? A NPG resolve rapidamente, com antecipação de valores parcelados diretamente no boleto do condomínio.",
    },
    {
      icon: Users,
      title: "Suporte contínuo ao síndico",
      description:
        "Consultores dedicados para acompanhar o dia a dia do condomínio, tirar dúvidas e apoiar decisões financeiras com previsibilidade.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0E1F1E] px-5 py-20 text-white lg:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(20,52,78,0.9),rgba(14,31,30,1)_55%,rgba(20,52,78,0.82))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F1C75B]/70 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <MotionBlock className="mb-16 text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#F1C75B]">
            Benefícios
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">
            Benefícios de uma garantidora diferente.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/72">
            Ser diferente é olhar para pessoas onde outros veem apenas prédios e números. É isso que guia cada benefício que oferecemos.
          </p>
        </MotionBlock>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {benefits.map((benefit, i) => (
            <BenefitCard key={benefit.title} {...benefit} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
