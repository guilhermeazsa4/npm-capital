"use client";

import {
  BadgeCheck,
  ClipboardCheck,
  FileSignature,
  HandCoins,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { MotionBlock } from "@/components/ui";

export function ComoFuncionaSection() {
  const flowBarRef = useRef<HTMLSpanElement | null>(null);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const filledRef = useRef<boolean[]>([]);

  const steps = [
    {
      icon: ClipboardCheck,
      title: "Analise",
      text: "Entendemos a arrecadacao, inadimplencia e rotina da administradora.",
    },
    {
      icon: FileSignature,
      title: "Proposta",
      text: "Voce recebe uma proposta clara, com valores e condicoes por escrito.",
    },
    {
      icon: HandCoins,
      title: "Repasse",
      text: "Com tudo aprovado, o condominio passa a contar com previsibilidade mensal.",
    },
    {
      icon: BadgeCheck,
      title: "Garantia ativa",
      text: "A NPG assume o impacto da inadimplencia e acompanha a recuperacao.",
    },
  ];

  const [filledSteps, setFilledSteps] = useState<boolean[]>(
    Array(steps.length).fill(false),
  );

  useEffect(() => {
    let frame = 0;

    const updateFilledSteps = () => {
      const bar = flowBarRef.current;

      if (bar) {
        const barRect = bar.getBoundingClientRect();
        const isHorizontal = barRect.width >= barRect.height;
        const next = dotRefs.current.map((dot) => {
          if (!dot) {
            return false;
          }

          const dotRect = dot.getBoundingClientRect();

          return isHorizontal
            ? barRect.right >= dotRect.left && barRect.left <= dotRect.right
            : barRect.bottom >= dotRect.top && barRect.top <= dotRect.bottom;
        });

        const changed =
          next.length !== filledRef.current.length ||
          next.some((filled, index) => filled !== filledRef.current[index]);

        if (changed) {
          filledRef.current = next;
          setFilledSteps(next);
        }
      }

      frame = window.requestAnimationFrame(updateFilledSteps);
    };

    frame = window.requestAnimationFrame(updateFilledSteps);

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="npg-company-section relative flex min-h-[104vh] items-center overflow-hidden px-4 py-20 text-[#14344E] lg:px-8 lg:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-24 bg-[linear-gradient(180deg,rgba(14,31,30,0.08),transparent)]" />

      <div className="relative z-10 mx-auto mt-12 w-full max-w-[1120px] lg:mt-14">
        <div className="text-center">
          <MotionBlock>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#C99A31]">
              Como funciona
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black leading-tight md:text-4xl">
              Da analise a garantia ativa, tudo acontece em um fluxo simples.
            </h2>
          </MotionBlock>
        </div>

        <div className="how-works-flow relative mt-14">
          <div className="how-works-line" aria-hidden="true">
            <span ref={flowBarRef} />
          </div>

          <div className="relative z-10 grid gap-5 md:grid-cols-4">
            {steps.map((step, i) => (
              <MotionBlock key={step.title} delay={i * 0.08}>
                <article className={`how-works-step how-works-step-${i + 1}`}>
                  <span
                    ref={(node) => {
                      dotRefs.current[i] = node;
                    }}
                    className={`how-works-dot ${filledSteps[i] ? "how-works-dot-filled" : ""}`}
                  >
                    <step.icon aria-hidden="true" className="h-7 w-7" />
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </MotionBlock>
            ))}
          </div>

        </div>

        <MotionBlock delay={0.34}>
          <div className="how-works-result">
            <span>
              <ShieldCheck aria-hidden="true" className="h-6 w-6" />
            </span>
            <div>
              <p>Resultado</p>
              <strong>Receita garantida, sem desgaste para o sindico.</strong>
            </div>
          </div>
        </MotionBlock>
      </div>
    </section>
  );
}
