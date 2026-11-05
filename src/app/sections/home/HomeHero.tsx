"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Spotlight } from "@/app/components/aceternity/spotlight";
import {
  HeroHighlight,
  Highlight,
} from "@/app/components/aceternity/hero-highlight";
import { LayoutTextFlip } from "@/app/components/aceternity/layout-text-flip";

export function HomeHero() {
  const [profileImageSrc, setProfileImageSrc] = useState(
    "/Arman-Habib-Nahid-Portfolio.webp",
  );

  return (
    <section className="relative overflow-hidden h-[100vh] sm:h-[775px] md:h-[800px] lg:h-[900px]">
      <Spotlight />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-0 top-20 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(29,33,202,0.25),rgba(0,0,0,0))] blur-3xl" />
        <div className="absolute -right-0 bottom-20 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(204,49,232,0.22),rgba(0,0,0,0))] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-500/15 px-4 py-2 text-xs font-medium text-primary card-luminal shadow-sm backdrop-blur dark:bg-slate-500/10 dark:text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />Available for New Projects
            </div>

            <h1 className="mt-8 flex flex-col items-start gap-3 text-left">
              <span className="text-4xl font-bold tracking-tight md:text-3xl">
                Hi, I&apos;m <Highlight className="text-foreground">Arman Nahid</Highlight>
              </span>

              <div className="inline-flex flex-wrap items-center gap-3 text-left text-lg font-semibold tracking-tight text-foreground/90 md:text-lg">
                <LayoutTextFlip
                  text="I build"
                  words={[
                    "Web Experiences",
                    "High-Performance Apps",
                    "Creative Interfaces",
                    "Modern Digital Products",
                  ]}
                />
              </div>
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
            <div className="relative mx-auto max-w-md ">
              <div className="rounded-2xl bg-surface-low p-5 shadow-[0_30px_80px_-40px_rgba(255,255,255,0.6)] dark:shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] backdrop-blur-[2px]">
                <div className="relative overflow-hidden rounded-2xl bg-surface-variant/30 p-6">
                  <div className="mx-auto flex h-[360px] w-full items-end justify-center">
                    <div className="relative h-[320px] w-[320px] overflow-hidden rounded-full bg-[rgb(234,251,234)]">
                      <Image
                        src={profileImageSrc}
                        alt="Arman Nahid profile"
                        width={320}
                        height={320}
                        className="h-full w-full object-cover"
                        priority
                        unoptimized
                        onError={() => setProfileImageSrc("/profile-placeholder.svg")}
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 overflow-hidden rounded-2xl bg-black/10 dark:bg-white/10  backdrop-blur dark:text-white text-black">
                    {[
                      { k: "Experience", v: "6+ Years" },
                      { k: "Projects", v: "4" },
                      { k: "Focus", v: "MERN + WP" },
                    ].map((s) => (
                      <div key={s.k} className="px-4 py-3">
                        <p className="text-[10px] uppercase tracking-[0.14em] text-black/60 dark:text-white/60">
                          {s.k}
                        </p>
                        <p className="mt-1 font-display text-sm text-black dark:text-white">
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
