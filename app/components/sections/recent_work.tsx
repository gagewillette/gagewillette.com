"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import BloomBackground from "../widgets/bloom_background";
import { Github, ExternalLink } from "lucide-react";
import { useRef } from "react";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  links: { type: "github" | "live"; href: string }[];
};

const projects: Project[] = [
  {
    title: "InboxGhost",
    subtitle: "AI Gmail assistant",
    description:
      "Triages inboxes, summarizes threads, and drafts replies using Gmail OAuth, vector search, and LLMs.",
    image: "/inboxghost.jpg",
    links: [
      { type: "github", href: "https://github.com/gagewillette/InboxGhost" },
    ],
  },
  {
    title: "Indium",
    subtitle: "Business management software",
    description:
      "Full-stack dashboard for operations, automation, and analytics — built to actually ship and scale.",
    image: "/indium.png",
    links: [{ type: "github", href: "https://github.com/gagewillette/Indium" }],
  },
];

function ProjectRow({ p, flip }: { p: Project; flip?: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.2"],
  });

  const yImg = useTransform(scrollYProgress, [0, 1], [18, -18]);
  const yCard = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <div ref={ref} className="relative">
      <div
        className={`grid items-center gap-10 lg:grid-cols-12 ${flip ? "" : ""}`}
      >
        {/* Image */}
        <motion.div
          style={{ y: yImg }}
          className={`lg:col-span-7 ${flip ? "lg:order-2" : "lg:order-1"}`}
        >
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
          <div className="pointer-events-none absolute -inset-16 -z-10 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.22),transparent_60%)] blur-3xl" />
          <div className="pointer-events-none absolute -inset-16 -z-10 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_60%)] blur-3xl" />

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="
            relative overflow-hidden rounded-3xl
            border border-white/15
            bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))]
            backdrop-blur-2xl
            shadow-[0_24px_90px_rgba(0,0,0,0.55)]
            "
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.22),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.16),transparent_60%)]" />

            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative"
            >
              <Image
                src={p.image}
                alt={p.title}
                width={1400}
                height={900}
                className="h-[240px] w-full object-cover sm:h-[320px] lg:h-[360px]"
                priority={false}
              />
            </motion.div>

            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
          </motion.div>
        </motion.div>

        {/* Text Card */}
        <motion.div
          style={{ y: yCard }}
          className={`lg:col-span-5 ${flip ? "lg:order-1" : "lg:order-2"}`}
        >
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
          <div className="pointer-events-none absolute -inset-16 -z-10 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.22),transparent_60%)] blur-3xl" />
          <div className="pointer-events-none absolute -inset-16 -z-10 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_60%)] blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="
            relative rounded-3xl
            border border-white/15
            bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))]
            backdrop-blur-xl
            p-7 sm:p-8
            text-center sm:text-left
            shadow-[0_24px_90px_rgba(0,0,0,0.55)]
            "
          >
            <div className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_60%)] blur-3xl" />

            <div className="text-xs tracking-[0.28em] text-cyan-300/80">
              FEATURED PROJECT
            </div>

            <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
              {p.title}
            </h3>

            <div className="mt-2 text-sm sm:text-base text-white/60">
              {p.subtitle}
            </div>

            <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/70">
              {p.description}
            </p>

            <div className="mt-6 flex items-center justify-center gap-4 sm:justify-start">
              {p.links.map((l) => (
                <a
                  key={l.type}
                  href={l.href}
                  className="
                    inline-flex items-center gap-2
                    rounded-full border border-white/10 bg-white/5
                    px-4 py-2 text-xs text-white/75
                    hover:bg-white/10 hover:text-white transition
                  "
                >
                  {l.type === "github" ? (
                    <Github className="h-4 w-4" />
                  ) : (
                    <ExternalLink className="h-4 w-4" />
                  )}
                  {l.type === "github" ? "GitHub" : "Live"}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      className="relative py-24
        scroll-mt-32
    "
    >
      <BloomBackground />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="
              font-semibold tracking-tight
              text-4xl sm:text-5xl lg:text-6xl
              bg-[linear-gradient(90deg,#a855f7,#6366f1,#22d3ee,#a855f7)]
              bg-[length:300%_300%]
              bg-clip-text text-transparent
              drop-shadow-[0_0_14px_rgba(168,85,247,0.35)]
              animate-gradient
            "
          >
            Recent Work
          </motion.h2>

          <p className="mt-4 text-base sm:text-lg text-white/75 font-medium">
            A collection of projects I’ve worked on.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {projects.map((p, i) => (
            <ProjectRow key={p.title} p={p} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
