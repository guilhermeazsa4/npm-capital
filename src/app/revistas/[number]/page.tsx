import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { revistas, getRevista } from "@/lib/revistas";
import { RevistaLandingContent } from "./content";

export async function generateStaticParams() {
  return revistas.map((revista) => ({ number: String(revista.number) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ number: string }>;
}): Promise<Metadata> {
  const { number } = await params;
  const revista = getRevista(Number(number));

  if (!revista) {
    return { title: "Edição não encontrada — NPG Capital" };
  }

  return {
    title: `Revista Direito e Condomínio #${revista.number} — NPG Capital`,
    description: revista.description,
  };
}

export default async function RevistaPage({
  params,
}: {
  params: Promise<{ number: string }>;
}) {
  const { number } = await params;
  const revista = getRevista(Number(number));

  if (!revista) {
    notFound();
  }

  return <RevistaLandingContent revista={revista} />;
}
