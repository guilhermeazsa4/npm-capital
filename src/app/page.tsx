import { FloatingActions } from "@/components/ui";
import {
  Hero,
  ProblemaSection,
  ComparativaSection,
  ComoFuncionaSection,
  BeneficiosDiferenteSection,
  DepoimentosSection,
  CtaFinal,
  EbooksSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="home-page bg-white">
      <link
        rel="preload"
        as="image"
        href="/assets/FariaLima.webp"
        fetchPriority="high"
      />
      <Hero />
      <ProblemaSection />
      <ComparativaSection />
      <ComoFuncionaSection />
      <BeneficiosDiferenteSection />
      <DepoimentosSection />
      <CtaFinal />
      <EbooksSection />
      <FloatingActions hideProposalInHero />
    </main>
  );
}
