"use client";

import { motion } from "framer-motion";
import {
  BanknoteArrowUp,
  Gavel,
  Handshake,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import type { KeyboardEvent } from "react";
import { useEffect, useState } from "react";
import { PrimaryButton } from "@/components/ui";

function useHydrated() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setHydrated(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return hydrated;
}

function HeroContent() {
  return (
    <>
      <h1 className="max-w-[860px] text-4xl font-black leading-[1.02] md:text-6xl lg:text-[68px]">
        Garantimos a receita,{" "}
        <span className="hero-gold-signature">Você gere melhor.</span>
      </h1>
      <p className="mt-6 max-w-xl text-left text-sm font-medium leading-7 text-white/92 md:text-base md:leading-7">
        Com a <span className="font-bold text-white">NPG Capital</span>, seu condomínio conta com
        <br />
        arrecadação garantida, previsibilidade financeira
        <br />
        e mais tranquilidade para uma gestão eficiente.
      </p>

      <div className="hero-actions mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <div className="w-full sm:w-[203px]">
          <PrimaryButton href="/contato#solicitar-proposta">
            Solicitar Proposta
          </PrimaryButton>
        </div>
        <div className="w-full border-l border-white/18 pl-4 text-center text-sm font-semibold leading-7 text-white sm:w-auto sm:text-left md:hidden md:text-base lg:block">
          <p>Mais de 10 condomínios atendidos</p>
          <p>+10 anos de experiência</p>
        </div>
      </div>
    </>
  );
}

export function Hero() {
  const hydrated = useHydrated();
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);

  const highlights = [
    {
      icon: ShieldCheck,
      text: "Receita 100% garantida",
      description:
        "A arrecadação mensal do condomínio é preservada mesmo com inadimplência, dando previsibilidade para folha, contratos, manutenção e reservas sem depender do pagamento individual de cada unidade.",
    },
    {
      icon: BanknoteArrowUp,
      text: "Cobrança de taxas atrasadas",
      description:
        "A recuperação de valores vencidos passa a seguir uma rotina especializada, com acompanhamento contínuo, comunicação adequada e redução do desgaste entre síndico, administradora e moradores inadimplentes.",
    },
    {
      icon: Gavel,
      text: "Cobrança judicial inclusa",
      description:
        "Quando a cobrança administrativa não é suficiente, a condução jurídica entra no fluxo com documentação organizada, critérios claros e estratégia para proteger o caixa coletivo sem improvisos.",
    },
    {
      icon: TrendingUp,
      text: "Antecipação para obras",
      description:
        "Melhorias, manutenções emergenciais e projetos estruturais podem avançar com mais velocidade, permitindo que o condomínio execute prioridades sem ficar preso ao ritmo irregular da arrecadação.",
      hideClass: "hidden sm:block",
    },
    {
      icon: Handshake,
      text: "Gestão sem desgaste",
      description:
        "A rotina de cobrança deixa de pesar sobre síndico e administradora, reduzindo conflitos internos e liberando a gestão para focar em melhorias, operação e relacionamento com os moradores.",
      hideClass: "hidden sm:block md:hidden lg:block",
    },
  ];

  return (
    <section className="hero-section home-section relative flex min-h-[820px] flex-col justify-center bg-[#0E1F1E] px-5 pb-12 pt-28 text-white lg:min-h-screen lg:px-6 lg:pb-20 lg:pt-28">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="hero-bg-kenburns absolute inset-0 bg-cover bg-[75%_center] lg:bg-center"
          style={{
            backgroundImage: "url('/assets/sao-paulo-custom-hero-2400x1350-flipped.webp')",
          }}
        />
      </div>
      <div className="hero-grade absolute inset-0" />
      <div className="hero-vignette absolute inset-0" />

      <div className="hero-main-block relative z-10 mx-auto w-full max-w-[1072px]">
        {hydrated ? (
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hero-content-wrap max-w-4xl text-left"
          >
            <HeroContent />
          </motion.div>
        ) : (
          <div className="hero-content-wrap max-w-4xl text-left">
            <HeroContent />
          </div>
        )}
      </div>

      <div className="hero-highlights-block relative z-20 mx-auto mt-12 w-full max-w-[1072px] lg:mt-16">
        <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            const isActive = activeHighlight === i;
            const content = (
              <>
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.36),transparent_34%,rgba(255,255,255,0.14)_72%,transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-85 group-focus-visible:opacity-85" />
                <div className="relative z-10 flex items-center gap-3">
                  <Icon
                    aria-hidden="true"
                    className="h-11 w-11 shrink-0 text-[#F1C75B]"
                  />
                  <h3 className="text-sm font-black leading-tight text-white">
                    {item.text}
                  </h3>
                </div>
                <p
                  className={`relative z-10 overflow-hidden text-[13px] font-medium leading-5 text-white/78 transition-all duration-300 ${
                    isActive ? "mt-4 max-h-48 opacity-100" : "mt-0 max-h-0 opacity-0"
                  }`}
                >
                  {item.description}
                </p>
              </>
            );

            const interactiveProps = {
              tabIndex: 0,
              role: "button",
              "aria-expanded": isActive,
              onMouseEnter: () => setActiveHighlight(i),
              onMouseLeave: () => setActiveHighlight(null),
              onFocus: () => setActiveHighlight(i),
              onBlur: () => setActiveHighlight(null),
              onClick: () => setActiveHighlight(isActive ? null : i),
              onKeyDown: (event: KeyboardEvent<HTMLElement>) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveHighlight(isActive ? null : i);
                }
              },
            };

            return (
              <div
                key={item.text}
                className={`hero-highlight-slot relative min-h-[76px] ${item.hideClass ?? ""} ${
                  isActive ? "z-30" : "z-10"
                }`}
              >
                {hydrated ? (
                  <motion.article
                    {...interactiveProps}
                    className="hero-highlight-card group absolute inset-x-0 top-0 min-h-[76px] cursor-pointer rounded-[18px] p-4 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F1C75B]/25"
                    initial={{ opacity: 0, y: 34 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.32 + i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ transition: { duration: 0.12, ease: "easeOut" } }}
                  >
                    {content}
                  </motion.article>
                ) : (
                  <article
                    {...interactiveProps}
                    className="hero-highlight-card group absolute inset-x-0 top-0 min-h-[76px] cursor-pointer rounded-[18px] p-4 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F1C75B]/25"
                  >
                    {content}
                  </article>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
