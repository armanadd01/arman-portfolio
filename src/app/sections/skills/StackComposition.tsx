import { Reveal } from "@/app/components/motion/reveal";

export function StackComposition() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <div className="card-luminal relative overflow-hidden rounded-2xl bg-surface-low px-8 py-7">
          <div className="pointer-events-none absolute inset-0 opacity-80">
            <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-secondary/10 blur-3xl" />
          </div>

          <div className="relative grid gap-8 lg:grid-cols-[280px_1fr_220px] lg:items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest text-foreground/70">
                STACK COMPOSITION
              </p>
              <p className="mt-4 text-sm text-muted">
                Distribution of domain expertise across my professional career.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between text-[11px] font-semibold text-foreground/70">
                <p>
                  <span className="text-primary">Frontend (45%)</span>
                  <span className="mx-2 text-foreground/25">•</span>
                  <span className="text-secondary">Backend (35%)</span>
                  <span className="mx-2 text-foreground/25">•</span>
                  <span className="text-accent">DevOps (20%)</span>
                </p>
              </div>

              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10  outline outline-1 outline-[rgba(255,255,255,0.06)]">
                <div className="flex h-full w-full">
                  <div className="h-full" style={{ width: "45%", background: "rgb(var(--primary))" }} />
                  <div className="h-full" style={{ width: "35%", background: "rgb(var(--secondary))" }} />
                  <div className="h-full" style={{ width: "20%", background: "rgb(var(--accent))" }} />
                </div>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                <div>
                  <p className="text-[10px] font-semibold tracking-widest text-foreground/60">
                    TOP SKILL
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    React & Node.js
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-widest text-foreground/60">
                    CURRENT FOCUS
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    Cloud Architecture
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-widest text-foreground/60">
                    AVG. EXPERIENCE
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    3.8 Years
                  </p>
                </div>
              </div>
            </div>

            <div className="text-left lg:text-right">
              <p className="text-xs font-semibold text-foreground/70">
                18 Technologies Tracked
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
