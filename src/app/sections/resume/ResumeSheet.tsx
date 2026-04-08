import Image from "next/image";

import {
  Briefcase,
  GraduationCap,
  Link as LinkIcon,
  Link2,
  Mail,
  MapPin,
  GitBranch,
  Globe,
  Blocks,
} from "lucide-react";

import { Reveal } from "@/app/components/motion/reveal";

function SidebarRow({
  icon: Icon,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 text-xs text-foreground/75">
      <span className="grid h-7 w-7 place-items-center rounded-xl bg-black/10 outline outline-1 outline-[rgba(255,255,255,0.06)] dark:bg-white/10">
        <Icon className="h-3.5 w-3.5 text-primary" />
      </span>
      <span className="truncate">{text}</span>
    </div>
  );
}

function Chip({ text }: { text: string }) {
  return (
    <span className="rounded-full bg-black/10 px-3 py-1 text-[11px] font-semibold text-foreground/70 outline outline-1 outline-[rgba(255,255,255,0.06)] dark:bg-white/10">
      {text}
    </span>
  );
}

function SectionTitle({
  icon: Icon,
  title,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-black/10 outline outline-1 outline-[rgba(255,255,255,0.06)] dark:bg-white/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h2 className="font-display text-lg font-semibold text-foreground">
        {title}
      </h2>
    </div>
  );
}

const work = [
  {
    role: "Sr. Web Developer",
    company: "Cut Out Image, Inc.",
    range: "Oct 2021 - Present",
    summary:
      "Working on React and Node.js applications alongside WordPress themes/plugins. Focused on performance, SEO, and maintainable architecture.",
    left: ["React + Node.js delivery", "WordPress themes & plugins"],
    right: ["Performance/SEO improvements"],
  },
  {
    role: "Web Developer",
    company: "Clipping World Bangladesh",
    range: "Mar 2021 - Oct 2021",
    summary:
      "Built responsive web interfaces with JavaScript and React and collaborated with teams to deliver features on schedule.",
    left: ["Responsive UI development", "API integration"],
    right: ["Team collaboration"],
  },
  {
    role: "Web & SEO Development",
    company: "Shohag Logistics and Security Service LTD",
    range: "Jan 2020 - Feb 2021",
    summary:
      "Worked on SEO and digital marketing, and developed WordPress sites/themes with a focus on speed and usability.",
    left: ["WordPress development", "On-page SEO"],
    right: ["Performance improvements"],
  },
] as const;

