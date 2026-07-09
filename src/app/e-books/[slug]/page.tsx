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

  const title = `${ebook.seoTitle} | NPG Capital`;

  return {
    title,
    description: ebook.metaDescription,
    keywords: ebook.keywords,
    openGraph: {
      title,
      description: ebook.metaDescription,
      images: [{ url: ebook.image }],
      type: "article",
    },
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
