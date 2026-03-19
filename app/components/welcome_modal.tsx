"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { featureFlags, welcomeModalConfig } from "@/lib/site-config";

const CONFETTI_COLORS = [
  "#a855f7",
  "#818cf8",
  "#22d3ee",
  "#f472b6",
  "#fde047",
] as const;

const CONFETTI_PIECES = Array.from({ length: 50 }, (_, index) => ({
  id: index,
  color: CONFETTI_COLORS[index % CONFETTI_COLORS.length],
  width: 8 + (index % 4) * 2,
  height: 12 + (index % 3) * 3,
  horizontalOffset: -260 + (index % 17) * 32,
  verticalTravel: 320 + (index % 6) * 55 + Math.floor(index / 2) * 10,
  rotate: -240 + index * 18,
  duration: 1.2 + (index % 5) * 0.12,
  delay: (index % 6) * 0.04,
}));

const cooldownMs = welcomeModalConfig.cooldownDays * 24 * 60 * 60 * 1000;

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasCheckedStorage, setHasCheckedStorage] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (!featureFlags.welcomeModalEnabled) {
        setHasCheckedStorage(true);
        return;
      }

      const now = Date.now();
      const lastOpenedRaw = window.localStorage.getItem(
        welcomeModalConfig.storageKey,
      );
      const lastOpenedAt = Number(lastOpenedRaw);
      //const hasRecentVisit = Number.isFinite(lastOpenedAt) && now - lastOpenedAt < cooldownMs;

      const hasRecentVisit = false;

      if (!hasRecentVisit) {
        window.localStorage.setItem(welcomeModalConfig.storageKey, String(now));
        setIsOpen(true);
      }

      setHasCheckedStorage(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!hasCheckedStorage) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [hasCheckedStorage, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!hasCheckedStorage || !featureFlags.welcomeModalEnabled) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <div className="pointer-events-none fixed inset-0 z-50">
          <motion.div
            className="pointer-events-auto absolute inset-0 bg-black/65 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute inset-0 overflow-hidden">
            {CONFETTI_PIECES.map((piece) => (
              <motion.span
                key={piece.id}
                className="absolute left-1/2 bottom-[-3rem] rounded-sm shadow-[0_0_18px_rgba(255,255,255,0.18)]"
                style={{
                  width: piece.width,
                  height: piece.height,
                  backgroundColor: piece.color,
                  zIndex: 1000
                }}
                initial={{
                  opacity: 0,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  scale: 0.85,
                }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  x: piece.horizontalOffset,
                  y: -piece.verticalTravel,
                  rotate: piece.rotate,
                  scale: [0.85, 1, 0.95],
                }}
                transition={{
                  duration: piece.duration,
                  delay: piece.delay,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 py-8 sm:px-6">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="welcome-modal-title"
              className="pointer-events-auto relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/12 bg-[#090612]/90 p-6 text-white shadow-[0_25px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-8"
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.22),transparent_42%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.16),transparent_38%)]" />
                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:26px_26px]" />
              </div>

              <div className="relative">
                <h2
                  id="welcome-modal-title"
                  className="max-w-md text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                >
                  {welcomeModalConfig.title}
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-7 text-white/72 sm:text-base">
                  {welcomeModalConfig.body}
                </p>

                <div className="mt-8 flex justify-start">
                  <Button
                    className="rounded-full bg-white text-black hover:bg-white/90"
                    onClick={() => setIsOpen(false)}
                  >
                    {welcomeModalConfig.dismissLabel}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
