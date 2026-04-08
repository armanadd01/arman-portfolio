import Link from "next/link";

import { Reveal } from "@/app/components/motion/reveal";

const plans = [
  {
    title: "MVP Starter",
    price: "$2,500",
    unit: "/project",
    desc: "Perfect for startups needing a fast market entry with a solid foundation.",
    bullets: [
      "Single Page App",
      "Core Business Logic",
      "Basic Animations",
      "3 Rounds of Revisions",
      "Deployment Support",
    ],
    cta: { label: "Start MVP", href: "#quick-inquiry" },
    featured: false,
  },
  {
    title: "Pro Experience",
    price: "$5,000",
    unit: "/project",
    desc: "Comprehensive development for established brands looking for high-end results.",
    bullets: [
      "Multi-page Platform",
      "Advanced Integrations",
      "Custom UI Components",
      "SEO & Performance Suite",
      "6 Months Support",
    ],
    cta: { label: "Go Pro", href: "#quick-inquiry" },
    featured: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    unit: "",
    desc: "Tailored solutions for complex systems requiring top-tier scale and security.",
    bullets: [
      "Full Product Lifecycle",
      "Dedicated Server Setup",
      "Priority 24/7 Support",
      "Internal Tooling",
      "Ongoing Maintenance",
    ],
    cta: { label: "Contact for Quote", href: "/contact" },
    featured: false,
  },
] as const;

export function HirePricing() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <div className="text-center">
          <div className="inline-flex items-center rounded-full bg-black/10 px-4 py-2 text-[11px] font-semibold tracking-widest text-primary/80 outline outline-1 outline-[rgba(255,255,255,0.06)] backdrop-blur dark:bg-white/10">
            Investment Packages
          </div>
          <h2 className="font-display mt-6 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
            Transparent Pricing For Every Need
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted">
            Choose the engagement model that fits your current stage. All tiers
            include professional documentation and deployment.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {plans.map((p, idx) => (
          <Reveal key={p.title} delay={0.05 + idx * 0.03}>
            <article
              className={`card-luminal relative rounded-2xl bg-surface-low p-8 ${
                p.featured ? "outline outline-2 outline-[rgba(76,215,246,0.22)]" : ""
              }`}
            >
              {p.featured ? (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary px-4 py-1 text-[10px] font-semibold tracking-widest text-white dark:text-black">
                  MOST POPULAR
                </div>
              ) : null}

              <p className="text-[11px] font-semibold tracking-widest text-foreground/60">
                {p.title.toUpperCase()}
              </p>
              <div className="mt-4 flex items-end gap-2">
                <p className="font-display text-4xl font-semibold text-foreground">
                  {p.price}
                </p>
                {p.unit ? (
                  <p className="pb-1 text-xs font-semibold text-foreground/60">
                    {p.unit}
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">{p.desc}</p>

              <ul className="mt-7 space-y-3 text-sm text-muted">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link
                  href={p.cta.href}
                  className={`inline-flex h-11 w-full items-center justify-center rounded-2xl px-6 text-sm font-semibold ${
                    p.featured
                      ? "bg-primary text-white shadow-[0_18px_50px_-28px_rgba(0,163,255,0.4)] dark:text-black"
                      : "bg-black/10 text-foreground/85 outline outline-1 outline-[rgba(255,255,255,0.08)] backdrop-blur dark:bg-white/10"
                  }`}
                >
                  {p.cta.label}
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
