import Image from "next/image";

import { Reveal } from "@/app/components/motion/reveal";

const logos = [
  { src: "/project-1.svg", alt: "Logo" },
  { src: "/project-2.svg", alt: "Logo" },
  { src: "/project-3.svg", alt: "Logo" },
  { src: "/project-1.svg", alt: "Logo" },
  { src: "/project-2.svg", alt: "Logo" },
  { src: "/project-3.svg", alt: "Logo" },
] as const;

const testimonials = [
  {
    quote:
      "The transformation of our platform was incredible. Not only is it beautiful, but our conversion rate increased by 40% within the first month of the new UI.",
    name: "Sarah Jenkins",
    title: "CEO of TechFlow",
    avatar: "/profile-placeholder.svg",
  },
  {
    quote:
      "Rarely do you find a developer who understands both the deep technical side and the nuances of high-end UI design. A true professional.",
    name: "David Chen",
    title: "Product Manager, Zenith",
    avatar: "/profile-placeholder.svg",
  },
  {
    quote:
      "Our MVP was delivered ahead of schedule and exceeded every technical requirement we had. The performance optimizations were a game changer.",
    name: "Marcus Thorne",
    title: "Founder, CloudScale",
    avatar: "/profile-placeholder.svg",
  },
] as const;

function Stars() {
  return (
    <div className="flex gap-1 text-primary">
      {Array.from({ length: 5 }).map((_, idx) => (
        <span key={idx} className="text-xs">
          ★
        </span>
      ))}
    </div>
  );
}

export function HireTrust() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <div className="text-center">
          <p className="text-[11px] font-semibold tracking-widest text-foreground/55">
            TRUSTED BY INNOVATIVE COMPANIES WORLDWIDE
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 opacity-70">
            {logos.map((l, idx) => (
              <div key={`${l.src}-${idx}`} className="relative h-8 w-24">
                <Image
                  src={l.src}
                  alt={l.alt}
                  fill
                  sizes="96px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <Reveal key={t.name} delay={0.05 + idx * 0.03}>
            <article className="card-luminal rounded-2xl bg-surface-low p-7">
              <Stars />
              <p className="mt-5 text-sm leading-7 text-muted">{t.quote}</p>

              <div className="mt-7 flex items-center gap-3">
                <div className="relative h-9 w-9 overflow-hidden rounded-full bg-surface-variant">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs font-semibold text-foreground/55">
                    {t.title}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
