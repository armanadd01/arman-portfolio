import Link from "next/link";
import {
  Code2,
  Cloud,
  Cpu,
  Laptop,
  Paintbrush,
  Server,
  Shield,
  Wrench,
} from "lucide-react";

import { Reveal } from "@/app/components/motion/reveal";
import { Card } from "@/app/components/ui/card";

const items = [
  { title: "React & JavaScript", icon: Laptop },
  { title: "Node.js & REST APIs", icon: Server },
  { title: "MongoDB & MySQL", icon: Cloud },
  { title: "WordPress (Themes/Plugins)", icon: Cpu },
  { title: "Tailwind CSS", icon: Paintbrush },
  { title: "Git Version Control", icon: Wrench },
  { title: "PHP", icon: Shield },
  { title: "Performance & SEO", icon: Code2 },
] as const;

export function ArsenalGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary/60" />
            <p className="text-label-md text-primary/70">SKILLS</p>
          </div>
          <div>
            <h2 className="font-display mt-6 text-4xl font-semibold tracking-[-0.02em] text-foreground">
              My Technical Arsenal
            </h2>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <Card
                key={it.title}
                className="bg-surface-low p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-sm font-semibold text-foreground">
                      {it.title}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <Link href="/skills" className="text-sm font-medium text-foreground/70 hover:text-foreground">
            Explore All Technologies →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
