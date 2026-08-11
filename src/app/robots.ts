import type { MetadataRoute } from "next";

// Exigido por output: "export" — sem isto o build falha ao coletar /robots.txt.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://npgcapital.com.br/sitemap.xml",
  };
}
