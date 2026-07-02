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

const FILL_DURATION_MS = 6400;

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

export function ComoFuncionaSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const fillRef = useRef<HTMLSpanElement | null>(null);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [filledSteps, setFilledSteps] = useState<boolean[]>(
    Array(steps.length).fill(false),
  );
  const [resultVisible, setResultVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    const fill = fillRef.current;
    if (!section || !line || !fill) return;

    let frame = 0;
    let resultTimer = 0;

    const stop = () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(resultTimer);
    };

    const reset = () => {
      stop();
      fill.style.setProperty("--fill", "0");
      setFilledSteps(Array(steps.length).fill(false));
      setResultVisible(false);
    };

    const start = () => {
      stop();
      setFilledSteps(Array(steps.length).fill(false));
      setResultVisible(false);
      fill.style.setProperty("--fill", "0");

      // Measure each dot's real position along the line so the fill and
      // the dot highlight always agree, regardless of grid spacing.
      const lineRect = line.getBoundingClientRect();
      const isHorizontal = lineRect.width >= lineRect.height;

      const dotFractions = dotRefs.current.map((dot) => {
        if (!dot) return 1;
        const dotRect = dot.getBoundingClientRect();
        return isHorizontal
          ? (dotRect.left + dotRect.width / 2 - lineRect.left) / lineRect.width
          : (dotRect.top + dotRect.height / 2 - lineRect.top) / lineRect.height;
      });

      const startTime = performance.now();

      const tick = (now: number) => {
        const progress = Math.min(1, (now - startTime) / FILL_DURATION_MS);
        fill.style.setProperty("--fill", String(progress));

        setFilledSteps((prev) => {
          let changed = false;
          const next = prev.map((filled, i) => {
            const shouldFill = progress >= dotFractions[i];
            if (shouldFill !== filled) changed = true;
            return shouldFill;
          });
          return changed ? next : prev;
        });

        if (progress < 1) {
          frame = window.requestAnimationFrame(tick);
        } else {
          resultTimer = window.setTimeout(() => setResultVisible(true), 150);
        }
      };

      frame = window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
        } else {
          reset();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      stop();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="npg-company-section relative flex min-h-[104vh] items-center overflow-hidden px-4 py-20 text-[#14344E] lg:px-8 lg:py-16"
    >
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
          <div ref={lineRef} className="how-works-line" aria-hidden="true">
            <span ref={fillRef} className="how-works-line-fill" />
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

        <div className={`reveal how-works-result ${resultVisible ? "visible" : ""}`}>
          <span>
            <ShieldCheck aria-hidden="true" className="h-6 w-6" />
          </span>
          <div>
            <p>Resultado</p>
            <strong>Receita garantida, sem desgaste para o sindico.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
