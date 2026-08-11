"use client";

import { Clock, ExternalLink, LockKeyhole, MessageCircle } from "lucide-react";
import { FloatingActions, MotionBlock, PageHeader } from "@/components/ui";
import { BOLETO_PORTAL_URL, WHATSAPP_URL } from "@/lib/constants";

export function SeuBoletoContent() {
  return (
    <main className="bg-white">
      <PageHeader
        eyebrow="Autoatendimento"
        title="Segunda via do seu boleto"
        description="A emissão da 2ª via é feita no portal da administradora responsável pelo seu condomínio."
      />

      <section className="section-grid bg-white px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <MotionBlock>
            <div className="rounded-[8px] border border-[#14344E]/10 bg-white p-6 shadow-[0_16px_46px_rgba(20,52,78,0.08)] sm:p-8">
              <h2 className="text-xl font-black text-[#14344E]">
                Onde emitir sua 2ª via
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#14344E]/70">
                A NPG Capital não emite boletos condominiais. A cobrança é feita
                pela administradora do seu condomínio, e é no portal dela que
                você consulta valores, vencimentos e emite a segunda via.
              </p>

              {BOLETO_PORTAL_URL ? (
                <>
                  <a
                    href={BOLETO_PORTAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[4px] bg-[#F1C75B] px-6 text-sm font-black text-[#0E1F1E] transition-colors hover:bg-[#E1B34C]"
                  >
                    Ir para o portal de boletos
                    <ExternalLink aria-hidden="true" className="h-4 w-4" />
                  </a>
                  <p className="mt-3 text-xs leading-5 text-[#14344E]/50">
                    Você será direcionado para um site externo, operado por
                    terceiros. A NPG Capital não coleta nem armazena os dados
                    informados lá.
                  </p>
                </>
              ) : (
                <p className="mt-6 rounded-[4px] border border-[#14344E]/10 bg-[#14344E]/[0.03] px-4 py-3 text-sm leading-6 text-[#14344E]/70">
                  Não sabe qual é a administradora do seu condomínio? Fale com a
                  gente pelo WhatsApp que a gente te direciona.
                </p>
              )}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[4px] border border-[#14344E]/15 px-6 text-sm font-black text-[#14344E] transition-colors hover:border-[#14344E]/30 hover:bg-[#14344E]/[0.03]"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                Tirar dúvida no WhatsApp
              </a>
            </div>
          </MotionBlock>

          <MotionBlock delay={0.12}>
            <div className="space-y-4">
              {[
                {
                  icon: Clock,
                  text: "O portal da administradora fica disponível 24 horas.",
                },
                {
                  icon: LockKeyhole,
                  text: "Nunca pedimos CPF, senha ou dados bancários por esta página.",
                },
                {
                  icon: MessageCircle,
                  text: "Dúvidas no pagamento? Fale com a gente pelo WhatsApp.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    className="flex items-start gap-4 rounded-[8px] border border-[#14344E]/10 bg-white p-5 shadow-[0_8px_24px_rgba(20,52,78,0.04)]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] bg-[#14344E] text-[#F1C75B]">
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <p className="text-sm leading-6 text-[#14344E]/70">{item.text}</p>
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
