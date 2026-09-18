/**
 * Cliente para a API PHP do painel /admin (public/api/admin/*.php).
 *
 * `next dev` não executa PHP — assim como o restante do site, o admin só
 * funciona de verdade num Apache com PHP (`out/` publicado) ou apontando
 * NEXT_PUBLIC_ADMIN_API_BASE para o site publicado.
 *
 * A sessão é um cookie HttpOnly setado pelo PHP (nunca lido pelo JS). O
 * csrfToken devolvido pelo login/me é guardado só em memória (contexto React)
 * e enviado no header X-CSRF-Token nas rotas que alteram dados.
 */

export const ADMIN_API_BASE =
  process.env.NEXT_PUBLIC_ADMIN_API_BASE ?? "/api/admin";

export type LeadStatus = "novo" | "em_contato" | "proposta" | "convertido";

export const LEAD_STATUS_OPTIONS: { value: LeadStatus; label: string }[] = [
  { value: "novo", label: "Novo" },
  { value: "em_contato", label: "Em contato" },
  { value: "proposta", label: "Proposta" },
  { value: "convertido", label: "Convertido" },
];

export interface Lead {
  id: number;
  origem: string;
  nome: string;
  email: string;
  telefone: string;
  condominio: string;
  receita: string;
  cidade: string;
  estado: string;
  profissao: string;
  ebook: string;
  mensagem: string;
  consentimento: 0 | 1;
  status: LeadStatus;
  ip: string;
  criado_em: string;
  atualizado_em: string;
}

export interface LeadsResponse {
  leads: Lead[];
  total: number;
  page: number;
  pageSize: number;
}

class AdminApiError extends Error {}

async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  let resposta: Response;
  try {
    resposta = await fetch(`${ADMIN_API_BASE}${path}`, {
      ...options,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });
  } catch {
    throw new AdminApiError(
      "Não foi possível falar com o servidor. Verifique sua conexão."
    );
  }

  let corpo: { ok?: boolean; erro?: string } & Partial<T> = {};
  try {
    corpo = await resposta.json();
  } catch {
    // resposta não-JSON (ex: 404 do Apache) — segue com corpo vazio
  }

  if (!resposta.ok || !corpo.ok) {
    throw new AdminApiError(corpo.erro || "Erro inesperado. Tente novamente.");
  }

  return corpo as T;
}

export async function adminLogin(username: string, password: string) {
  return request<{ username: string; csrfToken: string }>("/login.php", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
}

export async function adminLogout(csrfToken: string) {
  return request<Record<string, never>>("/logout.php", {
    method: "POST",
    headers: { "X-CSRF-Token": csrfToken },
  });
}

export async function adminMe() {
  return request<{ username: string; csrfToken: string }>("/me.php", {
    method: "GET",
  });
}

export async function fetchLeads(params: {
  q?: string;
  status?: LeadStatus | "";
  page?: number;
  pageSize?: number;
}) {
  const query = new URLSearchParams();
  if (params.q) query.set("q", params.q);
  if (params.status) query.set("status", params.status);
  query.set("page", String(params.page ?? 1));
  query.set("pageSize", String(params.pageSize ?? 20));

  return request<LeadsResponse>(`/leads.php?${query.toString()}`, {
    method: "GET",
  });
}

export async function updateLeadStatus(
  id: number,
  status: LeadStatus,
  csrfToken: string
) {
  return request<Record<string, never>>("/lead-status.php", {
    method: "POST",
    headers: { "X-CSRF-Token": csrfToken },
    body: JSON.stringify({ id, status }),
  });
}
