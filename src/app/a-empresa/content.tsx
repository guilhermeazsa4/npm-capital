"use client";

import { ChevronDown, Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FloatingWhatsApp, MotionBlock } from "@/components/ui";

const YOUTUBE_ID = "QbD8gyoADKY";

const cards = [
  {
    emoji: "🤝",
    title: "Parceria de verdade",
    text: "Trabalhamos junto com a administradora e o síndico, sem trocar o que já funciona.",
  },
  {
    emoji: "🛡️",
    title: "Solidez que você sente",
    text: "Garantimos por contrato, com nosso próprio caixa. O condomínio recebe todo mês.",
  },
  {
    emoji: "🧾",
    title: "Transparência sem rodeio",
    text: "Cada real explicado, cada condição combinada antes de assinar. Sem letra miúda.",
  },
];

function ClipPathImage({ src, alt }: { src: string; alt: string }) {
  return (
    <>
      <svg aria-hidden="true" className="absolute -left-[999px] -top-[999px] h-0 w-0">
        <defs>
          <clipPath id="clip-banner-empresa" clipPathUnits="objectBoundingBox">
            <path d="M0 0H0.479167C0.766667 0 1 0.233333 1 0.520833V1H0.520833C0.233333 1 0 0.766667 0 0.479167V0Z" />
          </clipPath>
        </defs>
      </svg>
      <figure
        style={{ clipPath: "url(#clip-banner-empresa)" }}
        className="relative h-full w-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority
        />
      </figure>
    </>
  );
}

function YouTubePreview() {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1`}
        title="Vídeo institucional NPG Capital"
        allow="accelerate-compute; autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label="Reproduzir vídeo institucional NPG Capital"
      className="group relative h-full w-full"
    >
      <Image
        src={`https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`}
        alt="Prévia do vídeo institucional NPG Capital"
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 900px, 100vw"
        unoptimized
      />
      <div className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/15" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/60 bg-white/10 backdrop-blur-sm transition-transform group-hover:scale-110">
          <Play aria-hidden="true" className="h-8 w-8 fill-white text-white" />
        </span>
      </span>
    </button>
  );
}

export function AEmpresaContent() {
  return (
    <main className="section-grid bg-white">
      {/* Sessão 1 — Banner */}
      <section className="relative overflow-hidden px-5 lg:px-8">
        <div className="mx-auto grid max-w-[1120px] items-stretch gap-10 lg:grid-cols-2 lg:gap-6">
          <div className="relative z-10 flex items-end pb-16 pt-28 text-left lg:pb-24 lg:pt-40">
            <MotionBlock>
              <p className="mb-5 text-lg font-bold text-[#F1C75B]">Nossa história</p>
              <h2 className="text-4xl font-black leading-tight text-[#14344E] md:text-5xl">
                Cuidamos do seu condomínio como se fosse da família
              </h2>
              <p className="mt-8 text-xl leading-relaxed text-[#14344E]/75 md:text-2xl">
                A <span className="font-bold text-[#14344E]">NPG Capital</span>{" "}
                garante que o condomínio receba o valor integral da
                arrecadação todos os meses, mesmo quando um ou mais
                moradores atrasam o pagamento da taxa condominial. Assim, o
                fluxo de caixa permanece estável.
              </p>
            </MotionBlock>
          </div>

          <div className="relative h-[320px] w-full lg:h-auto">
            <ClipPathImage src="/assets/BannerEmpresa.jpg" alt="Equipe NPG Capital" />
          </div>
        </div>

        <span className="absolute inset-x-0 bottom-6 z-10 flex justify-center animate-bounce">
          <ChevronDown aria-hidden="true" className="h-9 w-9 text-[#14344E]/50" />
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

          {/* Sessão 3.5 — Cards com emojis */}
          <div className="mt-16 grid gap-5 sm:grid-cols-3">
            {cards.map((c, i) => (
              <MotionBlock key={c.title} delay={i * 0.08}>
                <article className="hero-highlight-card group rounded-[18px] p-7 text-center">
                  <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.36),transparent_34%,rgba(255,255,255,0.14)_72%,transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-85" />
                  <div className="relative z-10">
                    <span className="block text-5xl transition-transform duration-300 group-hover:scale-110">
                      {c.emoji}
                    </span>
                    <h3 className="mt-5 text-lg font-black text-white">{c.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/78">{c.text}</p>
                  </div>
                </article>
              </MotionBlock>
            ))}
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  );
}
