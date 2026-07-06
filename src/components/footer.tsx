import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="gold-surface relative overflow-hidden border-t border-[#FFE39A]/70 px-5 py-12 text-black lg:px-8 lg:py-20">
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.42),transparent_36%,rgba(255,255,255,0.16)_72%,transparent)] opacity-90" />
      <div className="relative z-10 mx-auto max-w-[1220px]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* Contatos e Localização */}
          <div>
            <h3 className="text-sm font-black uppercase text-[#14344E]">Contato</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm font-semibold text-[#14344E]/85">
              <a href={`mailto:${CONTACT.email}`} className="transition-opacity hover:opacity-70">
                {CONTACT.email}
              </a>
              <a href={`tel:${CONTACT.phone}`} className="transition-opacity hover:opacity-70">
                {CONTACT.phone}
              </a>
              <span>{CONTACT.address}</span>
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-sm font-black uppercase text-[#14344E]">Empresa</h3>
            <nav className="mt-4 flex flex-col gap-2">
              <Link href="/a-empresa" className="text-sm font-semibold text-[#14344E]/85 transition-opacity hover:opacity-70">
                A Empresa
              </Link>
              <Link href="/servicos" className="text-sm font-semibold text-[#14344E]/85 transition-opacity hover:opacity-70">
                Serviços
              </Link>
              <Link href="/blog" className="text-sm font-semibold text-[#14344E]/85 transition-opacity hover:opacity-70">
                Blog
              </Link>
              <Link href="/revistas" className="text-sm font-semibold text-[#14344E]/85 transition-opacity hover:opacity-70">
                Revistas
              </Link>
            </nav>
          </div>

          {/* Parceiras */}
          <div>
            <h3 className="text-sm font-black uppercase text-[#14344E]">Parceiras</h3>
            <div className="mt-4 flex flex-wrap items-center gap-4 lg:flex-col lg:items-start">
              <div className="h-10 w-24">
                <Image
                  src="/assets/bonijuris.png"
                  alt="Bonijuris"
                  width={120}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="h-10 w-32">
                <Image
                  src="/assets/logoCondGarantidos.png"
                  alt="Condomínios Garantidos"
                  width={160}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-black/15 pt-6 text-center text-xs font-semibold text-[#14344E]/70 sm:text-left">
          <p>
            &copy; {year} NPG Capital. CNPJ {CONTACT.cnpj}. Todos os direitos reservados.{" "}
            <Link href="/politica-de-privacidade" className="underline transition-opacity hover:opacity-70">
              Política de Privacidade
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
