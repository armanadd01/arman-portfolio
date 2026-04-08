import Image from "next/image";

import { Reveal } from "@/app/components/motion/reveal";

export function ResponsiveDesign({
  desktop,
  tablet,
  mobile,
}: {
  desktop: string;
  tablet: string;
  mobile: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <div>
          <h2 className="font-display text-3xl font-semibold text-foreground">
            Responsive Design
          </h2>
          <p className="mt-3 text-sm text-muted">
            Optimized for every interaction, from big screens to pocket devices.
          </p>
          <div className="mt-4 h-[3px] w-12 rounded-full bg-primary" />
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_280px_220px] lg:items-end">
        <Reveal delay={0.05}>
          <div>
            <div className="flex items-center gap-2 text-[10px] font-semibold tracking-widest text-foreground/60">
              <span className="h-3 w-3 rounded-[3px] bg-black/10 dark:bg-white/10  outline outline-1 outline-[rgba(255,255,255,0.06)]" />
              DESKTOP VIEW
            </div>
            <div className="card-luminal mt-4 overflow-hidden rounded-2xl bg-surface-low">
              <div className="relative aspect-[16/9]">
                <Image
                  src={desktop}
                  alt="Desktop view"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 700px, 100vw"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div>
            <div className="flex items-center gap-2 text-[10px] font-semibold tracking-widest text-foreground/60">
              <span className="h-3 w-3 rounded-[3px] bg-black/10 dark:bg-white/10  outline outline-1 outline-[rgba(255,255,255,0.06)]" />
              TABLET VIEW
            </div>
            <div className="card-luminal mt-4 overflow-hidden rounded-2xl bg-surface-low">
              <div className="relative aspect-[4/5]">
                <Image
                  src={tablet}
                  alt="Tablet view"
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.11}>
          <div>
            <div className="flex items-center gap-2 text-[10px] font-semibold tracking-widest text-foreground/60">
              <span className="h-3 w-3 rounded-[3px] bg-black/10 dark:bg-white/10  outline outline-1 outline-[rgba(255,255,255,0.06)]" />
              MOBILE VIEW
            </div>
            <div className="card-luminal mt-4 overflow-hidden rounded-2xl bg-surface-low">
              <div className="relative aspect-[9/16]">
                <Image
                  src={mobile}
                  alt="Mobile view"
                  fill
                  className="object-cover"
                  sizes="220px"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
