"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

export function MotionBlock({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (delay > 0) {
      el.style.transitionDelay = `${delay}s`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.24 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className ?? ""}`}>
      {children}
    </div>
  );
}

export function PrimaryButton({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group relative inline-flex min-h-12 w-full items-center justify-center gap-3 overflow-hidden rounded-[16px] border border-[#FFE39A]/70 bg-[#F1C75B]/88 px-6 py-3 text-sm font-black text-[#0E1F1E] shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_0_28px_rgba(241,199,91,0.16),0_16px_42px_rgba(241,199,91,0.3),inset_0_1px_0_rgba(255,255,255,0.56),inset_0_-1px_0_rgba(100,71,17,0.12)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-[#FFD66E]/92 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.16),0_0_34px_rgba(241,199,91,0.22),0_20px_54px_rgba(241,199,91,0.4),inset_0_1px_0_rgba(255,255,255,0.62)] active:scale-[0.98] ${className ?? ""}`}
    >
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.52),transparent_36%,rgba(255,255,255,0.22)_72%,transparent)] opacity-90 transition-opacity group-hover:opacity-100" />
      <span className="relative z-10 flex items-center gap-3">
        {children}
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
        />
      </span>
    </a>
  );
}

export function PrimaryButtonLight({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="group relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-[8px] border border-[#FFE39A]/70 bg-[#F1C75B]/88 px-6 py-3 text-sm font-black text-[#0E1F1E] shadow-[0_16px_42px_rgba(241,199,91,0.3),inset_0_1px_0_rgba(255,255,255,0.46),inset_0_-1px_0_rgba(100,71,17,0.12)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-[#FFD66E]/92 hover:shadow-[0_20px_54px_rgba(241,199,91,0.4),inset_0_1px_0_rgba(255,255,255,0.56)] active:scale-[0.98]"
    >
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.52),transparent_36%,rgba(255,255,255,0.22)_72%,transparent)] opacity-90 transition-opacity group-hover:opacity-100" />
      <span className="relative z-10 flex items-center gap-3">
        {children}
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
        />
      </span>
    </a>
  );
}

export function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="group relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-[8px] border border-white/28 bg-white/10 px-6 py-3 text-sm font-bold text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.28),inset_0_-1px_0_rgba(255,255,255,0.08),0_12px_30px_rgba(4,17,24,0.14)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-white/42 hover:bg-white/16 hover:text-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.36),0_16px_38px_rgba(4,17,24,0.18)] active:scale-[0.98]"
    >
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.36),transparent_34%,rgba(255,255,255,0.14)_72%,transparent)] opacity-85 transition-opacity group-hover:opacity-100" />
      <span className="relative z-10 flex items-center gap-3">
        {children}
        <ChevronRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
        />
      </span>
    </a>
  );
}

export function WhatsAppButton({
  href,
  children,
  className,
}: {
  href?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href ?? WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-[16px] border border-[#7CFF9C]/55 bg-[#1FAF67]/92 px-6 py-3 text-sm font-black text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_0_22px_rgba(34,197,94,0.18),0_14px_36px_rgba(31,175,103,0.32),inset_0_1px_0_rgba(255,255,255,0.34),inset_0_-1px_0_rgba(0,80,40,0.14)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-[#A7FFBA]/72 hover:bg-[#22C55E]/94 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.16),0_0_28px_rgba(34,197,94,0.26),0_18px_44px_rgba(31,175,103,0.4),inset_0_1px_0_rgba(255,255,255,0.4)] active:scale-[0.98] ${className ?? ""}`}
    >
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.3),transparent_36%,rgba(255,255,255,0.12)_72%,transparent)] opacity-90 transition-opacity group-hover:opacity-100" />
      <svg aria-hidden="true" className="relative z-10 h-4 w-4" fill="#ffffff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.740-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z" />
      </svg>
      <span className="relative z-10">{children}</span>
    </a>
  );
}

export function Eyebrow({
  children,
  icon,
}: {
  children: ReactNode;
  icon?: ReactNode;
  light?: boolean;
}) {
  return (
    <p className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-[#F1C75B]">
      {icon}
      {children}
    </p>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar no WhatsApp"
      className="whatsapp-animate whatsapp-shake group fixed bottom-5 right-5 z-50 inline-flex min-h-14 items-center justify-center gap-3 overflow-hidden rounded-[18px] border border-[#7CFF9C]/55 bg-[#1FAF67]/92 px-5 text-sm font-black text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_0_30px_rgba(34,197,94,0.2),0_18px_48px_rgba(31,175,103,0.38),inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-1px_0_rgba(0,80,40,0.16)] backdrop-blur-2xl hover:-translate-y-1 hover:border-[#A7FFBA]/72 hover:bg-[#22C55E]/94 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.16),0_0_38px_rgba(34,197,94,0.28),0_22px_58px_rgba(31,175,103,0.48),inset_0_1px_0_rgba(255,255,255,0.5)] active:scale-95"
    >
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.3),transparent_36%,rgba(255,255,255,0.12)_72%,transparent)] opacity-90 transition-opacity group-hover:opacity-100" />
      <svg aria-hidden="true" className="relative z-10 h-6 w-6" fill="#ffffff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z" />
      </svg>
    </a>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#0E1F1E] px-5 pb-16 pt-32 text-white lg:px-8 lg:pb-20 lg:pt-36">
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(20,52,78,0.9),rgba(14,31,30,1)_55%,rgba(20,52,78,0.82))]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F1C75B]/70 to-transparent" />
      <div className="relative z-10 mx-auto max-w-[1220px]">
        <MotionBlock>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            {description}
          </p>
        </MotionBlock>
      </div>
    </section>
  );
}
