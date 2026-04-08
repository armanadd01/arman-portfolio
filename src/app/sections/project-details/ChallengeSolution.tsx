import { Layers, Sparkles, Zap } from "lucide-react";

import { Reveal } from "@/app/components/motion/reveal";

function FeatureCard({
  title,
  desc,
  icon: Icon,
}: {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="card-luminal rounded-2xl bg-surface-low p-6">
      <div className="flex items-start gap-4">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-black/10 dark:bg-white/10  outline outline-1 outline-[rgba(255,255,255,0.06)]">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{title}</p>
          <p className="mt-2 text-sm leading-6 text-muted">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export function ChallengeSolution({
  challengeTitle,
  challengeSubtitle,
  challengeBody,
  objectives,
  solutionTitle,
  solutionSubtitle,
  solutionBody,
}: {
  challengeTitle: string;
  challengeSubtitle: string;
  challengeBody: string;
  objectives: string[];
  solutionTitle: string;
  solutionSubtitle: string;
  solutionBody: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-14 lg:grid-cols-2">
        <Reveal>
          <div>
            <h2 className="font-display text-3xl font-semibold text-foreground">
              {challengeTitle}
            </h2>
            <p className="mt-3 text-sm text-muted">{challengeSubtitle}</p>
            <div className="mt-4 h-[3px] w-12 rounded-full bg-primary" />

            <p className="mt-10 text-sm leading-7 text-muted">{challengeBody}</p>

            <div className="mt-10">
              <p className="text-sm font-semibold text-foreground">Key Objectives</p>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {objectives.map((o) => (
                  <li key={o} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div>
            <h2 className="font-display text-3xl font-semibold text-foreground">
              {solutionTitle}
            </h2>
            <p className="mt-3 text-sm text-muted">{solutionSubtitle}</p>
            <div className="mt-4 h-[3px] w-12 rounded-full bg-primary" />

            <p className="mt-10 text-sm leading-7 text-muted">{solutionBody}</p>

            <div className="mt-12 space-y-4">
              <FeatureCard
                title="Real-time Analytics"
                desc="Instantaneous updates with zero-latency visual feedback on account balances."
                icon={Zap}
              />
              <FeatureCard
                title="AI-Powered Budgeting"
                desc="Predictive insights that model future spending patterns from historical data."
                icon={Sparkles}
              />
              <FeatureCard
                title="Cross-Platform Sync"
                desc="Seamless transitions between devices with state-persistent offline capabilities."
                icon={Layers}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
