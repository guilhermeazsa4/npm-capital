import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT, WHATSAPP_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="gold-surface relative z-[55] border-t border-[#FFE39A]/70 px-5 pb-6 pt-6 text-black lg:px-8 lg:pb-8 lg:pt-8">
      <div className="relative z-10 mx-auto max-w-[1220px]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* Contatos e Localização */}
          <div>
            <h3 className="text-sm font-black uppercase text-black">Contato</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm font-semibold text-black">
              <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2">
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
                {CONTACT.email}
              </a>
              <a href={`tel:${CONTACT.landline.replace(/\D/g, "")}`} className="inline-flex items-center gap-2">
                <Phone aria-hidden="true" className="h-4 w-4 shrink-0" />
                {CONTACT.landline}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <MessageCircle aria-hidden="true" className="h-4 w-4 shrink-0" />
                {CONTACT.phone}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin aria-hidden="true" className="h-4 w-4 shrink-0" />
                São Paulo, SP
              </span>
            </div>
          </div>

          {/* Associada */}
          <div>
            <h3 className="text-sm font-black uppercase text-black">Associada</h3>
            <div className="mt-5 flex flex-wrap items-center gap-6">
              <div className="h-10 w-36">
                <Image
                  src="/assets/logoCondGarantidos.webp"
                  alt="Condomínios Garantidos"
                  width={160}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Parceiras */}
          <div>
            <h3 className="text-sm font-black uppercase text-black">Parceiras</h3>
            <div className="mt-5 flex flex-wrap items-center gap-6">
              <div className="h-10 w-28">
                <Image
                  src="/assets/BonijurisLogoBlack.webp"
                  alt="Bonijuris"
                  width={120}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="h-10 w-32">
                <Image
                  src="/assets/RevistaDireitoECondLogo.webp"
                  alt="Revista Direito e Condomínio"
                  width={140}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-black/15 pt-6 text-center text-xs font-semibold text-black sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-black/70">Desenvolvido por</span>
            <Image
              src="/assets/HausLogoBlack.webp"
              alt="Haus"
              width={80}
              height={26}
              className="h-5 w-auto object-contain"
            />
          </div>

          <p>
            Todos os direitos reservados.{" "}
            <Link href="/politica-de-privacidade" className="underline">
              Política de Privacidade
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
