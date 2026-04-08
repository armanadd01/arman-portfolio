import { BarChart3, Layers, Zap } from "lucide-react";

import { Reveal } from "@/app/components/motion/reveal";

const services = [
  {
    title: "UI/UX Architecture",
    desc:
      "Designing sleek, user-centric interfaces with a focus on neo-glassmorphism and modern dark aesthetics.",
    bullets: ["Design Systems", "Prototyping", "User Research", "Accessibility Audit"],
    icon: Layers,
  },
  {
    title: "Full-Stack Development",
    desc:
      "Building high-performance web applications using the latest tech stack like React, Next.js, and Node.js.",
    bullets: ["Scalable Architecture", "API Integration", "Database Design", "Real-time Features"],
    icon: BarChart3,
  },
  {
    title: "Performance Optimization",
    desc:
      "Turning sluggish websites into lightning-fast experiences with advanced caching and code splitting.",
    bullets: ["Lighthouse Scoring", "Core Web Vitals", "SEO Optimization", "Load Testing"],
    icon: Zap,
  },
] as const;

export function HireServices() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
            Services Specialized For Your Growth
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted">
            I don&apos;t just write code; I build digital assets that drive
            engagement, performance, and revenue for your business.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map((s, idx) => {
          const Icon = s.icon;

          return (
            <Reveal key={s.title} delay={0.05 + idx * 0.03}>
              <article className="card-luminal rounded-2xl bg-surface-low p-8">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-black/10 outline outline-1 outline-[rgba(255,255,255,0.06)] dark:bg-white/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                <h3 className="font-display mt-6 text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">{s.desc}</p>

                <ul className="mt-6 space-y-3 text-sm text-muted">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
