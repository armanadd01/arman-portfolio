import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/app/components/motion/reveal";
import { Card } from "@/app/components/ui/card";

const caseStudies = [
  {
    title: "NovaBank App",
    tags: ["React Native", "FinTech", "AWS"],
    img: "/project-1.svg",
    href: "/projects",
  },
  {
    title: "Lumina Dash",
    tags: ["Next.js", "D3.js", "PostgreSQL"],
    img: "/project-2.svg",
    href: "/projects",
  },
  {
    title: "EcoStream Commerce",
    tags: ["TypeScript", "Shopify", "Tailwind"],
    img: "/project-3.svg",
    href: "/projects",
  },
] as const;

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
              Featured Case Studies
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden h-10 items-center justify-center rounded-full bg-surface-low px-5 text-sm font-medium text-foreground/80 hover:text-foreground md:inline-flex"
          >
            View All Projects
          </Link>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {caseStudies.map((c) => (
            <Link key={c.title} href={c.href} className="group">
              <Card className="bg-surface-low p-0 overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/0" />
                  <div className="absolute inset-x-0 top-0 p-5">
                    <div className="flex flex-wrap gap-2">
                      {c.tags.map((t) => (
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
            className="h-10 inline-flex items-center justify-center rounded-full bg-surface-low px-5 text-sm font-medium text-foreground/80 hover:text-foreground"
          >
            View All Projects
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
