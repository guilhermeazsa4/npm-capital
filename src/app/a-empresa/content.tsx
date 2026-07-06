"use client";

import { Handshake, Receipt, ShieldCheck } from "lucide-react";
import { FloatingActions, MotionBlock } from "@/components/ui";

const YOUTUBE_ID = "QbD8gyoADKY";

const manifestoParagraphs = [
  "Na NPG Capital, acreditamos que uma gestão condominial eficiente começa pela segurança financeira. Sabemos que a inadimplência gera incertezas, compromete planejamentos e dificulta decisões importantes. Por isso, existimos para transformar esse cenário, oferecendo estabilidade e confiança para síndicos, administradoras e condomínios. Nossa missão é garantir que a arrecadação aconteça de forma consistente, permitindo que cada condomínio mantenha seus compromissos, preserve seu patrimônio e continue evoluindo sem depender das oscilações causadas por atrasos nos pagamentos.",
  "Mais do que uma solução financeira, somos um parceiro estratégico para quem busca uma administração moderna, responsável e eficiente. Acreditamos que síndicos devem dedicar seu tempo à gestão, ao relacionamento com os moradores e ao desenvolvimento do condomínio, e não ao desgaste constante da cobrança. Ao assumir esse desafio, devolvemos tranquilidade e segurança para toda a comunidade.",
  "Cada decisão que tomamos é guiada por valores sólidos: transparência, compromisso, inovação, gestão e respeito. Trabalhamos para construir relações de longo prazo entre síndicos e administradores, baseadas na confiança e em resultados concretos. Investimos em processos eficientes, atendimento próximo e soluções que acompanham as necessidades de um mercado em constante transformação.",
  "Nosso propósito é contribuir para condomínios mais organizados, sustentáveis e preparados para o futuro. Porque acreditamos que, quando existe previsibilidade financeira, existe liberdade para planejar, investir e crescer. É essa certeza que move a NPG Capital todos os dias: oferecer estabilidade para que cada condomínio possa seguir em frente com confiança, eficiência e tranquilidade.",
];

const cards = [
  {
    icon: Handshake,
    title: "Parceria de verdade",
    text: "Trabalhamos junto com a administradora e o síndico, sem trocar o que já funciona.",
  },
  {
    icon: ShieldCheck,
    title: "Solidez que você sente",
    text: "Garantimos por contrato, com nosso próprio caixa. O condomínio recebe todo mês.",
  },
  {
    icon: Receipt,
    title: "Transparência sem rodeio",
    text: "Cada real explicado, cada condição combinada antes de assinar. Sem letra miúda.",
  },
];

function YouTubePreview() {
  return (
    <iframe
      className="h-full w-full"
      src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
      title="Vídeo institucional NPG Capital"
      allow="accelerate-compute; autoplay; encrypted-media; picture-in-picture"
      allowFullScreen
    />
  );
}

export function AEmpresaContent() {
  return (
    <main className="bg-[#14344E]">
      {/* Sessão 1 — Hero */}
      <section className="relative overflow-hidden bg-white px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="relative z-10 mx-auto max-w-[1220px] text-center">
          <MotionBlock>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#F1C75B] sm:mb-5 sm:text-sm sm:tracking-[0.22em]">
              A NPG é diferente
            </p>
            <h1 className="mx-auto max-w-3xl text-balance text-3xl font-black leading-tight text-[#14344E] sm:text-4xl md:text-5xl lg:text-6xl">
              Conheça quem faz a diferença na sua gestão
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#14344E]/70 md:mt-6 md:text-lg md:leading-8">
              NPG Capital nasceu para garantir a arrecadação mesmo com inadimplência, dando aos síndicos previsibilidade, tranquilidade e uma gestão mais rápida e eficiente.
            </p>
          </MotionBlock>
        </div>
      </section>

      {/* Sessão 3 — Vídeo */}
      <section className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#122D3E_0%,#10262E_100%)]" />
        <div className="relative z-10 mx-auto max-w-[1120px] 2xl:max-w-[1240px]">
          <MotionBlock>
            <div className="overflow-hidden rounded-[12px] shadow-[0_18px_48px_rgba(4,17,24,0.28)] sm:rounded-[16px] lg:rounded-[20px] lg:shadow-[0_24px_70px_rgba(20,52,78,0.2)]">
              <div className="relative aspect-video bg-black">
                <YouTubePreview />
              </div>
            </div>
          </MotionBlock>

          {/* Sessão 3.5 — Cards com ícones */}
          <div className="mx-auto mt-10 grid max-w-[520px] gap-4 sm:mt-12 sm:gap-5 lg:mt-16 xl:max-w-none xl:grid-cols-3">
            {cards.map((c, i) => (
              <MotionBlock key={c.title} delay={i * 0.08}>
                <article className="hero-highlight-card group h-full rounded-[14px] p-5 text-center sm:rounded-[16px] sm:p-6 lg:rounded-[18px] lg:p-7 2xl:p-8">
                  <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.36),transparent_34%,rgba(255,255,255,0.14)_72%,transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-85" />
                  <div className="relative z-10">
                    <c.icon
                      aria-hidden="true"
                      className="mx-auto h-11 w-11 text-white transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12 lg:h-14 lg:w-14"
                      strokeWidth={1.75}
                    />
                    <h3 className="mt-4 text-base font-black leading-snug text-[#F1C75B] lg:mt-5 lg:text-lg 2xl:text-xl">{c.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/90 sm:text-[15px] lg:text-base lg:leading-7 2xl:text-[17px] 2xl:leading-8">{c.text}</p>
                  </div>
                </article>
              </MotionBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Sessão 4 — Manifesto */}
      <section id="manifesto" className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#10262E_0%,#0E1F1E_100%)]" />
        <div className="relative z-10 mx-auto max-w-[900px] 2xl:max-w-[980px]">
          <MotionBlock>
            <h2 className="text-center text-3xl font-black text-[#F1C75B] sm:text-4xl 2xl:text-5xl">
              Manifesto NPG
            </h2>
            <div className="mt-7 space-y-5 sm:mt-8 sm:space-y-6">
              {manifestoParagraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-center text-[15px] leading-7 text-white/85 sm:text-base sm:leading-8 md:text-lg 2xl:text-xl 2xl:leading-9"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </MotionBlock>
        </div>
      </section>

      <FloatingActions />
    </main>
  );
}
