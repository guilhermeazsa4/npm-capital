"use client";

import { ArrowLeft, Check, CheckCircle2, ChevronDown, Download, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FloatingActions, MotionBlock } from "@/components/ui";
import type { Ebook } from "@/lib/ebooks";

const inputClassName =
  "w-full rounded-[4px] border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/45 outline-none backdrop-blur-xl transition-colors focus:border-[#F1C75B] focus:ring-2 focus:ring-[#F1C75B]/30";
const labelClassName = "mb-1 block text-sm font-semibold text-white/85";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" fill="currentColor" className={className}>
      <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22 12a10 10 0 1 0-11.5 9.95v-7.04H7.9V12h2.6V9.8c0-2.57 1.53-4 3.87-4 1.12 0 2.3.2 2.3.2v2.5h-1.3c-1.28 0-1.68.8-1.68 1.62V12h2.86l-.46 2.91h-2.4v7.04A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817L5.077 21.75H1.75l7.731-8.835L1.818 2.25h6.82l4.822 6.38L18.244 2.25zM17.002 19.332h1.834L6.822 4.156H4.988L17.002 19.332z" />
    </svg>
  );
}

function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const shareLinks = [
    {
      label: "WhatsApp",
      Icon: WhatsAppIcon,
      buildHref: (url: string) => `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    },
    {
      label: "X",
      Icon: XIcon,
      buildHref: (url: string) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    },
    {
      label: "Facebook",
      Icon: FacebookIcon,
      buildHref: (url: string) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
  ];

  const handleShare = (buildHref: (url: string) => string) => {
    window.open(buildHref(window.location.href), "_blank", "noopener,noreferrer");
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {shareLinks.map(({ label, Icon, buildHref }) => (
        <button
          key={label}
          type="button"
          aria-label={label}
          onClick={() => handleShare(buildHref)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
        >
          <Icon className="h-4 w-4" />
        </button>
      ))}
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-white/10"
      >
        {copied ? (
          <>
            <Check aria-hidden="true" className="h-4 w-4 text-[#4ADE80]" />
            Copiado
          </>
        ) : (
          <>
            <Link2 aria-hidden="true" className="h-4 w-4" />
            Copiar link
          </>
        )}
      </button>
    </div>
  );
}

export function EbookLandingContent({ ebook }: { ebook: Ebook }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-gradient-to-b from-white to-[#FAFAFA]">
      <section className="px-3 pb-16 pt-28 sm:px-4 sm:pt-32 lg:px-6 lg:pb-20 lg:pt-36">
        <div className="mx-auto max-w-[1040px]">
          <Link
            href="/e-books"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#14344E]/60 transition-colors hover:text-[#14344E]"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Voltar para e-books
          </Link>

          <div className="mt-8 grid gap-8 sm:grid-cols-[320px_1fr] sm:items-center sm:gap-10">
            <MotionBlock>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] sm:max-w-none">
                <Image
                  src={ebook.image}
                  alt={ebook.title}
                  fill
                  className="object-contain"
                  sizes="(min-width: 640px) 320px, 280px"
                  priority
                />
              </div>
            </MotionBlock>

            <MotionBlock delay={0.1}>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#F1C75B] sm:text-sm sm:tracking-[0.22em]">
                Material gratuito
              </p>
              <h1 className="mt-4 text-2xl font-black leading-tight text-[#14344E] sm:text-3xl lg:text-4xl">
                {ebook.title}
              </h1>
              <p className="mt-4 max-w-none text-base leading-7 text-[#14344E]/72">
                {ebook.description}
              </p>

              <ChevronDown aria-hidden="true" className="mt-6 h-7 w-7 animate-bounce text-[#14344E]" />
            </MotionBlock>
          </div>
        </div>
      </section>

      <section id="download" className="px-3 pb-20 sm:px-4 lg:px-6 lg:pb-24">
        <div className="mx-auto max-w-[860px]">
          <MotionBlock>
            <div className="hero-highlight-card rounded-[16px] p-6 text-white sm:p-8">
              {submitted ? (
                <div className="relative z-10 py-4 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1FAF67]/15">
                    <CheckCircle2 className="h-7 w-7 text-[#33C46B]" />
                  </div>
                  <h3 className="text-lg font-black text-white">Tudo pronto.</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Seu material está liberado para download.
                  </p>
                  <a
                    href={ebook.externalHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative mx-auto mt-5 inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-[8px] border border-[#FFE39A]/70 bg-[#F1C75B]/88 px-6 text-sm font-black text-[#0E1F1E] shadow-[0_16px_42px_rgba(241,199,91,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#FFD66E]/92"
                  >
                    <Download aria-hidden="true" className="h-4 w-4" />
                    Baixar agora
                  </a>
                </div>
              ) : (
                <form
                  className="relative z-10"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <p className="mb-5 text-left text-lg font-black text-white">Baixe seu e-book</p>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <label htmlFor="eb-nome" className={labelClassName}>
                        Nome <span className="text-red-500">*</span>
                      </label>
                      <input id="eb-nome" type="text" required placeholder="Seu nome" className={inputClassName} />
                    </div>
                    <div>
                      <label htmlFor="eb-email" className={labelClassName}>
                        E-mail <span className="text-red-500">*</span>
                      </label>
                      <input id="eb-email" type="email" required placeholder="voce@email.com" className={inputClassName} />
                    </div>
                    <div>
                      <label htmlFor="eb-profissao" className={labelClassName}>
                        Profissão <span className="text-red-500">*</span>
                      </label>
                      <input id="eb-profissao" type="text" required placeholder="Síndico, administrador..." className={inputClassName} />
                    </div>
                    <div>
                      <label htmlFor="eb-telefone" className={labelClassName}>
                        Telefone <span className="text-red-500">*</span>
                      </label>
                      <input id="eb-telefone" type="tel" required placeholder="(11) 99999-9999" className={inputClassName} />
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col items-center gap-4 border-t border-white/15 pt-6 sm:flex-row sm:justify-between">
                    <button
                      type="submit"
                      className="group relative inline-flex min-h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-[8px] border border-[#FFE39A]/70 bg-[#F1C75B]/88 px-6 text-sm font-black text-[#0E1F1E] shadow-[0_16px_42px_rgba(241,199,91,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#FFD66E]/92 sm:w-auto"
                    >
                      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.52),transparent_36%,rgba(255,255,255,0.22)_72%,transparent)] opacity-90 transition-opacity group-hover:opacity-100" />
                      <Download aria-hidden="true" className="relative z-10 h-4 w-4" />
                      <span className="relative z-10">Baixar e-book</span>
                    </button>

                    <ShareButtons title={ebook.title} />
                  </div>

                  <p className="mt-4 text-left text-xs text-white/50">
                    Gratuito. Seus dados não são compartilhados.
                  </p>
                </form>
              )}
            </div>
          </MotionBlock>
        </div>
      </section>

      <FloatingActions />
    </main>
  );
}
