import { Briefcase, CalendarDays, User } from "lucide-react";

import { Reveal } from "@/app/components/motion/reveal";

function MetaItem({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-[10px] font-semibold tracking-widest text-foreground/60">
        <Icon className="h-3.5 w-3.5 text-primary" />
        {label}
      </div>
      <p className="mt-3 text-sm font-semibold text-foreground">{value}</p>
    </div>
  );
}

export function ProjectOverview({
  role,
  timeframe,
  client,
  overview,
  stackHighlights,
}: {
  role: string;
  timeframe: string;
  client: string;
  overview: string;
  stackHighlights: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <Reveal>
          <div className="card-luminal rounded-2xl bg-surface-low p-8">
            <div className="grid gap-8 md:grid-cols-3">
              <MetaItem label="MY ROLE" value={role} icon={Briefcase} />
              <MetaItem label="TIMEFRAME" value={timeframe} icon={CalendarDays} />
              <MetaItem label="CLIENT" value={client} icon={User} />
            </div>

            <div className="mt-10">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Project Overview
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">{overview}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <aside className="card-luminal rounded-2xl bg-surface-low p-8">
            <h3 className="font-display text-lg font-semibold text-foreground">
              Stack Highlights
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <p className="text-[11px] font-semibold tracking-widest text-foreground/60">
                  FRONTEND
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {stackHighlights.frontend.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-black/10 dark:bg-white/10  px-3 py-1 text-[11px] font-semibold text-foreground/75 outline outline-1 outline-[rgba(255,255,255,0.06)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-widest text-foreground/60">
                  BACKEND
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {stackHighlights.backend.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-black/10 dark:bg-white/10  px-3 py-1 text-[11px] font-semibold text-foreground/75 outline outline-1 outline-[rgba(255,255,255,0.06)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-widest text-foreground/60">
                  TOOLS
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {stackHighlights.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-black/10 dark:bg-white/10  px-3 py-1 text-[11px] font-semibold text-foreground/75 outline outline-1 outline-[rgba(255,255,255,0.06)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
