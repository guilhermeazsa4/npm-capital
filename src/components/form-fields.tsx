"use client";

import { AlertCircle } from "lucide-react";

/**
 * Campo isca contra robô de spam: fica fora da tela e invisível para leitores
 * de tela, então só é preenchido por preenchimento automático de bot. O PHP
 * descarta o envio quando vem com valor.
 */
export function HoneypotField() {
  return (
    <div aria-hidden="true" className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden">
      <label htmlFor="website">Não preencha este campo</label>
      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

export function FormErro({ mensagem }: { mensagem: string }) {
  return (
    <p
      role="alert"
      className="mt-4 flex items-start gap-2 rounded-[4px] border border-red-500/25 bg-red-500/10 px-3 py-2.5 text-xs leading-5 text-red-600"
    >
      <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
      <span>{mensagem}</span>
    </p>
  );
}
