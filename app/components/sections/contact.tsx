"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import BloomBackground from "../widgets/bloom_background";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { FiSend } from "react-icons/fi";

export default function Contact() {

    const handleContactSubmit = () => {
        console.log("Sending message")
    }

  return (
    <section id="contact" className="relative py-24 scroll-mt-32">
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
            Contact
          </motion.h2>

          <p className="mt-4 text-base sm:text-lg text-white/75 font-medium">
            Drop me a message — I usually respond fast.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 items-stretch">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div
              className="
                relative h-full rounded-3xl
                border border-white/18
                bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.05))]
                backdrop-blur-2xl
                p-8
                shadow-[0_24px_90px_rgba(0,0,0,0.55)]
              "
            >
              <div className="pointer-events-none absolute -inset-16 -z-10 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.22),transparent_60%)] blur-3xl" />
              <div className="pointer-events-none absolute -inset-16 -z-10 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_60%)] blur-3xl" />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />

              <div className="text-xs tracking-[0.28em] text-cyan-300/80">
                LET’S BUILD SOMETHING
              </div>

              <h3 className="mt-3 text-2xl sm:text-3xl font-semibold text-white">
                Reach out
              </h3>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/70">
                Whether it’s a project, an internship opportunity, or just a
                technical chat — send a message and I’ll get back to you.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-white/75">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/12 bg-white/5">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="text-sm sm:text-base">
                    <div className="text-white/60 text-xs tracking-widest">
                      EMAIL
                    </div>
                    <a
                      className="hover:text-white transition"
                      href="mailto:gage@gagewillette.com"
                    >
                      gage@gagewillette.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-white/75">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/12 bg-white/5">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="text-sm sm:text-base">
                    <div className="text-white/60 text-xs tracking-widest">
                      PHONE
                    </div>
                    <span className="text-white/80">Available on request</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-white/75">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/12 bg-white/5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="text-sm sm:text-base">
                    <div className="text-white/60 text-xs tracking-widest">
                      LOCATION
                    </div>
                    <span className="text-white/80">Tallahassee, FL</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-3">
                <a
                  href="https://github.com/gagewillette"
                  target="_blank" //open in new tab
                  className="
                    inline-flex items-center gap-2
                    rounded-full border border-white/12 bg-white/5
                    px-4 py-2 text-xs text-white/75
                    hover:bg-white/10 hover:text-white transition
                  "
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/gagewillette/"
                  target="_blank" // open in new tab
                  className="
                    inline-flex items-center gap-2
                    rounded-full border border-white/12 bg-white/5
                    px-4 py-2 text-xs text-white/75
                    hover:bg-white/10 hover:text-white transition
                  "
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="lg:col-span-7"
          >
            <div
              className="
                relative rounded-3xl
                border border-white/18
                bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.05))]
                backdrop-blur-2xl
                p-8
                shadow-[0_24px_90px_rgba(0,0,0,0.55)]
              "
            >
              <div className="pointer-events-none absolute -inset-16 -z-10 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.22),transparent_60%)] blur-3xl" />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />

              <div className="text-xs tracking-[0.28em] text-cyan-300/80">
                SEND A MESSAGE
              </div>

              <h3 className="mt-3 text-2xl sm:text-3xl font-semibold text-white">
                Let’s talk
              </h3>

              <form className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs tracking-widest text-white/60">
                      NAME
                    </label>
                    <Input
                      placeholder="Your name"
                      className="
                        border-white/12 bg-white/5 text-white placeholder:text-white/35
                        focus-visible:ring-2 focus-visible:ring-cyan-400/40
                      "
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs tracking-widest text-white/60">
                      EMAIL
                    </label>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      className="
                        border-white/12 bg-white/5 text-white placeholder:text-white/35
                        focus-visible:ring-2 focus-visible:ring-cyan-400/40
                      "
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs tracking-widest text-white/60">
                    SUBJECT
                  </label>
                  <Input
                    placeholder="What’s this about?"
                    className="
                      border-white/12 bg-white/5 text-white placeholder:text-white/35
                      focus-visible:ring-2 focus-visible:ring-cyan-400/40
                    "
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs tracking-widest text-white/60">
                    MESSAGE
                  </label>
                  <Textarea
                    placeholder="Write your message..."
                    className="
                      min-h-[160px]
                      border-white/12 bg-white/5 text-white placeholder:text-white/35
                      focus-visible:ring-2 focus-visible:ring-cyan-400/40
                    "
                  />
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <Button
                    type="button"
                    onClick={handleContactSubmit}
                    className="
                      rounded-full
                      bg-cyan-500/80 hover:bg-cyan-500
                      text-black
                      shadow-[0_0_30px_rgba(34,211,238,0.25)]
                    "
                  >
                    <FiSend />
                    Send message
                  </Button>

                  <span className="text-xs text-white/45">
                    No spam. No newsletters. Just a reply.
                  </span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
