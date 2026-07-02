import Image from "next/image";
import Link from "next/link";
import { CONTACT, WHATSAPP_URL } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="gold-surface relative overflow-hidden border-t border-[#FFE39A]/70 px-5 py-6 text-black lg:px-8 lg:py-7">
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.42),transparent_36%,rgba(255,255,255,0.16)_72%,transparent)] opacity-90" />
      <div className="relative z-10 mx-auto max-w-[1220px]">
        <div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
          <Image
            src="/assets/logoFull.png"
            alt="NPG Capital"
            width={280}
            height={70}
            className="h-14 w-auto object-contain brightness-0 lg:h-16"
          />

          <nav className="flex flex-wrap gap-x-7 gap-y-2 text-base font-black">
            <Link href="/a-empresa" className="transition-opacity hover:opacity-60">
              A Empresa
            </Link>
            <Link href="/contato" className="transition-opacity hover:opacity-60">
              Contato
            </Link>
            <Link href="/servicos" className="transition-opacity hover:opacity-60">
              Serviços
            </Link>
            <Link href="/revistas" className="transition-opacity hover:opacity-60">
              Revistas
            </Link>
            <Link href="/e-books" className="transition-opacity hover:opacity-60">
              E-books
            </Link>
            <Link href="/seu-boleto" className="transition-opacity hover:opacity-60">
              Seu Boleto
            </Link>
          </nav>
        </div>

        <div className="mt-4 flex flex-col gap-2 border-t border-black/15 pt-4 text-xs font-semibold text-white lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={`mailto:${CONTACT.email}`} className="transition-opacity hover:opacity-70">
              {CONTACT.email}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
            >
              {CONTACT.phone}
            </a>
            <span>{CONTACT.address}</span>
          </div>
          <p>
            &copy; {year} NPG Capital. CNPJ {CONTACT.cnpj}. Todos os direitos
            reservados.{" "}
            <Link href="/politica-de-privacidade" className="underline transition-opacity hover:opacity-70">
              Política de Privacidade
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
