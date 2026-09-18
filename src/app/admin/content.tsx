"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useAdminAuth } from "@/components/admin/auth-provider";
import {
  fetchLeads,
  updateLeadStatus,
  LEAD_STATUS_OPTIONS,
  type Lead,
  type LeadStatus,
} from "@/lib/admin-api";

const PAGE_SIZE = 20;

function statusBadgeClass(status: LeadStatus) {
  switch (status) {
    case "novo":
      return "bg-[#14344E]/10 text-[#14344E]";
    case "em_contato":
      return "bg-blue-100 text-blue-700";
    case "proposta":
      return "bg-amber-100 text-amber-700";
    case "convertido":
      return "bg-green-100 text-green-700";
  }
}

function formatarData(iso: string) {
  const data = new Date(iso.replace(" ", "T"));
  if (Number.isNaN(data.getTime())) return iso;
  return data.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function useDebounced<T>(value: T, delay: number) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounced;
}

export function AdminDashboardContent() {
  const router = useRouter();
  const { status: authStatus, username, csrfToken, logout } = useAdminAuth();

  const [q, setQ] = useState("");
  const debouncedQ = useDebounced(q, 350);
  const [statusFilter, setStatusFilter] = useState<LeadStatus | "">("");
  const [page, setPage] = useState(1);

  const [leads, setLeads] = useState<Lead[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");
  const [expandido, setExpandido] = useState<number | null>(null);
  const [atualizandoId, setAtualizandoId] = useState<number | null>(null);

  useEffect(() => {
    if (authStatus === "unauthenticated") {
      router.replace("/admin/login");
    }
  }, [authStatus, router]);

  useEffect(() => {
    setPage(1);
  }, [debouncedQ, statusFilter]);

  useEffect(() => {
    if (authStatus !== "authenticated") return;

    let cancelado = false;
    setLoading(true);
    setErro("");

    fetchLeads({ q: debouncedQ, status: statusFilter, page, pageSize: PAGE_SIZE })
      .then((data) => {
        if (cancelado) return;
        setLeads(data.leads);
        setTotal(data.total);
      })
      .catch((err) => {
        if (cancelado) return;
        setErro(err instanceof Error ? err.message : "Erro ao carregar leads.");
      })
      .finally(() => {
        if (!cancelado) setLoading(false);
      });

    return () => {
      cancelado = true;
    };
  }, [authStatus, debouncedQ, statusFilter, page]);

  const totalPaginas = useMemo(() => Math.max(1, Math.ceil(total / PAGE_SIZE)), [total]);

  async function handleStatusChange(lead: Lead, novoStatus: LeadStatus) {
    setAtualizandoId(lead.id);
    setLeads((atual) =>
      atual.map((l) => (l.id === lead.id ? { ...l, status: novoStatus } : l))
    );
    try {
      await updateLeadStatus(lead.id, novoStatus, csrfToken);
    } catch (err) {
      // reverte em caso de falha
      setLeads((atual) =>
        atual.map((l) => (l.id === lead.id ? { ...l, status: lead.status } : l))
      );
      setErro(err instanceof Error ? err.message : "Não foi possível atualizar o status.");
    } finally {
      setAtualizandoId(null);
    }
  }

  if (authStatus === "loading" || authStatus === "unauthenticated") {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-[#14344E]/60">
        Carregando...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#F1C75B]">
            NPG Capital
          </p>
          <h1 className="mt-1 text-2xl font-black text-[#14344E]">Leads</h1>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-[#14344E]/60">{username}</span>
          <button
            type="button"
            onClick={() => logout()}
            className="rounded-[6px] border border-[#14344E]/15 px-3 py-1.5 font-semibold text-[#14344E] transition-colors hover:bg-[#14344E]/5"
          >
            Sair
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <input
          type="search"
          placeholder="Buscar por nome, e-mail, telefone ou condomínio"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="min-w-[260px] flex-1 rounded-[6px] border border-[#14344E]/15 bg-white px-4 py-2.5 text-sm text-[#14344E] outline-none focus:border-[#F1C75B] focus:ring-2 focus:ring-[#F1C75B]/20"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as LeadStatus | "")}
          className="rounded-[6px] border border-[#14344E]/15 bg-white px-4 py-2.5 text-sm text-[#14344E] outline-none focus:border-[#F1C75B] focus:ring-2 focus:ring-[#F1C75B]/20"
        >
          <option value="">Todos os status</option>
          {LEAD_STATUS_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {erro ? (
        <p className="mt-4 rounded-[6px] bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
          {erro}
        </p>
      ) : null}

      <div className="mt-6 overflow-x-auto rounded-[12px] border border-[#14344E]/10 bg-white shadow-[0_10px_30px_rgba(20,52,78,0.06)]">
        <table className="w-full min-w-[860px] text-left text-sm">
          <thead>
            <tr className="border-b border-[#14344E]/10 text-xs font-black uppercase tracking-wide text-[#14344E]/50">
              <th className="px-4 py-3">Nome</th>
              <th className="px-4 py-3">Contato</th>
              <th className="px-4 py-3">Condomínio</th>
              <th className="px-4 py-3">Mensagem</th>
              <th className="px-4 py-3">Data</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-[#14344E]/50">
                  Carregando leads...
                </td>
              </tr>
            ) : leads.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-[#14344E]/50">
                  Nenhum lead encontrado.
                </td>
              </tr>
            ) : (
              leads.map((lead) => {
                const aberto = expandido === lead.id;
                return (
                  <tr key={lead.id} className="border-b border-[#14344E]/5 align-top last:border-0">
                    <td className="px-4 py-3 font-semibold text-[#14344E]">{lead.nome}</td>
                    <td className="px-4 py-3 text-[#14344E]/80">
                      <div>{lead.email}</div>
                      <div className="text-[#14344E]/50">{lead.telefone}</div>
                    </td>
                    <td className="px-4 py-3 text-[#14344E]/80">{lead.condominio || "—"}</td>
                    <td className="max-w-[280px] px-4 py-3 text-[#14344E]/80">
                      {lead.mensagem ? (
                        <button
                          type="button"
                          onClick={() => setExpandido(aberto ? null : lead.id)}
                          className="text-left"
                        >
                          <span className={aberto ? "" : "line-clamp-2"}>{lead.mensagem}</span>
                          <span className="ml-1 font-semibold text-[#14344E]/40">
                            {aberto ? "ver menos" : "ver mais"}
                          </span>
                        </button>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-[#14344E]/60">
                      {formatarData(lead.criado_em)}
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={lead.status}
                        disabled={atualizandoId === lead.id}
                        onChange={(e) =>
                          handleStatusChange(lead, e.target.value as LeadStatus)
                        }
                        className={`rounded-full border-0 px-3 py-1.5 text-xs font-bold outline-none disabled:opacity-50 ${statusBadgeClass(lead.status)}`}
                      >
                        {LEAD_STATUS_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-[#14344E]/60">
        <span>{total} lead{total === 1 ? "" : "s"} encontrado{total === 1 ? "" : "s"}</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1}
            className="rounded-[6px] border border-[#14344E]/15 px-3 py-1.5 font-semibold text-[#14344E] disabled:opacity-40"
          >
            Anterior
          </button>
          <span>
            Página {page} de {totalPaginas}
          </span>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPaginas, p + 1))}
            disabled={page >= totalPaginas}
            className="rounded-[6px] border border-[#14344E]/15 px-3 py-1.5 font-semibold text-[#14344E] disabled:opacity-40"
          >
            Próxima
          </button>
        </div>
      </div>
    </div>
  );
}
