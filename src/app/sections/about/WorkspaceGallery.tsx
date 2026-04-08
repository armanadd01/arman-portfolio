import Image from "next/image";

import { Reveal } from "@/app/components/motion/reveal";

const items = [
  { title: "Digital Photography", src: "/hobby-photo.svg" },
  { title: "Traveling", src: "/hobby-photo.svg" },
  { title: "Specialty Coffee", src: "/hobby-photo.svg" },
] as const;

export function WorkspaceGallery() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <Reveal>
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
              Beyond the Workspace
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted">
              When I&apos;m not coding, I&apos;m fueling my creativity through these.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="inline-flex items-center gap-2 rounded-full bg-black/10 dark:bg-white/10  px-4 py-2 text-xs font-medium text-secondary outline outline-1 outline-[rgba(204,49,232,0.25)] backdrop-blur">
            <span>♡</span>
            Curious Soul
          </div>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {items.map((g, idx) => (
          <Reveal key={g.title} delay={0.05 + idx * 0.05}>
            <div className="card-luminal group relative overflow-hidden rounded-2xl bg-surface-low">
              <div className="relative aspect-[4/3]">
                <Image
                  src={g.src}
                  alt={g.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-black/10 dark:bg-white/10  px-3 py-2 backdrop-blur">
                    <span className="text-primary">⌁</span>
                    <p className="text-sm font-semibold text-white">{g.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
