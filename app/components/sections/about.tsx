"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";
import { useMemo, useRef, useEffect } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiCplusplus,
  SiDocker,
} from "react-icons/si";

const icons = [
  { Icon: SiNextdotjs, label: "Next.js" },
  { Icon: SiReact, label: "React" },
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: SiTailwindcss, label: "Tailwind" },
  { Icon: SiSupabase, label: "Supabase" },
  { Icon: SiNodedotjs, label: "Node.js" },
  { Icon: SiPostgresql, label: "Postgres" },
  { Icon: SiPython, label: "Python" },
  { Icon: SiCplusplus, label: "C++" },
  { Icon: SiDocker, label: "Docker" },
];

function HexIcon({
  Icon,
  label,
  index,
}: {
  Icon: any;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 18 });
  const sy = useSpring(my, { stiffness: 220, damping: 18 });

  const rotate = useTransform(sx, [-18, 18], [-10, 10]);
  const lift = useTransform(sy, [-18, 18], [10, -10]);

  const floatDelay = (index % 5) * 0.35;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.7, y: 18 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay: 0.05 * index }}
      className="group relative"
      style={{ x: sx, y: sy, rotateY: rotate, rotateX: lift }}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        mx.set(dx * 0.08);
        my.set(dy * 0.08);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        }}
        className="
          relative grid place-items-center
          h-16 w-16 sm:h-18 sm:w-18
        "
      >
        <div
          className="
            absolute inset-0
            [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)]
            bg-white/6 border border-white/10 backdrop-blur-xl
            shadow-[0_0_30px_rgba(0,0,0,0.35)]
            transition
            group-hover:border-white/20
          "
        />

        <motion.div
          className="
            relative z-10 grid place-items-center
            text-white/85
          "
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 350, damping: 18 }}
        >
          <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
        </motion.div>

        <div
          className="
            pointer-events-none absolute -inset-6 opacity-0
            group-hover:opacity-100
            transition
            bg-[radial-gradient(circle,rgba(168,85,247,0.25),transparent_60%)]
            blur-2xl
          "
        />
      </motion.div>

      <div className="mt-2 text-center text-[11px] text-white/55 opacity-0 group-hover:opacity-100 transition">
        {label}
      </div>
    </motion.div>
  );
}

export default function About() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spx = useSpring(px, { stiffness: 120, damping: 20 });
  const spy = useSpring(py, { stiffness: 120, damping: 20 });

  const tiltX = useTransform(spy, [-120, 120], [8, -8]);
  const tiltY = useTransform(spx, [-120, 120], [-10, 10]);

  const ringRotate = useMotionValue(0);

  useEffect(() => {
    let raf: number;
    let speed = 0;

    const accel = animate(speed, 110, {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        speed = latest;
      },
    });

    const settle = accel.then(() =>
      animate(speed, 7, {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => {
          speed = latest;
        },
      }),
    );

    const tick = () => {
      ringRotate.set((ringRotate.get() + speed / 60) % 360);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      accel.stop();
      settle?.catch?.(() => {});
      cancelAnimationFrame(raf);
    };
  }, [ringRotate]);

  const positions = useMemo(() => {
    const r = 150;
    const center = { x: 0, y: 0 };
    const ring = icons.map((_, i) => {
      const a = (i / icons.length) * Math.PI * 2;
      return {
        x: center.x + Math.cos(a) * r,
        y: center.y + Math.sin(a) * (r * 0.72),
      };
    });
    return ring;
  }, []);

  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 scroll-mt-32"
    >
    <motion.h2
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6 }}
    className="
        text-center font-semibold tracking-tight
        text-4xl sm:text-5xl lg:text-6xl
        bg-[linear-gradient(90deg,#a855f7,#6366f1,#22d3ee,#a855f7)]
        bg-[length:300%_300%]
        bg-clip-text text-transparent
        drop-shadow-[0_0_14px_rgba(168,85,247,0.35)]
        animate-gradient
    "
    >
    About
    </motion.h2>


      <div className="mt-10 grid gap-12 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-white/70 text-base sm:text-lg leading-relaxed"
        >
          <p>
            I build full-stack products end-to-end — UI, backend, databases, and
            deployment. I like shipping real systems that people can actually
            use, and I’m always chasing clean UX with strong engineering
            underneath.
          </p>

          <p className="mt-5 text-white/60">
            Recently: SaaS dashboards, AI email workflows, Supabase-backed apps,
            and some C++ systems work when I want to suffer for fun.
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          onMouseMove={(e) => {
            const el = containerRef.current;
            if (!el) return;
            const r = el.getBoundingClientRect();
            px.set(e.clientX - (r.left + r.width / 2));
            py.set(e.clientY - (r.top + r.height / 2));
          }}
          onMouseLeave={() => {
            px.set(0);
            py.set(0);
          }}
          style={{
            rotateX: tiltX,
            rotateY: tiltY,
            transformStyle: "preserve-3d",
          }}
          className="
            relative mx-auto
            h-[360px] w-[360px] sm:h-[420px] sm:w-[420px]
            rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl
            shadow-[0_0_60px_rgba(168,85,247,0.10)]
            [perspective:900px]
          "
        >
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.18),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.14),transparent_55%)]" />

          <motion.div
            className="absolute inset-0"
            style={{ rotate: ringRotate, transformStyle: "preserve-3d" }}
          >
            {icons.map(({ Icon, label }, i) => (
              <motion.div
                key={label}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(-50%, -50%) translate(${positions[i].x}px, ${positions[i].y}px)`,
                }}
              >
                <motion.div
                  style={{ rotate: useTransform(ringRotate, (v) => -v) }}
                >
                  <HexIcon Icon={Icon} label={label} index={i} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="
                relative grid place-items-center
                h-20 w-20 sm:h-24 sm:w-24
                rounded-2xl border border-white/12 bg-white/6 backdrop-blur-xl
              "
            >
              <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.25),transparent_60%)] blur-2xl" />
              <div className="relative text-white/85 text-sm tracking-widest">
                STACK
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
