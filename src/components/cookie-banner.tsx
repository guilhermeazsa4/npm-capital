"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "npg-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[80] px-4 pb-4 sm:px-6">
      <div className="premium-glass-button topbar-ticket-button mx-auto flex max-w-[520px] flex-col items-center gap-4 rounded-[16px] p-5 text-center sm:flex-row sm:justify-between sm:p-6 sm:text-left">
        <p className="text-sm leading-6 text-white/80">
          Usamos cookies essenciais para o funcionamento do site. Ao continuar
          navegando, você concorda com nossa{" "}
          <Link
            href="/politica-de-privacidade"
            className="font-semibold text-[#F1C75B] underline hover:text-[#FFE39A]"
          >
            Política de Privacidade
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={accept}
          className="inline-flex min-h-11 w-full shrink-0 items-center justify-center rounded-[8px] bg-[#F1C75B] px-6 text-sm font-black text-[#0E1F1E] transition-colors hover:bg-[#E1B34C] sm:w-auto"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
