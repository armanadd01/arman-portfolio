import { Reveal } from "@/app/components/motion/reveal";
import { Card } from "@/app/components/ui/card";

const testimonials = [
  {
    quote:
      "Alex is a rare find. Not only is he an exceptional coder, but his understanding of business goals and user psychology sets him apart. He transformed our vision into a reality that exceeded expectations.",
    name: "Sarah Jenkins",
    role: "CEO at NovaBank",
  },
  {
    quote:
      "We hired Alex to lead our cloud migration, and it was the smoothest transition we've ever had. His technical depth is matched only by his clear communication and professionalism.",
    name: "Marcus Thorne",
    role: "CTO at EcoStream",
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
            What Clients Say
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="bg-surface-low p-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-sm">
                    ★
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm leading-7 text-foreground/75">“{t.quote}”</p>

              <div className="mt-8 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-surface-variant" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="mt-0.5 text-xs text-foreground/60">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
