import Link from "next/link";
import { Code2, Globe, Rocket, Sparkles } from "lucide-react";

import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Reveal } from "@/app/components/motion/reveal";

const highlights = [
  {
    title: "Remote First",
    desc: "Expert in distributed teams and global collaboration.",
    icon: Globe,
  },
  {
    title: "UX Focus",
    desc: "Accessibility and intuitive design systems.",
    icon: Sparkles,
  },
  {
    title: "Clean Tech",
    desc: "Optimized for performance and eco-friendly code.",
    icon: Code2,
  },
  {
    title: "Fast Delivery",
    desc: "Agile methodologies for rapid, high-quality output.",
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
              I started my journey with a burning curiosity about how the web
              works. Fast forward eight years, and I&apos;ve helped startups scale to
              millions of users and Fortune 500 companies modernize their tech
              stacks.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-foreground/70">
              I don&apos;t just write code; I architect solutions that are scalable,
              maintainable, and beautiful. My philosophy is simple: <span className="font-semibold text-foreground">user
              experience is paramount.</span>
            </p>
            <div className="mt-6">
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="secondary" asChild>
                  <Link href="/about">Read Full Bio</Link>
                </Button>
                <Link
                  href="/resume"
                  className="text-sm font-medium text-foreground/70 hover:text-foreground"
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
