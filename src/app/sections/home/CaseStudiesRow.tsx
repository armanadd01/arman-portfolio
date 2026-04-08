import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/app/components/motion/reveal";
import { Card } from "@/app/components/ui/card";
import { projects } from "@/app/lib/projects";

const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

export function CaseStudiesRow() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary/60" />
              <p className="text-label-md text-primary/70">PORTFOLIO</p>
            </div>
            <h2 className="font-display mt-6 text-4xl font-semibold tracking-[-0.02em] text-foreground">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden h-10 items-center justify-center rounded-full bg-surface-low px-5 text-sm font-semibold text-foreground/80 transition-all hover:bg-surface-high hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 active:translate-y-px md:inline-flex"
          >
            View All Projects
          </Link>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {featuredProjects.map((c) => (
            <Link
              key={c.title}
              href={`/projects/${c.slug}`}
              className="group rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 active:translate-y-px"
            >
              <Card className="overflow-hidden bg-surface-low p-0">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={c.cover ?? "/project-1.svg"}
                    alt={c.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/0" />
                  <div className="absolute inset-x-0 top-0 p-5">
                    <div className="flex flex-wrap gap-2">
                      {c.tags.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-display text-lg text-white">{c.title}</p>
                    <p className="mt-3 text-sm font-medium text-primary">
                      View Project →
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <Link
            href="/projects"
            className="inline-flex h-10 items-center justify-center rounded-full bg-surface-low px-5 text-sm font-semibold text-foreground/80 transition-all hover:bg-surface-high hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 active:translate-y-px"
          >
            View All Projects
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
