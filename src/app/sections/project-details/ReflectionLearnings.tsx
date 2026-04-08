import Image from "next/image";

import { Reveal } from "@/app/components/motion/reveal";

export function ReflectionLearnings({
  image,
  items,
}: {
  image: string;
  items: string[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="card-luminal overflow-hidden rounded-2xl bg-surface-low">
            <div className="relative aspect-[16/10]">
              <Image
                src={image}
                alt="Reflection"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 560px, 100vw"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div>
            <h2 className="font-display text-3xl font-semibold text-foreground">
              Reflection & Learnings
            </h2>
            <p className="mt-3 text-sm text-muted">
              Every project is a stepping stone to better architecture.
            </p>
            <div className="mt-4 h-[3px] w-12 rounded-full bg-primary" />

            <div className="mt-10 space-y-7">
              {items.map((t, idx) => (
                <div key={t} className="grid grid-cols-[40px_1fr] gap-4">
                  <p className="font-display text-3xl font-semibold text-primary/15">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <p className="text-sm leading-7 text-muted">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
