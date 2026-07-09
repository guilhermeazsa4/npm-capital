"use client";

import { ArrowLeft, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FloatingActions, MotionBlock } from "@/components/ui";
import type { Revista } from "@/lib/revistas";

export function RevistaLandingContent({ revista }: { revista: Revista }) {
  return (
    <main className="bg-gradient-to-b from-white to-[#FAFAFA]">
      <section className="px-3 pb-20 pt-28 sm:px-4 sm:pt-32 lg:px-6 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-[1040px]">
          <Link
            href="/revistas"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#14344E]/60 transition-colors hover:text-[#14344E]"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Voltar para revistas
          </Link>

          <div className="mt-8 grid gap-8 sm:grid-cols-[320px_1fr] sm:items-center sm:gap-10">
            <MotionBlock>
              <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] sm:max-w-none">
                <Image
                  src={revista.image}
                  alt={`Edição #${revista.number}`}
                  fill
                  className="rounded-[8px] object-cover shadow-[0_16px_40px_rgba(20,52,78,0.16)]"
                  sizes="(min-width: 640px) 320px, 280px"
                  priority
                />
              </div>
            </MotionBlock>

            <MotionBlock delay={0.1}>
              <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-black uppercase tracking-[0.2em] text-[#F1C75B] sm:text-sm sm:tracking-[0.22em]">
                <span>Edição #{revista.number}</span>
                <span className="text-[#14344E]/40">·</span>
                <span className="normal-case tracking-normal text-[#14344E]/55">{revista.date}</span>
              </p>
              <h1 className="mt-4 text-2xl font-black leading-tight text-[#14344E] sm:text-3xl lg:text-4xl">
                {revista.theme}
              </h1>
              <p className="mt-4 max-w-none text-base leading-7 text-[#14344E]/72">
                {revista.description}
              </p>

              <a
                href={revista.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-6 inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-[8px] border border-[#FFE39A]/70 bg-[#F1C75B]/88 px-6 text-sm font-black text-[#0E1F1E] shadow-[0_16px_42px_rgba(241,199,91,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#FFD66E]/92"
              >
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.52),transparent_36%,rgba(255,255,255,0.22)_72%,transparent)] opacity-90 transition-opacity group-hover:opacity-100" />
                <Download aria-hidden="true" className="relative z-10 h-4 w-4" />
                <span className="relative z-10">Baixar agora</span>
              </a>
            </MotionBlock>
          </div>

          {revista.tags.length > 0 ? (
            <MotionBlock delay={0.16} className="mt-10 border-t border-[#14344E]/8 pt-6">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#14344E]/45">
                Assuntos relacionados
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {revista.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-[#14344E]/12 bg-[#14344E]/[0.04] px-3 py-1.5 text-xs font-semibold text-[#14344E]/70"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </MotionBlock>
          ) : null}
        </div>
      </section>

      <FloatingActions />
    </main>
  );
}
