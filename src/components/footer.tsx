import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="gold-surface relative z-[55] border-t border-[#FFE39A]/70 px-5 pb-6 pt-6 text-black lg:px-8 lg:pb-8 lg:pt-8">
      <div className="relative z-10 mx-auto max-w-[1220px]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* Parceiras */}
          <div>
            <h3 className="text-sm font-black uppercase text-black">Parceiras</h3>
            <div className="mt-5 flex flex-wrap items-center gap-6">
              <div className="h-14 w-36">
                <Image
                  src="/assets/BonijurisLogoBlack.png"
                  alt="Bonijuris"
                  width={160}
                  height={56}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="h-14 w-40">
                <Image
                  src="/assets/RevistaDireitoECondLogo.png"
                  alt="Revista Direito e Condomínio"
                  width={180}
                  height={56}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Associada */}
          <div>
            <h3 className="text-sm font-black uppercase text-black">Associada</h3>
            <div className="mt-5 flex flex-wrap items-center gap-6">
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
              <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2">
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
                {CONTACT.email}
              </a>
              <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2">
                <Phone aria-hidden="true" className="h-4 w-4 shrink-0" />
                {CONTACT.phone}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin aria-hidden="true" className="h-4 w-4 shrink-0" />
                {CONTACT.address}
              </span>
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
            <span className="text-sm font-semibold text-black/70">Desenvolvido por</span>
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
