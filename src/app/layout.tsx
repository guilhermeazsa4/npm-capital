import type { Metadata } from "next";
import { Norican, Plus_Jakarta_Sans, Young_Serif } from "next/font/google";
import { SiteChrome } from "@/components/site-chrome";
import "lenis/dist/lenis.css";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
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
  metadataBase: new URL("https://npgcapital.com.br"),
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
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
