import Link from "next/link";
import { Code2, Globe, Rocket, Sparkles } from "lucide-react";

import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Reveal } from "@/app/components/motion/reveal";

const highlights = [
  {
    title: "MERN + WordPress",
    desc: "React, Node.js, MongoDB, PHP, and custom WordPress themes/plugins.",
    icon: Globe,
  },
  {
    title: "User-Centric",
    desc: "Responsive UI, accessibility, and clean design systems.",
    icon: Sparkles,
  },
  {
    title: "Clean Code",
    desc: "Scalable architecture with maintainable, readable code.",
    icon: Code2,
  },
  {
    title: "Adaptable",
    desc: "Strong problem-solving, teamwork, QA mindset, and fast learning.",
    icon: Rocket,
  },
] as const;

export function AboutStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <Reveal>
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary/60" />
              <p className="text-label-md text-primary/70">BIOGRAPHY</p>
            </div>
            <h2 className="font-display mt-6 text-4xl font-semibold tracking-[-0.02em] text-foreground">
              A Little About Me
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-foreground/70">
              Experienced web developer with 6+ years in JavaScript, React,
              Node.js, PHP, and WordPress theme development. Skilled in NoSQL and
              MySQL databases and Tailwind CSS for responsive UIs.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-foreground/70">
              I&apos;m committed to clean code and robust architecture to keep
              projects scalable and reliable. I focus on quality assurance and a
              user-centric experience in every build.
            </p>
            <div className="mt-6">
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="secondary" asChild>
                  <Link href="/about">Read Full Bio</Link>
                </Button>
                <Link
                  href="/resume"
                  className="rounded-md text-sm font-semibold text-foreground/70 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 active:translate-y-px"
                >
                  Download Resume
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <Card
                  key={h.title}
                  className="relative overflow-hidden bg-surface-low p-6"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-70">
                    <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
                    <div className="absolute -right-16 -bottom-16 h-40 w-40 rounded-full bg-secondary/10 blur-2xl" />
                  </div>

                  <div className="relative">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-variant text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-5 font-display text-sm font-semibold text-foreground">
                      {h.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-foreground/65">
                      {h.desc}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
