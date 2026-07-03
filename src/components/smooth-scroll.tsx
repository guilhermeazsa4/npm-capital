"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Lenis keeps its own virtual scroll position, which doesn't reset (or
  // jump to an in-page anchor) on its own when Next.js navigates client-side
  // — the native browser hash-jump also fights with Lenis's RAF-driven
  // scroll, landing in the wrong spot. Drive both cases through Lenis
  // explicitly on every route change: scroll to the anchored element (offset
  // so it isn't hidden under the fixed header) or back to the top.
  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";

    if (hash) {
      const id = hash.slice(1);
      let raf = 0;

      const scrollToAnchor = () => {
        const target = document.getElementById(id);
        if (target) {
          lenisRef.current?.scrollTo(target, { immediate: true, offset: -100 });
        } else {
          raf = requestAnimationFrame(scrollToAnchor);
        }
      };

      raf = requestAnimationFrame(scrollToAnchor);
      return () => cancelAnimationFrame(raf);
    }

    lenisRef.current?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
