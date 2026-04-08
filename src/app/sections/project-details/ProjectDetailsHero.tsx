import Image from "next/image";

import { ExternalLink, GitBranch } from "lucide-react";

import { Reveal } from "@/app/components/motion/reveal";
import type { ProjectLink } from "@/app/types/project";

function ActionLink({
  href,
  variant,
  children,
}: {
  href: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
}) {
  const common =
    "inline-flex h-11 items-center justify-center gap-2 rounded-2xl px-6 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60";

  const cls =
    variant === "primary"
      ? `${common} bg-primary text-white shadow-[0_18px_50px_-28px_rgba(0,163,255,0.55)] dark:text-black`
      : `${common} bg-black/10 dark:bg-white/10  text-foreground/85 outline outline-1 outline-[rgba(255,255,255,0.08)] backdrop-blur hover:text-foreground`;

  const external = href.startsWith("http");

  return (
    <a
      href={href}
      className={cls}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export function ProjectDetailsHero({
  title,
  subtitle,
  tags,
  cover,
  primaryLink,
  secondaryLink,
}: {
  title: { strong: string; accent: string };
  subtitle: string;
  tags: string[];
  cover: string;
  primaryLink?: ProjectLink;
  secondaryLink?: ProjectLink;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={cover}
          alt=""
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/85" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-12">
        <div className="max-w-3xl">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-black/10 dark:bg-white/10  px-3 py-1 text-[11px] font-semibold text-white/80 outline outline-1 outline-[rgba(255,255,255,0.08)] backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl">
              {title.strong}{" "}
              <span className="text-primary">{title.accent}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70">
              {subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              {primaryLink ? (
                <ActionLink href={primaryLink.href} variant="primary">
                  <ExternalLink className="h-4 w-4" />
                  {primaryLink.label}
                </ActionLink>
              ) : null}

              {secondaryLink ? (
                <ActionLink href={secondaryLink.href} variant="secondary">
                  <GitBranch className="h-4 w-4" />
                  {secondaryLink.label}
                </ActionLink>
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
