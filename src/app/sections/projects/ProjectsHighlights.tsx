import { Layers, MonitorSmartphone, Network } from "lucide-react";

import { Reveal } from "@/app/components/motion/reveal";

const items = [
  {
    title: "Modern Stack",
    desc: "Built with React, Next.js, and high-performance backend systems.",
    icon: Layers,
  },
  {
    title: "Responsive UX",
    desc: "Flawless experiences across mobile, tablet, and ultra-wide screens.",
    icon: MonitorSmartphone,
  },
  {
    title: "Scalable Architecture",
    desc: "Modular, maintainable codebases designed for growth and velocity.",
    icon: Network,
  },
] as const;

export function ProjectsHighlights() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((i) => {
            const Icon = i.icon;
            return (
              <div
                key={i.title}
                className="card-luminal flex items-start gap-4 rounded-2xl bg-surface-low p-6"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-black/10 dark:bg-white/10  outline outline-1 outline-[rgba(255,255,255,0.06)]">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{i.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{i.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
