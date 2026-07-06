"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LinkButton } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/constants";

const navItems = [
  { label: "Home", href: "/" },
  { label: "A Empresa", href: "/a-empresa" },
  { label: "Serviços", href: "/servicos" },
  { label: "Revistas", href: "/revistas" },
  { label: "Blog", href: "/blog" },
  { label: "E-books", href: "/e-books" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => setScrolled(window.scrollY > 12));
    };

    frame = window.requestAnimationFrame(() => {
      setMounted(true);
      onScroll();
    });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const headerClass = "fixed inset-x-0 top-0 z-50 w-full transition-all duration-300";

  const shellClass = `premium-topbar w-full overflow-hidden rounded-b-[18px] transition-all duration-300 ${
    scrolled ? "premium-topbar-scrolled" : ""
  }`;

  const inner = (
    <>
      <div className={shellClass}>
        <div className="mx-auto grid h-[76px] w-full max-w-[1520px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 sm:h-[84px] sm:px-7 lg:px-10 xl:h-[92px] 2xl:h-[100px] 2xl:px-14">
          <Link href="/" aria-label="NPG Capital" className="flex shrink-0 items-center justify-self-start">
            <Image
              src="/assets/logoFull.png"
              alt="NPG Capital"
              width={240}
              height={60}
              className={`h-10 w-auto object-contain transition-[filter] duration-300 sm:h-12 xl:h-14 2xl:h-16 ${
                scrolled ? "brightness-0" : ""
              }`}
              priority
            />
          </Link>

          <nav
            className="hidden items-center gap-1 px-2 xl:flex 2xl:gap-2 2xl:px-4"
            aria-label="Menu principal"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="premium-nav-link rounded-[14px] px-2 py-2 text-sm font-bold whitespace-nowrap 2xl:px-3 2xl:py-2.5 2xl:text-base"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3 justify-self-end 2xl:gap-4">
            <div className="hidden items-center gap-3 xl:flex 2xl:gap-4">
              <LinkButton href="/seu-boleto" variant="glass" className="topbar-ticket-button">
                <FileText aria-hidden="true" className="relative z-10 h-4 w-4" />
                Seu Boleto
              </LinkButton>
            </div>

            <button
              type="button"
              className={`inline-flex h-12 w-12 items-center justify-center rounded-[16px] border backdrop-blur-xl transition-colors xl:hidden ${
                scrolled
                  ? "border-[#14344E]/15 bg-[#14344E]/6 text-[#14344E] shadow-none"
                  : "border-white/24 bg-white/12 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.24)]"
              }`}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="w-full rounded-b-[18px] border-x border-b border-white/18 bg-[#0E1F1E]/94 px-5 py-6 text-center shadow-[0_18px_58px_rgba(4,17,24,0.24),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-2xl xl:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="mx-auto flex max-w-[520px] flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-[8px] px-3 py-3 text-lg font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/seu-boleto"
                className="rounded-[8px] px-3 py-3 text-lg font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                onClick={() => setOpen(false)}
              >
                Seu Boleto
              </Link>
              <LinkButton
                href="/contato#solicitar-proposta"
                variant="gold"
                size="mobile"
                className="mt-2"
                onClick={() => setOpen(false)}
              >
                Solicitar Proposta
              </LinkButton>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-[8px] border border-white/22 bg-white/12 px-5 text-base font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]"
                onClick={() => setOpen(false)}
              >
                <MessageCircle aria-hidden="true" className="h-5 w-5" />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );

  if (!mounted) {
    return <header className={headerClass}>{inner}</header>;
  }

  return (
    <motion.header
      className={headerClass}
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
    >
      {inner}
    </motion.header>
  );
}
