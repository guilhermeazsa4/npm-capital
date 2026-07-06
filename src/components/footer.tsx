import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="gold-surface relative overflow-hidden border-t border-[#FFE39A]/70 px-5 py-12 text-black lg:px-8 lg:py-20">
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.42),transparent_36%,rgba(255,255,255,0.16)_72%,transparent)] opacity-90" />
      <div className="relative z-10 mx-auto max-w-[1220px]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-16">
          {/* Parceiras */}
          <div>
            <h3 className="text-sm font-black uppercase text-black">Parceiras</h3>
            <div className="mt-5 flex flex-wrap items-center gap-6 lg:flex-col lg:items-start">
              <div className="h-14 w-36">
                <Image
                  src="/assets/bonijuris.png"
                  alt="Bonijuris"
                  width={160}
                  height={56}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="h-14 w-48">
                <Image
                  src="/assets/logoCondGarantidos.png"
                  alt="Condomínios Garantidos"
                  width={220}
                  height={56}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Contatos e Localização */}
          <div>
            <h3 className="text-sm font-black uppercase text-black">Contato</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm font-semibold text-black">
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
              <span>{CONTACT.address}</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-black/15 pt-6 text-center text-xs font-semibold text-black sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            &copy; {year} NPG Capital. CNPJ {CONTACT.cnpj}. Todos os direitos reservados.{" "}
            <Link href="/politica-de-privacidade" className="underline">
              Política de Privacidade
            </Link>
          </p>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-black/70">Desenvolvido por</span>
            <Image
              src="/assets/HausLogoBlack.png"
              alt="Haus"
              width={100}
              height={32}
              className="h-6 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
