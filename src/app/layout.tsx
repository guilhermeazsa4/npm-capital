import type { Metadata } from "next";
import { Norican, Plus_Jakarta_Sans, Young_Serif } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import "lenis/dist/lenis.css";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const youngSerif = Young_Serif({
  variable: "--font-young-serif",
  subsets: ["latin"],
  weight: "400",
});

const norican = Norican({
  variable: "--font-norican",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "NPG Capital | Garantidora condominial",
  description:
    "A NPG Capital garante 100% da arrecadação do seu condomínio e assume a cobrança dos inadimplentes. Previsibilidade total, sem o desgaste de cobrar vizinho.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${plusJakarta.variable} ${youngSerif.variable} ${norican.variable} h-full antialiased`}
    >
      <body className={`${plusJakarta.className} min-h-full`}>
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
