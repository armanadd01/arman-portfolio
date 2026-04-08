import { Reveal } from "@/app/components/motion/reveal";

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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
