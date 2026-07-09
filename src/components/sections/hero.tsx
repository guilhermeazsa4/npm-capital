import {
  BanknoteArrowUp,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

function HeroContent() {
  return (
    <>
      <h1 className="max-w-[860px] text-4xl font-black leading-[1.02] md:text-6xl lg:text-[68px]">
        Garantimos a receita,{" "}
        <span className="hero-gold-signature">Você gere melhor.</span>
      </h1>
      <p className="mt-6 max-w-xl text-left text-sm font-medium leading-7 text-white/92 md:text-base md:leading-7">
        Com a <span className="font-bold text-white">NPG Capital</span>, seu condomínio conta com
        <br />
        arrecadação garantida, previsibilidade financeira
        <br />
        e mais tranquilidade para uma gestão eficiente.
      </p>

      <div className="hero-actions mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <div className="w-full sm:w-auto">
          <Link
            href="/contato#solicitar-proposta"
            className="floating-gold-button group inline-flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-[18px] px-5 text-sm font-black sm:w-auto"
          >
            <span className="whitespace-nowrap">Solicitar proposta</span>
            <ChevronRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
        <div className="w-full border-l border-white/18 pl-4 text-left text-sm font-semibold leading-7 text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.55)] sm:w-auto sm:text-base">
          <p>+10 condomínios atendidos</p>
          <p>+10 anos de experiência</p>
        </div>
      </div>
    </>
  );
}

export function Hero() {
  const highlights = [
    { icon: ShieldCheck, text: "Receita 100% garantida" },
    { icon: BanknoteArrowUp, text: "Cobrança de taxas atrasadas" },
    { icon: TrendingUp, text: "Antecipação para obras", hideClass: "hidden sm:block" },
  ];

  return (
    <section className="hero-section home-section relative flex min-h-screen flex-col justify-center bg-[#0E1F1E] px-5 pb-12 pt-28 text-white lg:px-6 lg:pb-20 lg:pt-28">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="hero-bg-kenburns absolute inset-0 bg-cover bg-[75%_center] lg:bg-center"
          style={{
            backgroundImage: "url('/assets/FariaLima.webp')",
          }}
        />
      </div>
      <div className="hero-grade absolute inset-0" />
      <div className="hero-vignette absolute inset-0" />

      <div className="hero-main-block relative z-10 mx-auto w-full max-w-[1072px]">
        {/* Plain CSS animation (no JS/hydration gate) so the LCP text is
            never hidden behind a post-hydration opacity flash. */}
        <div className="hero-content-wrap hero-animate max-w-4xl text-left">
          <HeroContent />
        </div>
      </div>

      <div className="hero-highlights-block relative z-20 mx-auto mt-12 w-full max-w-[1072px] lg:mt-16">
        <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            const content = (
              <>
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.36),transparent_34%,rgba(255,255,255,0.14)_72%,transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-85 group-focus-visible:opacity-85" />
                <div className="relative z-10 flex items-center gap-3">
                  <Icon
                    aria-hidden="true"
                    className="h-11 w-11 shrink-0 text-[#F1C75B]"
                  />
                  <h3 className="text-sm font-black leading-tight text-white">
                    {item.text}
                  </h3>
                </div>
              </>
            );

            return (
              <div
                key={item.text}
                className={`hero-animate ${item.hideClass ?? ""}`}
                style={{ animationDelay: `${0.32 + i * 0.08}s` }}
              >
                <Link
                  href="/servicos"
                  className="hero-highlight-card group flex min-h-[76px] items-center rounded-[18px] p-4 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F1C75B]/25"
                >
                  {content}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
