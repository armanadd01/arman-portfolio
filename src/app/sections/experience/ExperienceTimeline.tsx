import Image from "next/image";

import { Briefcase, Code2, Server } from "lucide-react";

import { Reveal } from "@/app/components/motion/reveal";

const items = [
  {
    title: "Sr. Web Developer",
    org: "Cut Out Image, Inc.",
    range: "Oct 2021 - Present",
    icon: Server,
    bullets: [
      "Built and maintained production web applications using React and Node.js.",
      "Worked on WordPress theme and plugin development for client-facing platforms.",
      "Improved performance and SEO through frontend and database optimization.",
    ],
    chips: ["React", "Node.js", "MongoDB", "WordPress"],
    avatar: "/profile-placeholder.svg",
  },
  {
    title: "Web Developer",
    org: "Clipping World Bangladesh",
    range: "Mar 2021 - Oct 2021",
    icon: Code2,
    bullets: [
      "Developed responsive web interfaces with JavaScript and React.",
      "Collaborated with team members to deliver features on schedule.",
      "Integrated APIs and improved UI consistency across pages.",
    ],
    chips: ["JavaScript", "React", "Node.js", "MongoDB"],
    avatar: "/profile-placeholder.svg",
  },
  {
    title: "Web & SEO Development",
    org: "Shohag Logistics and Security Service LTD",
    range: "Jan 2020 - Feb 2021",
    icon: Briefcase,
    bullets: [
      "Worked on SEO and digital marketing initiatives for business growth.",
      "Developed WordPress sites and themes with a focus on speed and usability.",
      "Implemented on-page SEO improvements and tracked performance.",
    ],
    chips: ["WordPress", "SEO", "PHP", "MySQL"],
    avatar: "/profile-placeholder.svg",
  },
] as const;

export function ExperienceTimeline() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="relative mt-6">
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/0 via-primary/70 to-primary/0 md:block" />

        <div className="grid gap-16 lg:gap-28">
          {items.map((item, idx) => {
            const right = idx % 2 === 0;
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={0.05 * idx}>
                <div className="relative grid gap-8 md:grid-cols-[1fr_120px_1fr] md:items-start">
                  <div className={right ? "hidden md:block" : ""} />

                  <div className="relative hidden md:block">
                    <div className="absolute left-1/2 top-10 -translate-x-1/2">
                      <div className="grid h-12 w-12 place-items-center rounded-full bg-black/10 dark:bg-white/10  outline outline-1 outline-[rgba(76,215,246,0.22)] backdrop-blur">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </div>

                  <div
                    className={
                      right
                        ? "md:col-start-3 md:flex md:justify-start"
                        : "md:col-start-1 md:flex md:justify-end"
                    }
                  >
                    <div className="card-luminal w-full rounded-2xl bg-surface-low p-8 md:max-w-[520px]">
                      <div className="flex items-start justify-between gap-6">
                        <div className="flex items-start gap-4">
                          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-surface-variant">
                            <Image
                              src={item.avatar}
                              alt={item.org}
                              fill
                              sizes="40px"
                              className="object-cover"
                            />
                          </div>

                          <div className="min-w-0">
                            <p className="font-display text-lg font-semibold text-foreground">
                              {item.title}
                            </p>
                            <p className="mt-1 text-sm font-semibold text-secondary">
                              {item.org}
                            </p>
                          </div>
                        </div>

                        <p className="text-xs font-semibold text-primary/80">
                          {item.range}
                        </p>
                      </div>

                      <ul className="mt-7 space-y-3 text-sm leading-7 text-muted">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {item.chips.map((c) => (
                          <span
                            key={c}
                            className="rounded-full bg-black/10 dark:bg-white/10  px-3 py-1 text-[11px] font-semibold text-foreground/70 outline outline-1 outline-[rgba(255,255,255,0.06)]"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={!right ? "hidden md:block" : ""} />
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-16 flex justify-center">
            <div className="text-[11px] font-semibold tracking-widest text-foreground/45">
              THE BEGINNING
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
