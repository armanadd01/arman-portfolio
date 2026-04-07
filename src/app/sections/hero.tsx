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
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Product-focused Frontend Engineer
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-6xl">
            I build fast, accessible, and beautiful web experiences.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Next.js App Router, TypeScript, Tailwind CSS, Radix UI primitives, and
            Framer Motion—shipped with performance, semantics, and polished UX.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild>
              <a href="#projects" className="inline-flex items-center gap-2">
                View projects <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="#contact">Hire me</a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex items-center gap-4 text-sm">
            <a
              className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              <Link className="h-4 w-4" /> GitHub
            </a>
            <a
              className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
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
