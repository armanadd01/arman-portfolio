import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/app/components/motion/reveal";

export function JourneySection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative">
            <div className="card-luminal overflow-hidden rounded-3xl bg-surface-low">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/about-journey.svg"
                  alt="My journey"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="absolute -bottom-6 left-6 rounded-2xl bg-surface-low px-6 py-4">
              <p className="font-display text-2xl font-semibold text-primary">6+</p>
              <p className="mt-1 text-xs text-subtle">
                Years of Crafting
                <br />
                Digital Excellence
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
              My Journey
            </h2>
            <div className="mt-6 space-y-5 text-sm leading-7 text-muted">
              <p>
                My journey started with PHP and WordPress development and grew
                into building modern web applications with React, Node.js, and
                MongoDB. Over the years, I&apos;ve focused on shipping responsive,
                maintainable, and high-performance experiences.
              </p>
              <p>
                Today, I work as a Senior Web Developer, collaborating with
                teams to deliver production-ready solutions for clients.
                I believe good code is not only functional—it should be clean,
                scalable, and easy to maintain.
              </p>
              <p>
                When I&apos;m not building products, I&apos;m learning new tools,
                improving workflows, and staying current with modern web
                development trends.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/resume"
                className="signature-gradient inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold text-white dark:text-black"
              >
                Download My CV
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-11 items-center justify-center rounded-full bg-surface-low px-6 text-sm font-semibold text-foreground/85 outline outline-1 outline-[var(--card-stroke)]"
              >
                View Projects
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
