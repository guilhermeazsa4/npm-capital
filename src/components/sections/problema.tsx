"use client";

import { ArrowRight, BanknoteArrowUp, Home, TrendingUp } from "lucide-react";
import Link from "next/link";
import { MotionBlock } from "@/components/ui";
import { cn } from "@/lib/utils";

function ServiceCard({
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
      <Link
        href="/servicos"
        className="group relative flex h-full flex-col overflow-hidden rounded-[16px] border border-[#FFE39A]/70 bg-[#F1C75B]/88 p-8 text-[#0E1F1E] shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_0_28px_rgba(241,199,91,0.16),0_16px_42px_rgba(241,199,91,0.3),inset_0_1px_0_rgba(255,255,255,0.56),inset_0_-1px_0_rgba(100,71,17,0.12)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-[#FFD66E]/92 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.16),0_0_34px_rgba(241,199,91,0.22),0_20px_54px_rgba(241,199,91,0.4),inset_0_1px_0_rgba(255,255,255,0.62)]"
      >
        <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.52),transparent_36%,rgba(255,255,255,0.22)_72%,transparent)] opacity-90 transition-opacity group-hover:opacity-100" />
        <Icon aria-hidden="true" className="relative z-10 h-12 w-12 text-[#14344E]" />
        <h3 className="relative z-10 mt-5 text-base font-black leading-tight text-[#0E1F1E]">{title}</h3>
        <p className="relative z-10 mt-3 flex-1 text-sm leading-6 text-[#0E1F1E]/75">{description}</p>
        <span className="relative z-10 mt-5 inline-flex items-center gap-2 text-sm font-black text-[#0E1F1E]">
          Saiba mais
          <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </MotionBlock>
  );
}

export function ProblemaSection({ className }: { className?: string } = {}) {
  const services = [
    {
      icon: BanknoteArrowUp,
      title: "Cobrança com Garantia de Recebimento",
      description:
        "Antecipação de 100% das taxas de condomínio, mesmo que alguns moradores atrasem o pagamento. Sem custos adicionais para o condomínio.",
    },
    {
      icon: TrendingUp,
      title: "Cobrança de Taxas Atrasadas Sem Custo",
      description:
        "Recuperamos os atrasos acumulados. Depois que as taxas são recuperadas, o repasse volta aos valores principais.",
    },
    {
      icon: Home,
      title: "Antecipação para Obra (Garantia de Reforma)",
      description:
        "Condomínio sem saldo em fundo de obras? Resolvemos imediatamente. Antecipação com garantia de recebimento.",
    },
  ];

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-white px-5 pt-20 pb-20 lg:px-8 lg:pt-28 lg:pb-28",
        className
      )}
    >
      <div className="mx-auto max-w-[1220px]">
        <MotionBlock className="mb-16 text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#F1C75B]">
            Nossos Serviços
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-[#14344E] md:text-4xl lg:text-5xl">
            As melhores soluções em cobrança e garantia de taxas de condomínio.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#14344E]/72">
            Três formas de dar previsibilidade financeira ao seu condomínio. Escolha a que mais faz sentido para a sua realidade.
          </p>
        </MotionBlock>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
