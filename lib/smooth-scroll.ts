import type Lenis from "lenis";

type ScrollTarget = string | Element;

declare global {
  interface Window {
    lenis?: Lenis;
  }
}

export function smoothScrollTo(target: ScrollTarget, offset = -8) {
  if (typeof window === "undefined") return;

  const element =
    typeof target === "string" ? (document.querySelector(target) as HTMLElement | null) : (target as HTMLElement | null);

  if (!element) return;

  if (window.lenis) {
    window.lenis.scrollTo(element, { offset });
    return;
  }

  element.scrollIntoView({ behavior: "smooth", block: "start" });
}
