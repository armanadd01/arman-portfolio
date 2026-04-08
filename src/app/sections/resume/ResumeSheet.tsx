import Image from "next/image";

import {
  Briefcase,
  GraduationCap,
  Link as LinkIcon,
  Link2,
  Mail,
  MapPin,
  GitBranch,
  Phone,
  Globe,
  Blocks,
} from "lucide-react";

import { Reveal } from "@/app/components/motion/reveal";
import { projects } from "@/app/lib/projects";

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
  const selectedProjects = projects.slice(0, 4);

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
                  <SidebarRow icon={Mail} text="armanadd05@gmail.com" />
                  <SidebarRow icon={Phone} text="01951798878" />
                  <SidebarRow icon={Phone} text="01410798878" />
                  <SidebarRow icon={Phone} text="01721628361" />
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

                  <div className="card-luminal mt-6 rounded-2xl bg-surface-low p-7">
                    <p className="text-sm font-semibold text-foreground">
                      HSC — Humanities
                    </p>
                    <p className="mt-2 text-xs font-semibold text-primary/80">
                      Bhawal Badre Alam Govt. College
                    </p>
                    <p className="mt-3 text-sm text-muted">CGPA: 2.75 out of 5 (2019)</p>
                  </div>

                  <div className="card-luminal mt-6 rounded-2xl bg-surface-low p-7">
                    <p className="text-sm font-semibold text-foreground">SSC — Science</p>
                    <p className="mt-2 text-xs font-semibold text-primary/80">
                      Rotary School And College
                    </p>
                    <p className="mt-3 text-sm text-muted">2017</p>
                  </div>
                </div>

                <div>
                  <SectionTitle icon={LinkIcon} title="Selected Projects" />

                  <div className="mt-7 grid gap-6 md:grid-cols-2">
                    {selectedProjects.map((p) => (
                      <div key={p.slug} className="card-luminal rounded-2xl bg-surface-low p-7">
                        <p className="text-sm font-semibold text-foreground">{p.title}</p>
                        <p className="mt-3 text-sm leading-7 text-muted">{p.description}</p>
                        {p.links[0]?.href ? (
                          <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-primary/80">
                            <Globe className="h-4 w-4" />
                            {p.links[0].href.replace(/^https?:\/\//, "")}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <SectionTitle icon={Blocks} title="Training Summary" />
                  <div className="mt-7 grid gap-6">
                    <div className="card-luminal rounded-2xl bg-surface-low p-7">
                      <p className="text-sm font-semibold text-foreground">
                        Advance MERN full stack developer
                      </p>
                      <p className="mt-2 text-xs font-semibold text-primary/80">
                        Ostad app • Dhaka • 2023 • Duration: 6
                      </p>
                      <p className="mt-4 text-sm leading-7 text-muted">
                        Advance Full stack web application development, Mongo, ExpressJs, ReactJs, Node.js
                      </p>
                    </div>
                    <div className="card-luminal rounded-2xl bg-surface-low p-7">
                      <p className="text-sm font-semibold text-foreground">MERN Stack development</p>
                      <p className="mt-2 text-xs font-semibold text-primary/80">
                        Programing hero • Dhaka • 2021 • Duration: 5 months
                      </p>
                      <p className="mt-4 text-sm leading-7 text-muted">MERN Stack</p>
                    </div>
                    <div className="card-luminal rounded-2xl bg-surface-low p-7">
                      <p className="text-sm font-semibold text-foreground">Advanced Web Development</p>
                      <p className="mt-2 text-xs font-semibold text-primary/80">
                        Institute of Coders Core • Dhaka • 2016 • Duration: 6 month
                      </p>
                      <p className="mt-4 text-sm leading-7 text-muted">
                        HTML5, CSS3, Bootstrap, JQuery, PHP, WordPress
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <SectionTitle icon={Blocks} title="Professional Qualification" />
                  <div className="mt-7 grid gap-6">
                    <div className="card-luminal rounded-2xl bg-surface-low p-7">
                      <p className="text-sm font-semibold text-foreground">
                        Full stack MERN development (Advance)
                      </p>
                      <p className="mt-2 text-xs font-semibold text-primary/80">
                        Ostad.app • Dhaka • April 1, 2023 — December 30, 2023
                      </p>
                    </div>
                    <div className="card-luminal rounded-2xl bg-surface-low p-7">
                      <p className="text-sm font-semibold text-foreground">Full stack MERN development</p>
                      <p className="mt-2 text-xs font-semibold text-primary/80">
                        Programming hero • Dhaka • June 1, 2021 — December 31, 2021
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <SectionTitle icon={Blocks} title="Career and Application Information" />
                  <div className="card-luminal mt-7 rounded-2xl bg-surface-low p-7">
                    <div className="grid gap-2 text-sm text-muted">
                      <p><span className="font-semibold text-foreground/80">Looking For:</span> Top Level Job</p>
                      <p><span className="font-semibold text-foreground/80">Available For:</span> Full Time</p>
                      <p><span className="font-semibold text-foreground/80">Present Salary:</span> Tk. 36200</p>
                      <p><span className="font-semibold text-foreground/80">Expected Salary:</span> Tk. 50000</p>
                      <p><span className="font-semibold text-foreground/80">Preferred Job Category:</span> IT/Telecommunication</p>
                      <p><span className="font-semibold text-foreground/80">Preferred District:</span> Dhaka, Gazipur</p>
                      <p><span className="font-semibold text-foreground/80">Preferred Country:</span> Austria, Germany, the Netherlands, Poland, and Switzerland</p>
                      <p><span className="font-semibold text-foreground/80">Preferred Organization Types:</span> Advertising Agency, Development Agency, Developer, Cellular Phone Operator</p>
                    </div>
                  </div>
                </div>

                <div>
                  <SectionTitle icon={Blocks} title="Personal Details" />
                  <div className="card-luminal mt-7 rounded-2xl bg-surface-low p-7">
                    <div className="grid gap-2 text-sm text-muted">
                      <p><span className="font-semibold text-foreground/80">Father&apos;s Name:</span> Habibur Rahman</p>
                      <p><span className="font-semibold text-foreground/80">Mother&apos;s Name:</span> Nurjahan Habib</p>
                      <p><span className="font-semibold text-foreground/80">Date of Birth:</span> 21 Feb 2002</p>
                      <p><span className="font-semibold text-foreground/80">Gender:</span> Male</p>
                      <p><span className="font-semibold text-foreground/80">Height (Meter):</span> 1.6256</p>
                      <p><span className="font-semibold text-foreground/80">Weight (Kg):</span> 58</p>
                      <p><span className="font-semibold text-foreground/80">Marital Status:</span> Married</p>
                      <p><span className="font-semibold text-foreground/80">Nationality:</span> Bangladeshi</p>
                      <p><span className="font-semibold text-foreground/80">Religion:</span> Islam</p>
                      <p><span className="font-semibold text-foreground/80">Permanent Address:</span> Tamni Akand Para, Karimganj, Karimganj, Kishoreganj 2310</p>
                      <p><span className="font-semibold text-foreground/80">Current Location:</span> Dhaka</p>
                      <p><span className="font-semibold text-foreground/80">Blood Group:</span> B+</p>
                    </div>
                  </div>
                </div>

                <div>
                  <SectionTitle icon={Blocks} title="References" />
                  <div className="card-luminal mt-7 rounded-2xl bg-surface-low p-7">
                    <p className="text-sm font-semibold text-foreground">Atik Rahman</p>
                    <p className="mt-2 text-xs font-semibold text-primary/80">CEO • Multilat Inc.</p>
                    <p className="mt-4 text-sm text-muted">Relation: Professional</p>
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
