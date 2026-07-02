"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    const canSnap = window.matchMedia("(pointer: fine)").matches;

    let isAnimating = false;

    const getSnapSections = () =>
      Array.from(document.querySelectorAll<HTMLElement>("[data-snap-section]"));

    const getCurrentIndex = (sections: HTMLElement[]) => {
      const viewportCenter = window.scrollY + window.innerHeight / 2;
      let closest = 0;
      let closestDistance = Infinity;

      sections.forEach((section, i) => {
        const sectionCenter = section.offsetTop + section.offsetHeight / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closest = i;
        }
      });

      return closest;
    };

    const snapTo = (section: HTMLElement) => {
      const target = section.offsetTop - (window.innerHeight - section.offsetHeight) / 2;

      isAnimating = true;
      lenis.scrollTo(Math.max(0, target), {
        duration: 1.1,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        onComplete: () => {
          isAnimating = false;
        },
      });
    };

    const onWheel = (event: WheelEvent) => {
      const sections = getSnapSections();
      if (sections.length === 0) return;

      if (isAnimating) {
        // Swallow input mid-transition so it can't be interrupted or stacked.
        event.preventDefault();
        event.stopImmediatePropagation();
        return;
      }

      // Section 1 (Hero) keeps plain scrolling: only engage snapping once
      // the viewport has actually moved into the first snap section.
      const viewportCenter = window.scrollY + window.innerHeight / 2;
      if (viewportCenter < sections[0].offsetTop) return;

      const currentIndex = getCurrentIndex(sections);
      const direction = event.deltaY > 0 ? 1 : -1;
      const nextIndex = Math.min(
        sections.length - 1,
        Math.max(0, currentIndex + direction),
      );

      if (nextIndex === currentIndex) {
        // At the first/last snap section: let normal scroll continue
        // (e.g. past the CTA into the footer).
        return;
      }

      event.preventDefault();
      event.stopImmediatePropagation();
      snapTo(sections[nextIndex]);
    };

    if (canSnap) {
      window.addEventListener("wheel", onWheel, { passive: false, capture: true });
    }

    return () => {
      if (canSnap) {
        window.removeEventListener("wheel", onWheel, { capture: true });
      }
      lenis.destroy();
    };
  }, []);

  return null;
}
