import { Reveal } from "@/app/components/motion/reveal";
import { Card } from "@/app/components/ui/card";

const credentials = [
  {
    title: "Full stack MERN development (Advance)",
    meta: "Ostad.app • Apr 1, 2023 — Dec 30, 2023",
    desc:
      "Advance full stack web application development: MongoDB, Express.js, React.js, and Node.js.",
  },
  {
    title: "Full stack MERN development",
    meta: "Programming Hero • Jun 1, 2021 — Dec 31, 2021",
    desc: "MERN Stack development training and project-based learning.",
  },
] as const;

export function TestimonialsRow() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary/60" />
            <p className="text-label-md text-primary/70">TRUST</p>
          </div>
          <h2 className="font-display mt-6 text-4xl font-semibold tracking-[-0.02em] text-foreground">
            Training & Certifications
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {credentials.map((t) => (
            <Card
              key={t.title}
              className="bg-surface-low p-8"
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-sm">
                    ★
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm leading-7 text-foreground/75">{t.desc}</p>

              <div className="mt-8 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-surface-variant" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.title}</p>
                  <p className="mt-0.5 text-xs text-foreground/60">{t.meta}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
