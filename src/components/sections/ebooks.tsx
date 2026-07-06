"use client";

import { EbooksMarquee } from "@/components/ebooks-marquee";
import { MotionBlock } from "@/components/ui";

export function EbooksSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="relative z-10 mx-auto max-w-[1220px] text-center">
        <MotionBlock>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#F1C75B] sm:text-sm sm:tracking-[0.22em]">
            Materiais gratuitos
          </p>
        </MotionBlock>
      </div>

      <div className="relative z-10 mt-8">
        <MotionBlock delay={0.08}>
          <EbooksMarquee />
        </MotionBlock>
      </div>
    </section>
  );
}