export function ResumeSheet() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20">
      <Reveal>
        <div className="card-luminal overflow-hidden rounded-3xl bg-surface-low">
          <div className="grid lg:grid-cols-[320px_1fr]">
            <aside className="border-b border-white/5 bg-black/10 p-10 dark:bg-white/5 lg:border-b-0 lg:border-r">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-24 w-24 overflow-hidden rounded-full bg-surface-variant outline outline-1 outline-[rgba(255,255,255,0.10)]">
                  <Image
                    src="/profile-placeholder.svg"
                    alt="Profile"
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>

                <p className="font-display mt-6 text-xl font-semibold text-foreground">
                  Md Arman Habib Nahid
                </p>
                <p className="mt-2 text-[11px] font-semibold tracking-widest text-primary/80">
                  SR. WEB DEVELOPER
                </p>
              </div>

              <div className="mt-10">
                <p className="text-[11px] font-semibold tracking-widest text-foreground/45">
                  CONTACT INFORMATION
                </p>
                <div className="mt-5 space-y-3">
                  <SidebarRow icon={Mail} text="armanadd01@gmail.com" />
                  <SidebarRow icon={Globe} text="armanadd01.github.io" />
                  <SidebarRow icon={MapPin} text="Dhaka, Bangladesh" />
                  <SidebarRow icon={Link2} text="linkedin.com/in/armanadd01" />
                  <SidebarRow icon={GitBranch} text="github.com/armanadd01" />
                </div>
              </div>

              <div className="mt-10">
                <p className="text-[11px] font-semibold tracking-widest text-foreground/45">
                  CORE COMPETENCIES
                </p>

                <div className="mt-5">
                  <p className="text-[10px] font-semibold tracking-widest text-primary/70">
                    FRONTEND
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Chip text="JavaScript" />
                    <Chip text="React" />
                    <Chip text="Tailwind CSS" />
                    <Chip text="WordPress" />
                  </div>
                </div>

                <div className="mt-7">
                  <p className="text-[10px] font-semibold tracking-widest text-primary/70">
                    BACKEND
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Chip text="Node.js" />
                    <Chip text="MongoDB" />
                    <Chip text="MySQL" />
                  </div>
                </div>

                <div className="mt-7">
                  <p className="text-[10px] font-semibold tracking-widest text-primary/70">
                    TOOLS
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Chip text="Git/GitHub" />
                    <Chip text="REST APIs" />
                    <Chip text="VS Code" />
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <p className="text-[11px] font-semibold tracking-widest text-foreground/45">
                  LANGUAGES
                </p>
                <div className="mt-5 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-foreground/80">
                      Bangla
                    </span>
                    <span className="text-primary/70">High</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-foreground/80">
                      English
                    </span>
                    <span className="text-primary/70">High</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-foreground/80">
                      German
                    </span>
                    <span className="text-primary/70">Medium</span>
                  </div>
                </div>
              </div>
            </aside>

            <div className="p-10">
              <div className="space-y-10">
                <div>
                  <SectionTitle icon={Blocks} title="Professional Profile" />
                  <p className="mt-5 text-sm leading-7 text-muted">
                    Experienced web developer with 6+ years in JavaScript,
                    React, Node.js, PHP, and WordPress theme development.
                    Skilled in NoSQL/MySQL databases and Tailwind CSS for
                    responsive interfaces. Committed to clean code, robust
                    architecture, and scalable delivery.
                  </p>
                </div>

                <div>
                  <SectionTitle icon={Briefcase} title="Work Experience" />

                  <div className="relative mt-7">
                    <div className="absolute left-3 top-2 hidden h-full w-px bg-surface-variant md:block" />

                    <div className="space-y-10">
                      {work.map((w) => (
                        <div key={w.role} className="relative md:pl-14">
                          <div className="absolute left-0 top-2 hidden md:block">
                            <div className="grid h-7 w-7 place-items-center rounded-full bg-black/10 outline outline-1 outline-[rgba(76,215,246,0.25)] dark:bg-white/10">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            </div>
                          </div>

                          <div className="flex items-start justify-between gap-6">
                            <div>
                              <p className="text-sm font-semibold text-foreground">
                                {w.role}
                              </p>
                              <p className="mt-2 text-xs font-semibold text-primary/80">
                                {w.company}
                              </p>
                            </div>
                            <span className="rounded-md bg-black/10 px-3 py-1 text-[11px] font-semibold text-foreground/70 outline outline-1 outline-[rgba(255,255,255,0.06)] dark:bg-white/10">
                              {w.range}
                            </span>
                          </div>

                          <p className="mt-4 text-sm leading-7 text-muted">
                            {w.summary}
                          </p>

                          <div className="mt-5 grid gap-3 text-xs text-muted md:grid-cols-2">
                            <ul className="space-y-2">
                              {w.left.map((t) => (
                                <li key={t} className="flex gap-3">
                                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                                  <span>{t}</span>
                                </li>
                              ))}
                            </ul>
                            <ul className="space-y-2">
                              {w.right.map((t) => (
                                <li key={t} className="flex gap-3">
                                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                                  <span>{t}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <SectionTitle icon={GraduationCap} title="Education" />

                  <div className="card-luminal mt-7 rounded-2xl bg-surface-low p-7">
                    <div className="flex items-start gap-4">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-black/10 outline outline-1 outline-[rgba(255,255,255,0.06)] dark:bg-white/10">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-start justify-between gap-6">
                          <p className="text-sm font-semibold text-foreground">
                            Bachelor of Arts (BA) — English Literature
                          </p>
                          <p className="text-xs font-semibold text-foreground/60">
                            Enrolled (2026)
                          </p>
                        </div>
                        <p className="mt-2 text-xs font-semibold text-primary/80">
                          Fareast International University
                        </p>
                        <p className="mt-4 text-sm leading-7 text-muted">
                          Currently pursuing undergraduate studies while
                          continuing professional software development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <SectionTitle icon={LinkIcon} title="Selected Projects" />

                  <div className="mt-7 grid gap-6 md:grid-cols-2">
                    <div className="card-luminal rounded-2xl bg-surface-low p-7">
                      <p className="text-sm font-semibold text-foreground">
                        Sultana Resort Niagara
                      </p>
                      <p className="mt-3 text-sm leading-7 text-muted">
                        Built the official website using WordPress and developed
                        custom plugins for booking and pricing integration with
                        a focus on security and responsive UX.
                      </p>
                      <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-primary/80">
                        <Globe className="h-4 w-4" />
                        sultanaresortniagara.ca
                      </div>
                    </div>

                    <div className="card-luminal rounded-2xl bg-surface-low p-7">
                      <p className="text-sm font-semibold text-foreground">
                        Larky Parky
                      </p>
                      <p className="mt-3 text-sm leading-7 text-muted">
                        High-performance web app with React and Tailwind CSS.
                        Used Node.js for custom APIs and optimized for strong
                        Lighthouse scores.
                      </p>
                      <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-primary/80">
                        <Globe className="h-4 w-4" />
                        larkyparky.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mt-10 text-center text-xs text-foreground/45">
          References available upon request.
        </div>
      </Reveal>
    </section>
  );
}
