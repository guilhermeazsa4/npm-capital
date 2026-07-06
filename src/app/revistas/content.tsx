"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FloatingActions, MotionBlock } from "@/components/ui";
import { revistas } from "@/lib/revistas";

const BONIJURIS_URL = "https://www.editorabonijuris.com.br/periodicos/revista-direito-e-condominio/";

function RevistaCard({ revista, delay }: { revista: (typeof revistas)[number]; delay: number }) {
  return (
    <MotionBlock delay={delay} className="h-full">
      <Link
        href={`/revistas/${revista.number}`}
        className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-[#14344E]/10 bg-white shadow-[0_10px_28px_rgba(20,52,78,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(20,52,78,0.14)]"
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src={revista.image}
            alt={`Edição #${revista.number}`}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(min-width: 1024px) 200px, (min-width: 640px) 30vw, 45vw"
          />
        </div>
        <div className="flex items-center justify-between gap-2 p-3">
          <p className="text-sm font-black text-[#14344E]">#{revista.number}</p>
          <p className="text-xs font-semibold text-[#14344E]/55">{revista.date}</p>
        </div>
      </Link>
    </MotionBlock>
  );
}

export function RevistasContent() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-white px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="relative z-10 mx-auto max-w-[1220px] text-center">
          <MotionBlock>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-[#F1C75B] sm:mb-6 sm:text-sm sm:tracking-[0.22em]">
              Em parceria com a Bonijuris
            </p>
            <Image
              src="/assets/RevistaDireitoECondLogo.png"
              alt="Revista Direito e Condomínio"
              width={480}
              height={160}
              className="mx-auto h-auto w-full max-w-[420px] object-contain"
              priority
            />
          </MotionBlock>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
            {revistas.map((revista, i) => (
              <RevistaCard key={revista.number} revista={revista} delay={(i % 10) * 0.04} />
            ))}
          </div>

          <MotionBlock delay={0.2} className="mt-14 text-center">
            <a
              href={BONIJURIS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex min-h-12 w-full items-center justify-center gap-3 overflow-hidden rounded-[16px] border border-[#FFE39A]/70 bg-[#F1C75B]/88 px-6 text-sm font-black text-[#0E1F1E] shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_0_28px_rgba(241,199,91,0.16),0_16px_42px_rgba(241,199,91,0.3),inset_0_1px_0_rgba(255,255,255,0.56),inset_0_-1px_0_rgba(100,71,17,0.12)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-[#FFD66E]/92 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.16),0_0_34px_rgba(241,199,91,0.22),0_20px_54px_rgba(241,199,91,0.4),inset_0_1px_0_rgba(255,255,255,0.62)] active:scale-[0.98] sm:w-auto"
            >
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.52),transparent_36%,rgba(255,255,255,0.22)_72%,transparent)] opacity-90 transition-opacity group-hover:opacity-100" />
              <span className="relative z-10 flex items-center gap-3">
                Ver mais revistas
                <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </MotionBlock>
        </div>
      </section>

      <FloatingActions />
    </main>
  );
}
