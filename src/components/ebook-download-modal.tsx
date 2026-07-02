"use client";

import { ArrowRight, Check, Download, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function EbookDownloadModal({
  ebookTitle,
  onClose,
}: {
  ebookTitle: string;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-[#0E1F1E]/72 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="premium-glass-button topbar-ticket-button relative w-full max-w-[480px] overflow-hidden rounded-[16px] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F1C75B]/10">
              <Download className="h-8 w-8 text-[#F1C75B]" />
            </div>
            <h3 className="text-2xl font-black text-white">Tudo pronto.</h3>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Enviamos o link de download para o seu e-mail.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <p className="text-sm font-bold text-[#F1C75B]">Download gratuito</p>
            <h3 className="mt-1 text-xl font-black leading-snug text-white">
              {ebookTitle}
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Preencha seus dados para receber o material por e-mail.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="ebook-nome" className="mb-1 block text-sm font-semibold text-white">
                  Nome <span className="text-red-400">*</span>
                </label>
                <input
                  id="ebook-nome"
                  type="text"
                  required
                  placeholder="Seu nome"
                  className="w-full rounded-[4px] border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-[#F1C75B] focus:ring-2 focus:ring-[#F1C75B]/20"
                />
              </div>
              <div>
                <label htmlFor="ebook-email" className="mb-1 block text-sm font-semibold text-white">
                  E-mail <span className="text-red-400">*</span>
                </label>
                <input
                  id="ebook-email"
                  type="email"
                  required
                  placeholder="voce@email.com"
                  className="w-full rounded-[4px] border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-[#F1C75B] focus:ring-2 focus:ring-[#F1C75B]/20"
                />
              </div>
              <div>
                <label htmlFor="ebook-telefone" className="mb-1 block text-sm font-semibold text-white">
                  Telefone <span className="text-red-400">*</span>
                </label>
                <input
                  id="ebook-telefone"
                  type="tel"
                  required
                  placeholder="(11) 99999-9999"
                  className="w-full rounded-[4px] border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-[#F1C75B] focus:ring-2 focus:ring-[#F1C75B]/20"
                />
              </div>
              <div>
                <label htmlFor="ebook-profissao" className="mb-1 block text-sm font-semibold text-white">
                  Profissão <span className="text-red-400">*</span>
                </label>
                <input
                  id="ebook-profissao"
                  type="text"
                  required
                  placeholder="Ex.: Síndico, administrador..."
                  className="w-full rounded-[4px] border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-[#F1C75B] focus:ring-2 focus:ring-[#F1C75B]/20"
                />
              </div>
            </div>

            <label htmlFor="ebook-consentimento" className="mt-4 flex cursor-pointer items-start gap-2.5 text-xs leading-5 text-white/70">
              <span className="relative mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center">
                <input
                  id="ebook-consentimento"
                  type="checkbox"
                  required
                  className="peer sr-only"
                />
                <span className="absolute inset-0 rounded-[4px] border border-white/30 bg-white/10 transition-colors peer-checked:border-[#F1C75B] peer-checked:bg-[#F1C75B] peer-focus-visible:ring-2 peer-focus-visible:ring-[#F1C75B]/40" />
                <Check
                  aria-hidden="true"
                  strokeWidth={3}
                  className="relative h-3.5 w-3.5 text-[#0E1F1E] opacity-0 transition-opacity peer-checked:opacity-100"
                />
              </span>
              <span>
                Concordo com o tratamento dos meus dados de acordo com a{" "}
                <Link href="/politica-de-privacidade" className="font-semibold text-white underline hover:text-[#F1C75B]">
                  Política de Privacidade
                </Link>
                .
              </span>
            </label>

            <button
              type="submit"
              className="group relative mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 overflow-hidden rounded-[16px] border border-[#FFE39A]/70 bg-[#F1C75B]/88 px-6 py-3 text-sm font-black text-[#0E1F1E] shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_0_28px_rgba(241,199,91,0.16),0_16px_42px_rgba(241,199,91,0.3),inset_0_1px_0_rgba(255,255,255,0.56),inset_0_-1px_0_rgba(100,71,17,0.12)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-[#FFD66E]/92 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.16),0_0_34px_rgba(241,199,91,0.22),0_20px_54px_rgba(241,199,91,0.4),inset_0_1px_0_rgba(255,255,255,0.62)] active:scale-[0.98]"
            >
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.52),transparent_36%,rgba(255,255,255,0.22)_72%,transparent)] opacity-90 transition-opacity group-hover:opacity-100" />
              <span className="relative z-10 flex items-center gap-3">
                Baixar gratuitamente
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                />
              </span>
            </button>
            <p className="mt-3 text-center text-xs text-white/50">
              Seus dados não são compartilhados.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
