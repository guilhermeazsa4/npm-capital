"use client";

import { ArrowRight, Calendar, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FloatingActions, MotionBlock } from "@/components/ui";
import { blogPosts } from "@/lib/blog-posts";

export function BlogContent() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-white to-[#FAFAFA] px-5 pb-20 pt-32 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-[1080px]">
          <MotionBlock className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#F1C75B] sm:mb-5 sm:text-sm sm:tracking-[0.22em]">
              Blog
            </p>
            <h1 className="text-4xl font-black leading-tight text-[#14344E] md:text-5xl">
              Artigos para síndicos e administradoras
            </h1>
            <p className="mt-6 text-base leading-8 text-[#14344E]/72 md:text-lg">
              Conteúdo sobre inadimplência, gestão e legislação condominial, direto ao ponto.
            </p>
          </MotionBlock>

          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
            {blogPosts.map((post, i) => (
              <MotionBlock key={post.slug} delay={i * 0.05}>
                <article className="flex h-full flex-col">
                  <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] w-full overflow-hidden rounded-[8px]">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 100vw"
                    />
                  </Link>

                  <div className="mt-4 flex items-center justify-between gap-3 text-xs font-bold text-[#14344E]/55">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#14344E]/6 px-2.5 py-1 text-[#14344E]">
                      <Tag aria-hidden="true" className="h-3.5 w-3.5" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar aria-hidden="true" className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                  </div>

                  <h2 className="mt-3 text-base font-black leading-snug text-[#14344E]">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-3 flex-1 text-[15px] leading-[1.35] text-[#14344E]/72">{post.excerpt}</p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="group mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#14344E]"
                  >
                    Ler artigo completo
                    <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              </MotionBlock>
            ))}
          </div>
        </div>
      </section>

      <FloatingActions />
    </main>
  );
}
