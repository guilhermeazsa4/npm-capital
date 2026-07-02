"use client";

import { ChevronDown, Handshake, Receipt, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { FloatingWhatsApp, MotionBlock } from "@/components/ui";

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
    <main
      className="section-grid"
      style={{
        backgroundColor: "#14344E",
        backgroundImage: "linear-gradient(135deg, #14344E 0%, #0E1F1E 100%)",
      }}
    >
      {/* Sessão 1 — Hero */}
      <section className="relative overflow-hidden px-5 lg:px-8">
        <div className="mx-auto grid max-w-[1120px] items-center gap-10 pb-16 pt-28 lg:grid-cols-2 lg:gap-16 lg:pb-24 lg:pt-40">
          <MotionBlock>
            <div className="text-left">
              <p className="mb-5 text-lg font-bold text-[#F1C75B]">A NPG é diferente</p>
              <p className="text-lg leading-relaxed text-white/90 md:text-xl text-justify">
                NPG Capital nasceu para trazer segurança financeira aos
                condomínios, garantindo a arrecadação mesmo com inadimplência.
                Assim, os síndicos ganham em previsibilidade, tranquilidade, gestão rápida e
                eficiente.
              </p>
            </div>
          </MotionBlock>

          <MotionBlock delay={0.1}>
            <div className="relative h-64 lg:h-80">
              <Image
                src="/assets/logoFull.png"
                alt="NPG Capital"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 480px, 100vw"
                priority
              />
            </div>
          </MotionBlock>
        </div>

        <span className="absolute inset-x-0 bottom-6 z-10 flex justify-center animate-bounce">
          <ChevronDown aria-hidden="true" className="h-9 w-9 text-white/50" />
        </span>
      </section>

      {/* Sessão 3 — Vídeo */}
      <section className="px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[1120px]">
          <MotionBlock>
            <div className="overflow-hidden rounded-[20px] shadow-[0_24px_70px_rgba(20,52,78,0.2)]">
              <div className="relative aspect-video bg-black">
                <YouTubePreview />
              </div>
            </div>
          </MotionBlock>

          {/* Sessão 3.5 — Cards com ícones */}
          <div className="mt-16 grid gap-5 sm:grid-cols-3">
            {cards.map((c, i) => (
              <MotionBlock key={c.title} delay={i * 0.08}>
                <article className="hero-highlight-card group rounded-[18px] p-7 text-center">
                  <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.36),transparent_34%,rgba(255,255,255,0.14)_72%,transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-85" />
                  <div className="relative z-10">
                    <c.icon
                      aria-hidden="true"
                      className="mx-auto h-14 w-14 text-white transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.75}
                    />
                    <h3 className="mt-5 text-lg font-black text-[#F1C75B]">{c.title}</h3>
                    <p className="mt-2 text-base leading-7 text-white">{c.text}</p>
                  </div>
                </article>
              </MotionBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Sessão 4 — Manifesto */}
      <section className="px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[900px]">
          <MotionBlock>
            <h2 className="text-center text-3xl font-black text-[#F1C75B] md:text-4xl">
              Manifesto NPG
            </h2>
            <div className="mt-8 space-y-6">
              {manifestoParagraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-justify text-base leading-8 text-white/85 md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </MotionBlock>
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  );
}
