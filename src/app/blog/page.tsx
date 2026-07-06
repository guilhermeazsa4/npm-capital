import type { Metadata } from "next";
import { BlogContent } from "./content";

export const metadata: Metadata = {
  title: "Blog — NPG Capital",
  description:
    "Artigos sobre gestão condominial, inadimplência e previsibilidade financeira para síndicos e administradoras.",
};

export default function BlogPage() {
  return <BlogContent />;
}
