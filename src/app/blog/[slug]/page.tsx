import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getAdjacentPosts, getBlogPost } from "@/lib/blog-posts";
import { BlogPostContent } from "./content";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Artigo não encontrado — NPG Capital" };
  }

  return {
    title: `${post.title} — NPG Capital`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const { previous, next } = getAdjacentPosts(slug);

  return <BlogPostContent post={post} previous={previous} next={next} />;
}
