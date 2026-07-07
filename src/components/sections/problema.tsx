"use client";

import { BanknoteArrowUp, Home, TrendingUp } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { MotionBlock } from "@/components/ui";
import { cn } from "@/lib/utils";

function ServiceCard({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: React.ElementType;
  title: ReactNode;
  description: string;
  delay: number;
}) {
  return (
    <MotionBlock delay={delay} className="h-full">
      <Link
        href="/servicos"
        className="premium-glass-button topbar-ticket-button group relative flex h-full flex-col overflow-hidden rounded-[16px] p-7 text-white"
      >
        <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.36),transparent_34%,rgba(255,255,255,0.14)_72%,transparent)] opacity-85 transition-opacity group-hover:opacity-100" />
        <div className="relative z-10 flex items-center gap-4">
          <Icon aria-hidden="true" className="h-10 w-10 shrink-0 text-[#F1C75B]" />
          <h3 className="text-base font-black leading-tight text-white">{title}</h3>
        </div>
        <p className="relative z-10 mt-3 text-sm leading-6 text-white/75">{description}</p>
      </Link>
    </MotionBlock>
  );
}

export function ProblemaSection({ className }: { className?: string } = {}) {
  const services = [
    {
      icon: BanknoteArrowUp,
      title: (
        <>
          Cobrança com
          <br />
          Garantia de Recebimento
        </>
      ),
      description:
        "Antecipação de 100% das taxas de condomínio, mesmo que alguns moradores atrasem o pagamento. Sem custos adicionais para o condomínio.",
    },
    {
      icon: TrendingUp,
      title: (
        <>
          Cobrança de Taxas
          <br />
          Atrasadas sem custo
        </>
      ),
      description:
        "Recuperamos os atrasos acumulados. Depois que as taxas são recuperadas, o repasse volta aos valores principais.",
    },
    {
      icon: Home,
      title: (
        <>
          Antecipação para Obras
          <br />
          (Garantia de Reforma)
        </>
      ),
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
          <p className="text-base font-black uppercase tracking-[0.2em] text-[#F1C75B]">
            Nossos Serviços
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-[#14344E] md:text-4xl lg:text-5xl">
            As melhores soluções em cobrança e garantia de taxas de condomínio.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#14344E]/72">
            Três formas de dar previsibilidade financeira ao seu condomínio.
            <br />
            Escolha a que mais faz sentido para a sua realidade.
          </p>
        </MotionBlock>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.description} {...service} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
