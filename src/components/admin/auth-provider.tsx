"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { adminLogout, adminMe } from "@/lib/admin-api";

type AuthStatus = "loading" | "authenticated" | "unauthenticated";

interface AdminAuthValue {
  status: AuthStatus;
  username: string;
  csrfToken: string;
  refresh: () => Promise<void>;
  setSession: (data: { username: string; csrfToken: string }) => void;
  logout: () => Promise<void>;
}

const AdminAuthContext = createContext<AdminAuthValue | null>(null);

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<AuthStatus>("loading");
  const [username, setUsername] = useState("");
  const [csrfToken, setCsrfToken] = useState("");

  const refresh = useCallback(async () => {
    try {
      const data = await adminMe();
      setUsername(data.username);
      setCsrfToken(data.csrfToken);
      setStatus("authenticated");
    } catch {
      setUsername("");
      setCsrfToken("");
      setStatus("unauthenticated");
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const setSession = useCallback(
    (data: { username: string; csrfToken: string }) => {
      setUsername(data.username);
      setCsrfToken(data.csrfToken);
      setStatus("authenticated");
    },
    []
  );

  const logout = useCallback(async () => {
    try {
      await adminLogout(csrfToken);
    } catch {
      // sessão já pode ter expirado no servidor — segue o logout local
    }
    setUsername("");
    setCsrfToken("");
    setStatus("unauthenticated");
  }, [csrfToken]);

  return (
    <AdminAuthContext.Provider
      value={{ status, username, csrfToken, refresh, setSession, logout }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) {
    throw new Error("useAdminAuth precisa estar dentro de <AdminAuthProvider>.");
  }
  return ctx;
}
