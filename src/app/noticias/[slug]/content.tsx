"use client";

import { ArrowLeft, ArrowRight, Calendar, Check, Link2, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FloatingActions, MotionBlock } from "@/components/ui";
import type { BlogPost } from "@/lib/blog-posts";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" fill="currentColor" className={className}>
      <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="17.6" cy="6.4" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22 12a10 10 0 1 0-11.5 9.95v-7.04H7.9V12h2.6V9.8c0-2.57 1.53-4 3.87-4 1.12 0 2.3.2 2.3.2v2.5h-1.3c-1.28 0-1.68.8-1.68 1.62V12h2.86l-.46 2.91h-2.4v7.04A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817L5.077 21.75H1.75l7.731-8.835L1.818 2.25h6.82l4.822 6.38L18.244 2.25zM17.002 19.332h1.834L6.822 4.156H4.988L17.002 19.332z" />
    </svg>
  );
}

function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const shareLinks = [
    {
      label: "WhatsApp",
      Icon: WhatsAppIcon,
      buildHref: (url: string) => `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    },
    {
      label: "X",
      Icon: XIcon,
      buildHref: (url: string) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    },
    {
      label: "Instagram",
      Icon: InstagramIcon,
      buildHref: () => "https://www.instagram.com/",
    },
    {
      label: "Facebook",
      Icon: FacebookIcon,
      buildHref: (url: string) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
  ];

  const handleShare = (buildHref: (url: string) => string) => {
    window.open(buildHref(window.location.href), "_blank", "noopener,noreferrer");
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-bold text-[#14344E]/55">Compartilhar:</span>
      {shareLinks.map(({ label, Icon, buildHref }) => (
        <button
          key={label}
          type="button"
          aria-label={label}
          onClick={() => handleShare(buildHref)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#14344E]/15 text-[#14344E] transition-colors hover:bg-[#14344E]/6"
        >
          <Icon className="h-4 w-4" />
        </button>
      ))}
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 rounded-full border border-[#14344E]/15 px-4 py-2 text-sm font-bold text-[#14344E] transition-colors hover:bg-[#14344E]/6"
      >
        {copied ? (
          <>
            <Check aria-hidden="true" className="h-4 w-4 text-[#1FAF67]" />
            Copiado
          </>
        ) : (
          <>
            <Link2 aria-hidden="true" className="h-4 w-4" />
            Copiar link
          </>
        )}
      </button>
    </div>
  );
}

export function NoticiaPostContent({
  post,
  previous,
  next,
}: {
  post: BlogPost;
  previous: BlogPost | null;
  next: BlogPost | null;
}) {
  return (
    <main className="bg-white">
      <article className="bg-gradient-to-b from-white to-[#FAFAFA] px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-[860px]">
          <Link
            href="/noticias"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#14344E]/60 transition-colors hover:text-[#14344E]"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Voltar para notícias
          </Link>

          <MotionBlock delay={0.05}>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-bold text-[#14344E]/55">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#14344E]/6 px-3 py-1.5 text-[#14344E]">
                <Tag aria-hidden="true" className="h-4 w-4" />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar aria-hidden="true" className="h-4 w-4" />
                {post.date}
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-black leading-tight text-[#14344E] lg:text-4xl">
              {post.title}
            </h1>

            <p className="mt-3 text-left text-sm font-semibold text-[#14344E]/55">
              Por Equipe NPG Capital
            </p>

            <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-[8px]">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className={`object-cover ${post.imageZoom ? "scale-150" : ""}`}
                sizes="(min-width: 1024px) 860px, 100vw"
                priority
              />
            </div>

            <div className="mt-8 flex flex-col gap-5">
              {post.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-base leading-8 text-[#14344E]/78 lg:text-lg lg:leading-9">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 border-t border-[#14344E]/10 pt-8">
              <ShareButtons title={post.title} />
            </div>
          </MotionBlock>

          <div className="mt-12 flex items-center justify-between border-t border-[#14344E]/10 pt-8">
            {previous ? (
              <Link
                href={`/noticias/${previous.slug}`}
                className="group inline-flex items-center gap-2 text-sm font-bold text-[#14344E]/70 transition-colors hover:text-[#14344E]"
              >
                <ArrowLeft aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Anterior
              </Link>
            ) : (
              <span />
            )}

            {next ? (
              <Link
                href={`/noticias/${next.slug}`}
                className="group inline-flex items-center gap-2 text-sm font-bold text-[#14344E]/70 transition-colors hover:text-[#14344E]"
              >
                Próxima
                <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </article>

      <FloatingActions />
    </main>
  );
}
