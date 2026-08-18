"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, CalendarDays } from "lucide-react";

type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  current?: boolean;
  description: string;
  highlights: string[];
};

const roles: Role[] = [
  {
    company: "Walmart Global Tech",
    title: "Software Engineering Intern",
    period: "May – August 2026",
    location: "Bentonville, AR",
    description:
      "Spent the summer inside one of the largest engineering organizations in the world, taking a system from early data exploration all the way to a production deployment that runs in the Walmart ecosystem today.",
    highlights: [
      "Built an ML and rule-engine system that generates staffing requisition recommendations for store hiring managers, running over extremely large datasets in BigQuery to reduce the cost of hourly associate turnover. A single hourly replacement can run up to $10K.",
      "Used Code Puppy, Walmart's internal AI tooling, to dramatically accelerate my ramp-up and day-to-day workflow, experimenting with multi-model prompting and fanning out specialized agents to tackle large tasks in parallel.",
      "Worked with principal engineers, senior directors, and project managers through design and review to push the project into production, where it's now in use across the Walmart ecosystem.",
      "Built QOL tools specialized to my team to improve daily work. One of my chrome extension tools adopted by ~10 engineers."
    ],
  },
];

function RoleCard({ role, index }: { role: Role; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.05 * index }}
      className="relative pl-10 sm:pl-14"
    >
      {/* Timeline line */}
      <div className="pointer-events-none absolute left-[10px] sm:left-[14px] top-2 bottom-0 w-px bg-gradient-to-b from-white/25 to-transparent" />

      {/* Timeline marker */}
      <div className="absolute left-0 sm:left-[3px] top-1 grid h-5 w-5 place-items-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-purple-400/40 blur-[6px]" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 shadow-[0_0_16px_rgba(168,85,247,0.7)]" />
      </div>

      <div
        className="
          relative overflow-hidden rounded-3xl
          border border-white/15
          bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))]
          backdrop-blur-xl
          p-6 sm:p-8
          shadow-[0_24px_90px_rgba(0,0,0,0.45)]
        "
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.16),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_90%,rgba(59,130,246,0.14),transparent_55%)]" />

        <div className="relative">
          <div className="flex flex-wrap items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/12 bg-white/6 text-white/85">
              <Briefcase className="h-5 w-5" />
            </div>

            <div className="min-w-0">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {role.title}
              </h3>
              <div className="text-sm sm:text-base font-medium bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                {role.company}
              </div>
            </div>

            {role.current ? (
              <span className="ml-auto inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium tracking-wide text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Current
              </span>
            ) : null}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-white/55">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              {role.period}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {role.location}
            </span>
          </div>

          <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/70">
            {role.description}
          </p>

          <ul className="mt-5 space-y-2.5">
            {role.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-3 text-sm sm:text-base text-white/70"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 scroll-mt-32"
    >
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
          Experience
        </motion.h2>

        <p className="mt-4 text-base sm:text-lg text-white/75 font-medium">
          Where I&apos;ve been putting the work in.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-3xl space-y-10">
        {roles.map((role, i) => (
          <RoleCard key={role.company} role={role} index={i} />
        ))}
      </div>
    </section>
  );
}
