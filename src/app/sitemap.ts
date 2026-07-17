import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";
import { ebooks } from "@/lib/ebooks";
import { revistas } from "@/lib/revistas";

const BASE_URL = "https://npgcapital.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/a-empresa",
    "/servicos",
    "/revistas",
    "/noticias",
    "/e-books",
    "/contato",
    "/seu-boleto",
    "/politica-de-privacidade",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${BASE_URL}/noticias/${post.slug}`,
    lastModified: new Date(),
  }));

  const ebookRoutes = ebooks.map((ebook) => ({
    url: `${BASE_URL}/e-books/${ebook.slug}`,
    lastModified: new Date(),
  }));

  const revistaRoutes = revistas.map((revista) => ({
    url: `${BASE_URL}/revistas/${revista.number}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...blogRoutes, ...ebookRoutes, ...revistaRoutes];
}
