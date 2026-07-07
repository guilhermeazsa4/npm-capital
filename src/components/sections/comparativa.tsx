"use client";

import {
  CircleDollarSign,
  ShieldCheck,
  UserRoundCheck,
  UserRoundX,
  X,
} from "lucide-react";
import { MotionBlock } from "@/components/ui";

const units = [
  { label: "Pagou", status: "ok" },
  { label: "Pagou", status: "ok" },
  { label: "Atrasou", status: "bad" },
] as const;

function UnitCard({
  label,
  status,
}: {
  label: string;
  status: "ok" | "bad";
}) {
  const paid = status === "ok";
  const Icon = paid ? UserRoundCheck : UserRoundX;

  return (
    <div className={`flow-clean-unit ${paid ? "flow-clean-unit-paid" : "flow-clean-unit-late"}`}>
      <Icon aria-hidden="true" className="h-5 w-5 shrink-0 sm:h-7 sm:w-7" />
      <p className="text-[10px] font-black uppercase tracking-[0.1em] text-white sm:text-[13px] sm:tracking-[0.12em]">
        {label}
      </p>
    </div>
  );
}

function ScenarioFlow({ mode }: { mode: "without" | "with" }) {
  const withNpg = mode === "with";

  return (
    <article className={`flow-clean-panel ${withNpg ? "flow-clean-panel-good" : "flow-clean-panel-risk"}`}>
      <div className="relative z-10">
        <div className="text-center">
          <p className={`text-sm font-black uppercase tracking-[0.18em] ${withNpg ? "text-[#8F5A0E]" : "text-white/60"}`}>
            {withNpg ? "Com NPG Capital" : "Sem NPG Capital"}
          </p>
          <h3 className={`mt-2 text-[1.125rem] font-black leading-tight sm:text-xl ${withNpg ? "text-[#14344E]" : "text-white"}`}>
            {withNpg ? "O repasse chega completo" : "A inadimplência reduz o caixa"}
          </h3>
        </div>

        <div className="flow-clean-stage">
          <div className="flow-clean-units">
            {units.map((unit, index) => (
              <UnitCard
                key={`${unit.label}-${index}`}
                label={unit.label}
                status={unit.status}
              />
            ))}
          </div>

          <svg
            aria-hidden="true"
            className="flow-clean-svg"
            viewBox="0 0 520 260"
            preserveAspectRatio="none"
          >
            <path className="flow-clean-track" d="M78 0 C78 72 206 62 260 118" />
            <path className="flow-clean-track" d="M260 0 V118" />
            <path className="flow-clean-track" d="M442 0 C442 72 314 62 260 118" />
            <path className="flow-clean-track" d="M260 118 V212" />

            <path
              className={`flow-clean-stream ${withNpg ? "flow-clean-stream-good" : "flow-clean-stream-risk"}`}
              pathLength={1}
              d="M78 0 C78 72 206 62 260 118"
            />
            <path
              className={`flow-clean-stream flow-clean-stream-delay ${withNpg ? "flow-clean-stream-good" : "flow-clean-stream-risk"}`}
              pathLength={1}
              d="M260 0 V118"
            />
            <path
              className="flow-clean-stream flow-clean-stream-delay-2 flow-clean-stream-loss"
              pathLength={1}
              d="M442 0 C442 72 314 62 260 118"
            />
            <path
              className={`flow-clean-stream flow-clean-stream-down ${withNpg ? "flow-clean-stream-good" : "flow-clean-stream-risk"}`}
              pathLength={1}
              d="M260 118 V212"
            />
          </svg>

          <div className={`flow-clean-center ${withNpg ? "flow-clean-center-good" : "flow-clean-center-risk"}`}>
            {withNpg ? (
              <ShieldCheck aria-hidden="true" className="h-6 w-6" />
            ) : (
              <X aria-hidden="true" className="h-6 w-6" />
            )}
          </div>

          <div className={`flow-clean-result ${withNpg ? "flow-clean-result-good" : "flow-clean-result-risk"}`}>
            <div className="flex items-center justify-center gap-2">
              <CircleDollarSign
                aria-hidden="true"
                className={`h-6 w-6 ${withNpg ? "text-[#33C46B]" : "text-[#F1C75B]"}`}
              />
              <p className={`text-3xl font-black leading-none ${withNpg ? "text-[#33C46B]" : "text-[#F1C75B]"}`}>
                {withNpg ? "100%" : "65%"}
              </p>
            </div>
            <p className={`mt-2 text-center text-sm font-black ${withNpg ? "text-[#14344E]" : "text-white"}`}>
              Caixa do condomínio
            </p>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className={`h-full rounded-full ${withNpg ? "flow-clean-bar-good" : "flow-clean-bar-risk"}`}
                style={{ width: withNpg ? "100%" : "65%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ComparativaSection() {
  return (
    <section
      className="relative flex min-h-[104vh] items-center overflow-hidden bg-[#0E1F1E] px-3 py-14 text-white lg:py-12"
    >
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(20,52,78,0.94),rgba(14,31,30,1)_52%,rgba(20,52,78,0.86))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F1C75B]/70 to-transparent" />

      <div className="relative z-10 mx-auto mt-6 w-full max-w-[1000px] px-4 sm:px-5 lg:mt-8 lg:px-6">
        <MotionBlock>
          <p className="text-center text-sm font-black uppercase tracking-[0.2em] text-[#F1C75B]">
            Fluxo de caixa
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-3xl font-black leading-tight text-white drop-shadow-[0_10px_28px_rgba(0,0,0,0.28)] md:text-[42px]">
            O caminho do dinheiro muda quando a NPG entra no fluxo.
          </h2>
        </MotionBlock>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <MotionBlock delay={0.08}>
            <ScenarioFlow mode="without" />
          </MotionBlock>

          <MotionBlock delay={0.16}>
            <ScenarioFlow mode="with" />
          </MotionBlock>
        </div>
      </div>
    </section>
  );
}
