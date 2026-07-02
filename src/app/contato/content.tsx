"use client";

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FloatingWhatsApp, MotionBlock, PageHeader } from "@/components/ui";
import { CONTACT, WHATSAPP_URL } from "@/lib/constants";

export function ContatoContent() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-white">
      <PageHeader
        eyebrow="Fale com a NPG"
        title="Solicite a proposta do seu condomínio"
        description="Preencha o formulário e receba uma análise gratuita e sem compromisso. Se preferir, fale direto com nossa equipe pelo WhatsApp."
      />

      <section
        id="formularios"
        className="section-grid bg-white px-5 py-24 lg:px-8 lg:py-28"
      >
        <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          {/* Formulário */}
          <MotionBlock>
            <div
              id="solicitar-proposta"
              className="rounded-[8px] border border-[#14344E]/10 bg-white p-6 shadow-[0_16px_46px_rgba(20,52,78,0.08)] sm:p-8"
            >
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F1C75B]/10">
                    <MessageCircle className="h-8 w-8 text-[#F1C75B]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#14344E]">
                    Solicitação recebida.
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#14344E]/70">
                    Obrigado. Nossa equipe entra em contato em até 1 dia útil
                    com a análise do seu condomínio.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <h3 className="mb-6 text-xl font-black text-[#14344E]">
                    Solicitar Proposta
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="nome" className="mb-1 block text-sm font-semibold text-[#14344E]">
                        Nome <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="nome"
                        type="text"
                        required
                        placeholder="Seu nome"
                        className="w-full rounded-[4px] border border-[#14344E]/15 bg-white px-4 py-3 text-sm text-[#14344E] outline-none transition-colors focus:border-[#F1C75B] focus:ring-2 focus:ring-[#F1C75B]/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1 block text-sm font-semibold text-[#14344E]">
                        E-mail <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="voce@email.com"
                        className="w-full rounded-[4px] border border-[#14344E]/15 bg-white px-4 py-3 text-sm text-[#14344E] outline-none transition-colors focus:border-[#F1C75B] focus:ring-2 focus:ring-[#F1C75B]/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefone" className="mb-1 block text-sm font-semibold text-[#14344E]">
                        Telefone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="telefone"
                        type="tel"
                        required
                        placeholder="(11) 99999-9999"
                        className="w-full rounded-[4px] border border-[#14344E]/15 bg-white px-4 py-3 text-sm text-[#14344E] outline-none transition-colors focus:border-[#F1C75B] focus:ring-2 focus:ring-[#F1C75B]/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="condominio" className="mb-1 block text-sm font-semibold text-[#14344E]">
                        Condomínio <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="condominio"
                        type="text"
                        required
                        placeholder="Nome do condomínio"
                        className="w-full rounded-[4px] border border-[#14344E]/15 bg-white px-4 py-3 text-sm text-[#14344E] outline-none transition-colors focus:border-[#F1C75B] focus:ring-2 focus:ring-[#F1C75B]/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="unidades" className="mb-1 block text-sm font-semibold text-[#14344E]">
                        Número de unidades (aproximado)
                      </label>
                      <input
                        id="unidades"
                        type="number"
                        placeholder="Ex.: 100"
                        className="w-full rounded-[4px] border border-[#14344E]/15 bg-white px-4 py-3 text-sm text-[#14344E] outline-none transition-colors focus:border-[#F1C75B] focus:ring-2 focus:ring-[#F1C75B]/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="mensagem" className="mb-1 block text-sm font-semibold text-[#14344E]">
                        Mensagem (opcional)
                      </label>
                      <textarea
                        id="mensagem"
                        rows={4}
                        placeholder="Conte um pouco sobre a situação do condomínio"
                        className="w-full resize-none rounded-[4px] border border-[#14344E]/15 bg-white px-4 py-3 text-sm text-[#14344E] outline-none transition-colors focus:border-[#F1C75B] focus:ring-2 focus:ring-[#F1C75B]/20"
                      />
                    </div>
                  </div>
                  <label htmlFor="consentimento" className="mt-4 flex items-start gap-2 text-xs leading-5 text-[#14344E]/70">
                    <input
                      id="consentimento"
                      type="checkbox"
                      required
                      className="mt-0.5 h-4 w-4 shrink-0 rounded-[3px] border border-[#14344E]/30 text-[#F1C75B] focus:ring-2 focus:ring-[#F1C75B]/30"
                    />
                    <span>
                      Concordo com o tratamento dos meus dados de acordo com a{" "}
                      <Link href="/politica-de-privacidade" className="font-semibold text-[#14344E] underline hover:text-[#F1C75B]">
                        Política de Privacidade
                      </Link>
                      .
                    </span>
                  </label>
                  <button
                    type="submit"
                    className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[4px] bg-[#F1C75B] px-6 text-sm font-black text-[#0E1F1E] transition-colors hover:bg-[#E1B34C]"
                  >
                    Solicitar Proposta
                  </button>
                  <p className="mt-3 text-center text-xs text-[#14344E]/50">
                    Análise gratuita e sem compromisso. Seus dados não são
                    compartilhados.
                  </p>
                </form>
              )}
            </div>
          </MotionBlock>

          {/* Aside */}
          <MotionBlock delay={0.12}>
            <div className="rounded-[8px] border border-[#14344E]/10 bg-[#14344E] p-6 text-white shadow-[0_16px_46px_rgba(20,52,78,0.18)] sm:p-8">
              <h3 className="text-lg font-black">Prefere conversar agora?</h3>
              <p className="mt-2 text-sm leading-7 text-white/70">
                Nossa equipe responde no horário comercial, normalmente em
                minutos.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[4px] bg-[#1FAF67] px-5 text-sm font-black text-white transition-colors hover:bg-[#168E53]"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                Falar no WhatsApp
              </a>

              <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3">
                  <Mail aria-hidden="true" className="h-4 w-4 text-[#F1C75B]" />
                  <a href={`mailto:${CONTACT.email}`} className="text-sm text-white/70 hover:text-white">
                    {CONTACT.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone aria-hidden="true" className="h-4 w-4 text-[#F1C75B]" />
                  <span className="text-sm text-white/70">{CONTACT.phone}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#F1C75B]" />
                  <span className="text-sm text-white/70">{CONTACT.address}</span>
                </div>
              </div>
            </div>
          </MotionBlock>
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  );
}
