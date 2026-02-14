"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type Item = { label: string; href: string; id: string };

export default function Navbar() {
  const items: Item[] = useMemo(
    () => [
      { label: "HOME", href: "#home", id: "home" },
      { label: "ABOUT", href: "#about", id: "about" },
      { label: "WORK", href: "#work", id: "work" },
      { label: "CONTACT", href: "#contact", id: "contact" },
    ],
    [],
  );

  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const ids = items.map((i) => i.id);
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          )[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { root: null, threshold: [0.2, 0.35, 0.5, 0.65] },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [items]);

  const current = hovered ?? active;

  return (
    <div className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <nav
        className="
          relative
          rounded-2xl border border-white/10
          bg-white/5 backdrop-blur-xl
          shadow-[0_0_40px_rgba(59,130,246,0.18)]
        "
        onMouseLeave={() => setHovered(null)}
      >
        <ul className="relative flex items-center gap-1 px-1.5 py-1.5 sm:gap-2 sm:px-2 sm:py-2">
          {items.map((it) => (
            <li key={it.id} className="relative">
              <a
                href={it.href}
                onMouseEnter={() => setHovered(it.id)}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector(it.href);
                  if (!el) return;
                  el.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="
                  relative block select-none
                  px-3 py-2 sm:px-5 sm:py-2.5
                  text-[10px] sm:text-xs
                  tracking-[0.22em] sm:tracking-[0.32em]
                  rounded-xl
                "
              >
                {/* Base text (always visible) */}
                <span className="relative z-10 text-white/70 transition-colors">
                  {it.label}
                </span>

                {/* Mask text (only visible when pill is under this item) */}
                <AnimatePresence>
                  {current === it.id ? (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="
                        pointer-events-none
                        absolute inset-0 z-20
                        grid place-items-center
                        text-[10px] tracking-[0.22em] sm:text-xs sm:tracking-[0.32em]
                        text-white
                        mix-blend-screen
                      "
                    >
                      {it.label}
                    </motion.span>
                  ) : null}
                </AnimatePresence>
              </a>

              {/* Sliding pill */}
              {current === it.id ? (
                <motion.div
                  layoutId="nav-pill"
                  className="
                    absolute inset-0 rounded-xl
                    bg-purple-400/60
                    shadow-[0_0_30px_rgba(59,130,246,0.45)]
                    before:absolute before:inset-0 before:rounded-xl
                    before:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]
                    before:opacity-70
                  "
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
