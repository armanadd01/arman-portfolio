import { Reveal } from "@/app/components/motion/reveal";

const skills = [
  "React",
  "Node.js",
  "MongoDB",
  "WordPress",
  "Tailwind CSS",
  "PHP",
] as const;

const credentials = [
  {
    title: "Advance MERN full stack developer",
    meta: "Ostad app • Dhaka • 2023",
    desc:
      "Advance Full stack web application development: Mongo, ExpressJs, ReactJs, Node.js.",
  },
  {
    title: "MERN Stack development",
    meta: "Programing hero • Dhaka • 2021",
    desc: "MERN Stack training and hands-on practice.",
  },
  {
    title: "Advanced Web Development",
    meta: "Institute of Coders Core • Dhaka • 2016",
    desc: "HTML5, CSS3, Bootstrap, JQuery, PHP, WordPress.",
  },
] as const;

export function HireTrust() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <div className="text-center">
          <p className="text-[11px] font-semibold tracking-widest text-foreground/55">
            CORE TECHNOLOGIES
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full bg-black/10 px-4 py-2 text-[11px] font-semibold tracking-widest text-foreground/70 outline outline-1 outline-[rgba(255,255,255,0.08)] backdrop-blur dark:bg-white/10"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {credentials.map((t, idx) => (
          <Reveal key={t.title} delay={0.05 + idx * 0.03}>
            <article className="card-luminal rounded-2xl bg-surface-low p-7">
              <p className="text-sm font-semibold text-foreground">{t.title}</p>
              <p className="mt-2 text-xs font-semibold text-foreground/55">{t.meta}</p>
              <p className="mt-5 text-sm leading-7 text-muted">{t.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
