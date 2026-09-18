import type { Metadata } from "next";
import { AdminAuthProvider } from "@/components/admin/auth-provider";

export const metadata: Metadata = {
  title: "Painel administrativo — NPG Capital",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F4F6F8]">
      <AdminAuthProvider>{children}</AdminAuthProvider>
    </div>
  );
}
