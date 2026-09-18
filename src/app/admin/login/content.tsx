"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAdminAuth } from "@/components/admin/auth-provider";
import { adminLogin } from "@/lib/admin-api";

export function AdminLoginContent() {
  const router = useRouter();
  const { status, setSession } = useAdminAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");
  const [enviando, setEnviando] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/admin");
    }
  }, [status, router]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro("");
    setEnviando(true);

    try {
      const data = await adminLogin(username, password);
      setSession(data);
      router.replace("/admin");
    } catch (err) {
      setErro(err instanceof Error ? err.message : "Erro inesperado. Tente novamente.");
    } finally {
      setEnviando(false);
    }
  }

  if (status === "authenticated") {
    return null;
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-[12px] border border-[#14344E]/10 bg-white p-8 shadow-[0_16px_46px_rgba(20,52,78,0.12)]"
      >
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#F1C75B]">
          NPG Capital
        </p>
        <h1 className="mt-2 text-xl font-black text-[#14344E]">
          Painel administrativo
        </h1>

        <div className="mt-6">
          <label htmlFor="username" className="mb-1 block text-sm font-semibold text-[#14344E]">
            Usuário
          </label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-[4px] border border-[#14344E]/15 bg-white px-4 py-3 text-sm text-[#14344E] outline-none transition-colors focus:border-[#F1C75B] focus:ring-2 focus:ring-[#F1C75B]/20"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="password" className="mb-1 block text-sm font-semibold text-[#14344E]">
            Senha
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-[4px] border border-[#14344E]/15 bg-white px-4 py-3 text-sm text-[#14344E] outline-none transition-colors focus:border-[#F1C75B] focus:ring-2 focus:ring-[#F1C75B]/20"
          />
        </div>

        {erro ? (
          <p className="mt-4 rounded-[6px] bg-red-50 px-3 py-2 text-sm font-semibold text-red-600">
            {erro}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={enviando}
          className="mt-6 w-full rounded-[8px] bg-[#14344E] px-6 py-3 text-sm font-black text-white transition-colors hover:bg-[#1c4265] disabled:opacity-60"
        >
          {enviando ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
