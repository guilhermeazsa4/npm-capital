"use client";

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FormErro, HoneypotField } from "@/components/form-fields";
import { FloatingActions, MotionBlock } from "@/components/ui";
import { CONTACT, WHATSAPP_URL } from "@/lib/constants";
import { enviarLead, type FormStatus } from "@/lib/enviar-lead";

const contactCards = [
  {
    icon: Phone,
    label: "Telefone",
    value: CONTACT.landline,
    href: `tel:${CONTACT.landline.replace(/\D/g, "")}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: CONTACT.phone,
    href: WHATSAPP_URL,
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

const estados = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
  "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
  "RS", "RO", "RR", "SC", "SP", "SE", "TO",
] as const;

const inputClassName =
  "w-full rounded-[4px] border border-[#14344E]/15 bg-white px-4 py-3 text-sm text-[#14344E] outline-none transition-colors focus:border-[#F1C75B] focus:ring-2 focus:ring-[#F1C75B]/20";
const labelClassName = "mb-1 block text-sm font-semibold text-[#14344E]";

export function ContatoContent() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [erro, setErro] = useState("");
  const submitted = status === "enviado";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("enviando");
    setErro("");

    const resultado = await enviarLead(e.currentTarget, "Proposta — página de contato");

    if (resultado.ok) {
      setStatus("enviado");
    } else {
      setErro(resultado.erro);
      setStatus("erro");
    }
  }

  return (
    <main className="bg-white">
      {/* Sessão 1 — Hero + Sessão 2 — Formulário (fundo unido) */}
      <section
        id="formularios"
        className="relative overflow-hidden bg-[#14344E] px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-36"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,52,78,0.98),rgba(14,31,30,0.9)_62%,rgba(14,31,30,0.62))]" />
        <div className="relative z-10 mx-auto max-w-[1220px] text-center">
          <MotionBlock>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#F1C75B] sm:mb-5 sm:text-sm sm:tracking-[0.22em]">
              Contato
            </p>
            <h1 className="mx-auto max-w-3xl text-balance text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Solicite a proposta do seu condomínio
            </h1>
          </MotionBlock>
        </div>

        <div className="relative z-10 mx-auto mt-10 max-w-[900px] sm:mt-12 lg:mt-14">
          {/* Formulário */}
          <div
            id="solicitar-proposta"
            className="rounded-[8px] border border-[#14344E]/10 bg-white p-5 shadow-[0_16px_46px_rgba(20,52,78,0.08)] sm:p-8"
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
              <form className="relative" onSubmit={handleSubmit}>
                <HoneypotField />
                <p className="mb-6 text-lg font-black text-[#14344E]">Solicitar Proposta</p>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div>
                      <label htmlFor="p-nome" className={labelClassName}>
                        Nome <span className="text-red-500">*</span>
                      </label>
                      <input id="p-nome" name="nome" type="text" required placeholder="Seu nome" className={inputClassName} />
                    </div>
                    <div>
                      <label htmlFor="p-email" className={labelClassName}>
                        E-mail <span className="text-red-500">*</span>
                      </label>
                      <input id="p-email" name="email" type="email" required placeholder="voce@email.com" className={inputClassName} />
                    </div>
                    <div>
                      <label htmlFor="p-telefone" className={labelClassName}>
                        Telefone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input id="p-telefone" name="telefone" type="tel" required placeholder="(11) 99999-9999" className={inputClassName} />
                    </div>
                  </div>

                  <p className="pt-2 text-xs font-black uppercase tracking-[0.18em] text-[#14344E]/50">
                    Dados do condomínio
                  </p>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="p-condominio" className={labelClassName}>
                        Nome do condomínio <span className="text-red-500">*</span>
                      </label>
                      <input id="p-condominio" name="condominio" type="text" required placeholder="Nome do condomínio" className={inputClassName} />
                    </div>
                    <div>
                      <label htmlFor="p-receita" className={labelClassName}>
                        Receita mensal
                      </label>
                      <input id="p-receita" name="receita" type="text" placeholder="Ex.: R$ 20.000" className={inputClassName} />
                    </div>
                    <div>
                      <label htmlFor="p-cidade" className={labelClassName}>
                        Cidade <span className="text-red-500">*</span>
                      </label>
                      <input id="p-cidade" name="cidade" type="text" required placeholder="Sua cidade" className={inputClassName} />
                    </div>
                    <div>
                      <label htmlFor="p-estado" className={labelClassName}>
                        Estado <span className="text-red-500">*</span>
                      </label>
                      <select id="p-estado" name="estado" required defaultValue="SP" className={inputClassName}>
                        {estados.map((uf) => (
                          <option key={uf} value={uf}>
                            {uf}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <label htmlFor="consentimento" className="mt-4 flex items-start gap-2 text-xs leading-5 text-[#14344E]/70">
                  <input
                    id="consentimento"
                    name="consentimento"
                    value="1"
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
                {status === "erro" ? <FormErro mensagem={erro} /> : null}

                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={status === "enviando"}
                    className="group relative inline-flex min-h-12 w-full items-center justify-center gap-3 overflow-hidden rounded-[8px] border border-[#FFE39A]/70 bg-[#F1C75B]/88 px-6 py-3 text-sm font-black text-[#0E1F1E] shadow-[0_16px_42px_rgba(241,199,91,0.3),inset_0_1px_0_rgba(255,255,255,0.46),inset_0_-1px_0_rgba(100,71,17,0.12)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-[#FFD66E]/92 hover:shadow-[0_20px_54px_rgba(241,199,91,0.4),inset_0_1px_0_rgba(255,255,255,0.56)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60"
                  >
                    <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.52),transparent_36%,rgba(255,255,255,0.22)_72%,transparent)] opacity-90 transition-opacity group-hover:opacity-100" />
                    <span className="relative z-10">
                      {status === "enviando" ? "Enviando..." : "Solicitar proposta personalizada"}
                    </span>
                  </button>
                </div>
                <p className="mt-3 text-center text-xs text-[#14344E]/50">
                  Análise gratuita e sem compromisso. Seus dados não são
                  compartilhados.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Sessão 3 — Cards de contato */}
      <section className="relative overflow-hidden bg-[#14344E] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,52,78,0.98),rgba(14,31,30,0.9)_62%,rgba(14,31,30,0.62))]" />
        <div className="relative z-10 mx-auto max-w-[1220px]">
          <MotionBlock>
            <div className="mx-auto grid max-w-[520px] gap-4 sm:mt-0 lg:max-w-[980px] lg:grid-cols-3 lg:gap-5">
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
                  "hero-highlight-card rounded-[16px] p-5 text-center transition-transform hover:-translate-y-1 sm:rounded-[18px] sm:p-6";

                const isExternal = card.href?.startsWith("http");

                return card.href ? (
                  <a
                    key={card.label}
                    href={card.href}
                    className={className}
                    {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
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

      <FloatingActions />
    </main>
  );
}
