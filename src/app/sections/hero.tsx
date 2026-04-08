import NextLink from "next/link";
import { ArrowRight, Link } from "lucide-react";

import { BackgroundBeams } from "@/app/components/aceternity/background-beams";
import { Spotlight } from "@/app/components/aceternity/spotlight";
import { Reveal } from "@/app/components/motion/reveal";
import { Button } from "@/app/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <Spotlight />
      <BackgroundBeams />

      <div className="mx-auto max-w-6xl px-4 py-24 sm:py-28">
        <Reveal>
          <p className="text-label-md text-[color:rgba(229,226,225,0.65)]">
            Product-focused Frontend Engineer
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="font-display text-display-lg mt-4 max-w-3xl text-balance text-[var(--foreground)]">
            I build fast, accessible, and beautiful web experiences.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-body-lg mt-6 max-w-2xl text-pretty text-[color:rgba(229,226,225,0.72)]">
            Next.js App Router, TypeScript, Tailwind CSS, Radix UI primitives, and
            Framer Motion—shipped with performance, semantics, and polished UX.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild>
              <NextLink href="/projects" className="inline-flex items-center gap-2">
                View projects <ArrowRight className="h-4 w-4" />
              </NextLink>
            </Button>
            <Button variant="secondary" asChild>
              <NextLink href="/hire">Hire me</NextLink>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex items-center gap-4 text-sm">
            <a
              className="inline-flex items-center gap-2 text-[color:rgba(229,226,225,0.72)] hover:text-[var(--foreground)]"
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              <Link className="h-4 w-4" /> GitHub
            </a>
            <a
              className="inline-flex items-center gap-2 text-[color:rgba(229,226,225,0.72)] hover:text-[var(--foreground)]"
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <Link className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
