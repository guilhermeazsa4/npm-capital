"use client";

import { ArrowLeft, CheckCircle2, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FloatingActions, MotionBlock } from "@/components/ui";
import type { Ebook } from "@/lib/ebooks";

const inputClassName =
  "w-full rounded-[4px] border border-[#14344E]/15 bg-white px-4 py-3 text-sm text-[#14344E] outline-none transition-colors focus:border-[#F1C75B] focus:ring-2 focus:ring-[#F1C75B]/20";
const labelClassName = "mb-1 block text-sm font-semibold text-[#14344E]";

export function EbookLandingContent({ ebook }: { ebook: Ebook }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-gradient-to-b from-white to-[#FAFAFA]">
      <section className="px-3 pb-20 pt-28 sm:px-4 sm:pt-32 lg:px-6 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-[1120px]">
          <Link
            href="/e-books"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#14344E]/60 transition-colors hover:text-[#14344E]"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Voltar para e-books
          </Link>

          <MotionBlock className="mt-8 text-center">
            <h1 className="mx-auto max-w-2xl text-2xl font-black leading-tight text-[#14344E] sm:text-3xl lg:text-4xl">
              {ebook.title}
            </h1>
          </MotionBlock>

          <div className="mt-8 grid gap-10 lg:grid-cols-[420px_1fr] lg:items-stretch lg:gap-12">
            <MotionBlock className="h-full">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px] lg:aspect-auto lg:h-full lg:max-w-none">
                <Image
                  src={ebook.image}
                  alt={ebook.title}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 420px, 320px"
                  priority
                />
              </div>
            </MotionBlock>

            <MotionBlock delay={0.1} className="flex flex-col">
              <p className="max-w-xl text-base leading-7 text-[#14344E]/72">
                {ebook.description}
              </p>

              <div className="mt-6 flex-1 rounded-[16px] border border-[#14344E]/10 bg-white p-6 shadow-[0_16px_46px_rgba(20,52,78,0.1)] sm:p-8">
              {submitted ? (
                <div className="py-4 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1FAF67]/15">
                    <CheckCircle2 className="h-7 w-7 text-[#33C46B]" />
                  </div>
                  <h3 className="text-lg font-black text-[#14344E]">Tudo pronto.</h3>
                  <p className="mt-2 text-sm leading-6 text-[#14344E]/70">
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
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <p className="mb-5 text-lg font-black text-[#14344E]">Baixe grátis</p>
                  <div className="grid grid-cols-2 gap-4">
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
                  <button
                    type="submit"
                    className="group relative mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-[8px] border border-[#FFE39A]/70 bg-[#F1C75B]/88 px-6 text-sm font-black text-[#0E1F1E] shadow-[0_16px_42px_rgba(241,199,91,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#FFD66E]/92 sm:w-auto"
                  >
                    <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.52),transparent_36%,rgba(255,255,255,0.22)_72%,transparent)] opacity-90 transition-opacity group-hover:opacity-100" />
                    <Download aria-hidden="true" className="relative z-10 h-4 w-4" />
                    <span className="relative z-10">Baixar e-book grátis</span>
                  </button>
                  <p className="mt-3 text-center text-xs text-[#14344E]/50">
                    Gratuito. Seus dados não são compartilhados.
                  </p>
                </form>
              )}
            </div>
          </MotionBlock>
          </div>
        </div>
      </section>

      <FloatingActions />
    </main>
  );
}
