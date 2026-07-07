"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ebooks } from "@/lib/ebooks";

const GROUP_COUNT = 4; // enough duplicate sets so the loop never runs out of content on wide screens
const AUTOPLAY_SPEED = 0.0495; // px/ms (10% faster)
const FRICTION = 0.945; // velocity decay per frame
const DRAG_CLICK_THRESHOLD = 6; // px moved before a drag suppresses the link click

export function EbooksMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const loopWidthRef = useRef(0);
  const draggingRef = useRef(false);
  const draggedRef = useRef(false);
  const hoveringRef = useRef(false);
  const lastXRef = useRef(0);
  const lastTRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      loopWidthRef.current = track.scrollWidth / GROUP_COUNT;
    };
    measure();
    window.addEventListener("resize", measure);

    let lastFrame = performance.now();
    let rafId: number;

    const tick = (now: number) => {
      const dt = Math.min(now - lastFrame, 48);
      lastFrame = now;

      if (draggingRef.current) {
        // position updated directly by pointer move handlers
      } else if (Math.abs(velocityRef.current) > 0.02) {
        offsetRef.current += velocityRef.current * dt;
        velocityRef.current *= FRICTION;
      } else if (!hoveringRef.current) {
        velocityRef.current = 0;
        offsetRef.current -= AUTOPLAY_SPEED * dt;
      } else {
        velocityRef.current = 0;
      }

      const loopWidth = loopWidthRef.current;
      if (loopWidth > 0) {
        while (offsetRef.current <= -loopWidth) offsetRef.current += loopWidth;
        while (offsetRef.current > 0) offsetRef.current -= loopWidth;
      }

      track.style.transform = `translateX(${offsetRef.current}px)`;
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const pointerIdRef = useRef<number | null>(null);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    draggedRef.current = false;
    velocityRef.current = 0;
    lastXRef.current = e.clientX;
    lastTRef.current = performance.now();
    pointerIdRef.current = e.pointerId;
    // Pointer capture is deferred to onPointerMove (only once an actual drag
    // is detected). Capturing immediately on pointerdown can swallow the
    // native "click" on the underlying <a>, breaking plain taps/clicks.
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const now = performance.now();
    const dx = e.clientX - lastXRef.current;
    const dt = Math.max(now - lastTRef.current, 1);

    if (!draggedRef.current && Math.abs(dx) > DRAG_CLICK_THRESHOLD) {
      draggedRef.current = true;
      if (pointerIdRef.current !== null) {
        e.currentTarget.setPointerCapture(pointerIdRef.current);
      }
    }

    offsetRef.current += dx;
    velocityRef.current = dx / dt;
    lastXRef.current = e.clientX;
    lastTRef.current = now;
  };

  const endDrag = () => {
    draggingRef.current = false;
    pointerIdRef.current = null;
  };

  const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (draggedRef.current) {
      e.preventDefault();
    }
  };

  return (
    <div
      className="ebooks-marquee relative w-screen touch-pan-y select-none overflow-hidden active:cursor-grabbing"
      style={{ marginLeft: "calc(50% - 50vw)", cursor: "grab" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={() => {
        hoveringRef.current = false;
        endDrag();
      }}
      onPointerCancel={endDrag}
      onMouseEnter={() => {
        hoveringRef.current = true;
      }}
    >
      <div
        ref={trackRef}
        className="ebooks-marquee-track flex w-max gap-5 px-4 py-5 sm:gap-7 sm:px-6 lg:gap-10 lg:px-8 lg:py-6"
      >
        {Array.from({ length: GROUP_COUNT }, (_, group) => group).map((group) => (
          <div key={group} className="flex shrink-0 gap-5 sm:gap-7 lg:gap-10" aria-hidden={group !== 0}>
            {ebooks.map((eb) => (
              <Link
                key={`${eb.title}-${group}`}
                href={`/e-books/${eb.slug}`}
                tabIndex={group === 0 ? 0 : -1}
                draggable={false}
                onClick={onLinkClick}
                className="glass-card-white group relative flex h-[390px] w-[260px] shrink-0 flex-col overflow-hidden rounded-[14px] transition-transform duration-300 will-change-transform hover:z-10 hover:-translate-y-1.5 hover:scale-[1.03] sm:h-[460px] sm:w-[308px] sm:rounded-[18px] lg:h-[540px] lg:w-[360px] lg:rounded-[20px]"
              >
                {/* Hemisfério norte — 80%: imagem centralizada */}
                <div className="flex-[4] px-6 py-6 sm:px-8 lg:px-10 lg:py-8">
                  <div className="relative h-full w-full">
                    <Image
                      src={eb.image}
                      alt={eb.title}
                      fill
                      draggable={false}
                      className="object-contain object-center"
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 308px, 260px"
                    />
                  </div>
                </div>

                {/* Hemisfério sul — 20%: conteúdo escrito */}
                <div className="flex flex-1 items-center justify-between gap-3 px-4 sm:px-5 lg:px-6">
                  <div>
                    <h3 className="text-sm font-black leading-snug text-[#14344E] sm:text-[15px] lg:text-base">
                      {eb.title}
                    </h3>
                  </div>
                  <span className="group/cta relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[8px] border border-[#FFE39A]/70 bg-[#F1C75B]/88 px-3 py-2 text-[11px] font-black text-[#0E1F1E] shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_10px_24px_rgba(241,199,91,0.28),inset_0_1px_0_rgba(255,255,255,0.56)] transition-all group-hover:-translate-y-0.5 group-hover:bg-[#FFD66E]/92 sm:px-4 sm:text-xs">
                    <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.52),transparent_36%,rgba(255,255,255,0.22)_72%,transparent)] opacity-90" />
                    <span className="relative z-10">Baixe agora</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
