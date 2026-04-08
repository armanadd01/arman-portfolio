import Link from "next/link";

import { Reveal } from "@/app/components/motion/reveal";

const chips = [
  "React",
  "Next.js",
  "TypeScript",
  "TailwindCSS",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "AWS",
  "WordPress",
] as const;

export function TechStackGlance() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <div className="card-luminal relative overflow-hidden rounded-2xl bg-surface-low px-6 py-7">
          <div className="pointer-events-none absolute inset-0 opacity-80">
            <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-secondary/10 blur-3xl" />
          </div>

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="text-primary">⚡</span>
                Tech-Stack at a Glance
              </p>
              <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
                I specialize in modern technologies that power the future of the
                web. Focused on performance, scalability, and clean
                architecture.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 md:max-w-[560px] md:justify-end">
              {chips.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-black/10 dark:bg-white/10  px-4 py-2 text-xs font-medium text-primary outline outline-1 outline-[rgba(76,215,246,0.22)] backdrop-blur"
                >
                  {t}
                </span>
              ))}
              <Link
                href="/skills"
                className="rounded-full bg-secondary/10 px-4 py-2 text-xs font-semibold text-secondary outline outline-1 outline-[rgba(204,49,232,0.30)]"
              >
                Full Skillset →
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
