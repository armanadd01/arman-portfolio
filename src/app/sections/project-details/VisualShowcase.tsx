"use client";

import Image from "next/image";

import { Reveal } from "@/app/components/motion/reveal";

export function VisualShowcase({
  images,
}: {
  images: { src: string; alt: string; caption: string }[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <div>
          <h2 className="font-display text-3xl font-semibold text-foreground">
            Visual Showcase
          </h2>
          <p className="mt-3 text-sm text-muted">
            Exploring the high-fidelity interface through key functional views.
          </p>
          <div className="mt-4 h-[3px] w-12 rounded-full bg-primary" />
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="card-luminal mt-10 overflow-hidden rounded-2xl bg-surface-low">
          <div className="relative aspect-[16/9]">
            <Image
              src={images[0]?.src ?? "/project-1.svg"}
              alt={images[0]?.alt ?? "Showcase"}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 900px, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/35" />
          </div>
          <div className="flex items-center justify-between gap-6 px-6 py-4">
            <p className="text-xs text-foreground/65">
              {images[0]?.caption ?? "Showing 1 of 3"}
            </p>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-6 rounded-full bg-primary" />
              <span className="h-1.5 w-3 rounded-full bg-surface-variant" />
              <span className="h-1.5 w-3 rounded-full bg-surface-variant" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
