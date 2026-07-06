import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ebooks, getEbook } from "@/lib/ebooks";
import { EbookLandingContent } from "./content";

export async function generateStaticParams() {
  return ebooks.map((ebook) => ({ slug: ebook.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ebook = getEbook(slug);

  if (!ebook) {
    return { title: "Material não encontrado — NPG Capital" };
  }

  return {
    title: `${ebook.title} — NPG Capital`,
    description: ebook.description,
  };
}

export default async function EbookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ebook = getEbook(slug);

  if (!ebook) {
    notFound();
  }

  return <EbookLandingContent ebook={ebook} />;
}
