import { ExperienceHero } from "@/app/sections/experience/ExperienceHero";
import { ExperienceTimeline } from "@/app/sections/experience/ExperienceTimeline";
import { FreelanceSpotlight } from "@/app/sections/experience/FreelanceSpotlight";
import { ExperienceFinalCTA } from "@/app/sections/experience/ExperienceFinalCTA";

export default function ExperiencePage() {
  return (
    <main>
      <ExperienceHero />
      <ExperienceTimeline />
      <FreelanceSpotlight />
      <ExperienceFinalCTA />
    </main>
  );
}
