"use client";

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FloatingWhatsApp, MotionBlock, WhatsAppButton } from "@/components/ui";
import { CONTACT } from "@/lib/constants";

const contactCards = [
  {
    icon: Phone,
    label: "Telefone",
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone.replace(/\D/g, "")}`,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: MapPin,
    label: "Localização",
    value: CONTACT.address,
    href: undefined,
  },
] as const;

const inputClassName =
  "w-full rounded-[4px] border border-[#14344E]/15 bg-white px-4 py-3 text-sm text-[#14344E] outline-none transition-colors focus:border-[#F1C75B] focus:ring-2 focus:ring-[#F1C75B]/20";
const labelClassName = "mb-1 block text-sm font-semibold text-[#14344E]";

export function ContatoContent() {
  const [activeTab, setActiveTab] = useState<"proposta" | "contato">("proposta");
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-white">
      {/* Sessão 1 — Hero centralizado */}
      <section className="relative overflow-hidden bg-white px-5 pb-16 pt-32 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="relative z-10 mx-auto max-w-[1220px] text-center">
          <MotionBlock>
            <p className="mb-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-[#F1C75B]">
              Fale com a NPG
            </p>
            <h1 className="mx-auto max-w-3xl text-4xl font-black leading-tight text-[#14344E] md:text-5xl lg:text-6xl">
              Solicite a proposta do seu condomínio
            </h1>
          </MotionBlock>

          <MotionBlock delay={0.12}>
            <div className="mx-auto mt-12 grid max-w-[980px] gap-5 sm:grid-cols-3">
              {contactCards.map((card) => {
                const Icon = card.icon;
                const content = (
                  <>
                    <Icon
                      aria-hidden="true"
                      className="mx-auto h-11 w-11 text-[#F1C75B]"
                      strokeWidth={1.75}
                    />
                    <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-[#F1C75B]">
                      {card.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-white">
                      {card.value}
                    </p>
                  </>
                );

                const className =
                  "hero-highlight-card rounded-[18px] p-6 text-center transition-transform hover:-translate-y-1";

                return card.href ? (
                  <a key={card.label} href={card.href} className={className}>
                    {content}
                  </a>
                ) : (
                  <div key={card.label} className={className}>
                    {content}
                  </div>
                );
              })}
            </div>
          </MotionBlock>
        </div>
      </section>

      <section
        id="formularios"
        className="relative overflow-hidden bg-[#14344E] px-5 py-16 lg:px-8 lg:py-20"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,52,78,0.98),rgba(14,31,30,0.9)_62%,rgba(14,31,30,0.62))]" />
        <div className="relative z-10 mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-2 lg:items-stretch">
          {/* Formulário */}
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
                <div className="mb-6 flex items-center gap-6 border-b border-[#14344E]/10">
                  {(["proposta", "contato"] as const).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`relative pb-3 text-lg font-black transition-colors ${
                        activeTab === tab
                          ? "text-[#14344E]"
                          : "text-[#14344E]/35 hover:text-[#14344E]/60"
                      }`}
                    >
                      {tab === "proposta" ? "Solicitar Proposta" : "Contato"}
                      {activeTab === tab ? (
                        <span className="absolute inset-x-0 -bottom-px h-[2px] bg-[#F1C75B]" />
                      ) : null}
                    </button>
                  ))}
                </div>

                {activeTab === "proposta" ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="p-nome" className={labelClassName}>
                          Nome <span className="text-red-500">*</span>
                        </label>
                        <input id="p-nome" type="text" required placeholder="Seu nome" className={inputClassName} />
                      </div>
                      <div>
                        <label htmlFor="p-email" className={labelClassName}>
                          E-mail <span className="text-red-500">*</span>
                        </label>
                        <input id="p-email" type="email" required placeholder="voce@email.com" className={inputClassName} />
                      </div>
                      <div className="col-span-2">
                        <label htmlFor="p-telefone" className={labelClassName}>
                          Telefone / WhatsApp <span className="text-red-500">*</span>
                        </label>
                        <input id="p-telefone" type="tel" required placeholder="(11) 99999-9999" className={inputClassName} />
                      </div>
                    </div>

                    <p className="pt-2 text-xs font-black uppercase tracking-[0.18em] text-[#14344E]/50">
                      Dados do condomínio
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="p-condominio" className={labelClassName}>
                          Nome do condomínio <span className="text-red-500">*</span>
                        </label>
                        <input id="p-condominio" type="text" required placeholder="Nome do condomínio" className={inputClassName} />
                      </div>
                      <div>
                        <label htmlFor="p-receita" className={labelClassName}>
                          Receita mensal
                        </label>
                        <input id="p-receita" type="text" placeholder="Ex.: R$ 20.000" className={inputClassName} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="p-servico" className={labelClassName}>
                        Selecione o serviço
                      </label>
                      <select id="p-servico" defaultValue="" className={inputClassName}>
                        <option value="" disabled>
                          Escolha uma opção
                        </option>
                        <option value="garantia-total">Garantia total</option>
                        <option value="cobranca-taxas">Cobrança de taxas</option>
                        <option value="antecipacao-obras">Antecipação de obras</option>
                      </select>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="c-nome" className={labelClassName}>
                          Nome <span className="text-red-500">*</span>
                        </label>
                        <input id="c-nome" type="text" required placeholder="Seu nome" className={inputClassName} />
                      </div>
                      <div>
                        <label htmlFor="c-email" className={labelClassName}>
                          E-mail <span className="text-red-500">*</span>
                        </label>
                        <input id="c-email" type="email" required placeholder="voce@email.com" className={inputClassName} />
                      </div>
                      <div>
                        <label htmlFor="c-telefone" className={labelClassName}>
                          Telefone / WhatsApp <span className="text-red-500">*</span>
                        </label>
                        <input id="c-telefone" type="tel" required placeholder="(11) 99999-9999" className={inputClassName} />
                      </div>
                      <div>
                        <label htmlFor="c-condominio" className={labelClassName}>
                          Condomínio <span className="text-red-500">*</span>
                        </label>
                        <input id="c-condominio" type="text" required placeholder="Nome do condomínio" className={inputClassName} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="c-mensagem" className={labelClassName}>
                        Mensagem (opcional)
                      </label>
                      <textarea
                        id="c-mensagem"
                        rows={2}
                        placeholder="Conte um pouco sobre a situação do condomínio"
                        className={`resize-none ${inputClassName}`}
                      />
                    </div>
                  </div>
                )}

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
                <div className="mt-6 space-y-3">
                  <button
                    type="submit"
                    className="group relative inline-flex min-h-12 w-full items-center justify-center gap-3 overflow-hidden rounded-[8px] border border-[#FFE39A]/70 bg-[#F1C75B]/88 px-6 py-3 text-sm font-black text-[#0E1F1E] shadow-[0_16px_42px_rgba(241,199,91,0.3),inset_0_1px_0_rgba(255,255,255,0.46),inset_0_-1px_0_rgba(100,71,17,0.12)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-[#FFD66E]/92 hover:shadow-[0_20px_54px_rgba(241,199,91,0.4),inset_0_1px_0_rgba(255,255,255,0.56)] active:scale-[0.98]"
                  >
                    <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.52),transparent_36%,rgba(255,255,255,0.22)_72%,transparent)] opacity-90 transition-opacity group-hover:opacity-100" />
                    <span className="relative z-10">
                      {activeTab === "proposta" ? "Solicitar proposta personalizada" : "Enviar"}
                    </span>
                  </button>
                  <WhatsAppButton className="min-h-12 w-full">
                    Falar no WhatsApp
                  </WhatsAppButton>
                </div>
                <p className="mt-3 text-center text-xs text-[#14344E]/50">
                  Análise gratuita e sem compromisso. Seus dados não são
                  compartilhados.
                </p>
              </form>
            )}
          </div>

          {/* Mapa */}
          <div className="h-[420px] overflow-hidden rounded-[8px] lg:h-full">
            <iframe
              title="Localização da NPG Capital"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&output=embed`}
            />
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  );
}
