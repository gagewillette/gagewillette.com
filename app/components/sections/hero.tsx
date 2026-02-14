"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import DyanmicAge from "../widgets/dyamic_age";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        mx-auto max-w-6xl
        px-4 sm:px-6 lg:px-8
        pt-20 sm:pt-24 md:pt-28 lg:pt-32
        pb-16 sm:pb-20 md:pb-24
        scroll-mt-32
      "
    >
      <div
        className="
          grid items-center gap-10
          md:grid-cols-2
        "
      >
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            order-2 md:order-1
            text-center md:text-left
          "
        >
          <h1
            className="
    font-semibold tracking-tight text-white
    text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
  "
          >
            Hi, I’m Gage
          </h1>

          <p
            className="
    mt-4
    font-semibold
    text-xl sm:text-2xl lg:text-3xl
    bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400
    bg-clip-text text-transparent
    drop-shadow-[0_0_16px_rgba(168,85,247,0.4)]
  "
          >
            20 Year Old Software Developer.
          </p>

          <p
            className="
    mt-6
    mx-auto md:mx-0
    max-w-lg
    text-white/70 leading-relaxed
    text-base sm:text-lg lg:text-xl
  "
          >
            Computer Science student at FSU building SaaS tools, AI-powered
            workflows, and scalable full-stack applications.
          </p>

          <div
            className="
              mt-7 sm:mt-8
              flex flex-col sm:flex-row
              gap-3
              justify-center md:justify-start
            "
          >
            <Button className="rounded-full w-full sm:w-auto">Contact</Button>
            <Button
              variant="secondary"
              className="rounded-full bg-white/10 text-white hover:bg-white/15 w-full sm:w-auto"
            >
              View Work
            </Button>
          </div>
        </motion.div>

        {/* Right side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            relative
            order-1 md:order-2
          "
        >
          <div
            className="
              relative mx-auto overflow-hidden rounded-3xl
              border border-white/10 bg-white/5 backdrop-blur-xl
              w-full max-w-[260px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[420px] xl:max-w-[480px]
              aspect-square
            "
          >
            <Image
              src="/headshot_cleanup.webp"
              alt="Gage Willette"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle,rgba(168,85,247,0.35),transparent_60%)] blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
