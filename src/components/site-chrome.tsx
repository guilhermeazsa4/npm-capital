"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { SmoothScroll } from "@/components/smooth-scroll";

/**
 * O painel /admin tem seu próprio layout (sem header/footer do site
 * institucional, sem o scroll suave do Lenis atrapalhando a rolagem de
 * tabelas). O resto do site continua com o chrome normal.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <SmoothScroll />
      <Header />
      {children}
      <Footer />
      <CookieBanner />
    </>
  );
}
