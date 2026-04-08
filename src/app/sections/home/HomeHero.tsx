"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Spotlight } from "@/app/components/aceternity/spotlight";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <Spotlight />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-56 top-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(29,33,202,0.25),rgba(0,0,0,0))] blur-3xl" />
        <div className="absolute -right-56 bottom-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(204,49,232,0.22),rgba(0,0,0,0))] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Available for New Projects
            </div>

            <h1 className="font-display mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-foreground sm:text-7xl">
              Hi, I&apos;m <span className="text-secondary">Arman Nahid</span>
              <br />
              Web Developer.
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-muted">
              I&apos;m Md Arman Habib Nahid — a web developer with 6+ years of
              experience building scalable, high-performance applications with
              React, Node.js, and WordPress.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/hire"
                className="signature-gradient inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold text-white dark:text-black"
              >
                Hire Me Now
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-11 items-center justify-center rounded-full bg-surface-low px-6 text-sm font-semibold text-foreground/85 outline outline-1 outline-[var(--card-stroke)]"
              >
                View Projects
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          >
            <div className="relative mx-auto max-w-md">
              <div className="rounded-2xl bg-surface-low p-5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)]">
                <div className="relative overflow-hidden rounded-2xl bg-surface-variant/30 p-6">
                  <div className="mx-auto flex h-[360px] w-full items-end justify-center">
                    <div className="relative h-[320px] w-[320px] overflow-hidden rounded-full bg-[rgb(234,251,234)]">
                      <Image
                        src="/profile-placeholder.svg"
                        alt="Profile"
                        fill
                        className="object-cover"
                        sizes="320px"
                        priority
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 overflow-hidden rounded-2xl bg-black/10 dark:bg-white/10  backdrop-blur">
                    {[
                      { k: "Experience", v: "6+ Years" },
                      { k: "Projects", v: "50+" },
                      { k: "Focus", v: "MERN + WP" },
                    ].map((s) => (
                      <div key={s.k} className="px-4 py-3">
                        <p className="text-[10px] uppercase tracking-[0.14em] text-white/60">
                          {s.k}
                        </p>
                        <p className="mt-1 font-display text-sm text-white">
                          {s.v}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
