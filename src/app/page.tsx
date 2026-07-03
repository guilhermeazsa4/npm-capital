import { FloatingWhatsApp } from "@/components/ui";
import {
  Hero,
  ProblemaSection,
  ComparativaSection,
  ComoFuncionaSection,
  DepoimentosSection,
  CtaFinal,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="home-page bg-white">
      <Hero />
      <ProblemaSection />
      <ComparativaSection />
      <ComoFuncionaSection />
      <DepoimentosSection />
      <CtaFinal />
      <FloatingWhatsApp />
    </main>
  );
}
