import { SkillsHero } from "@/app/sections/skills/SkillsHero";
import { SkillsTabsGrid } from "@/app/sections/skills/SkillsTabsGrid";
import { StackComposition } from "@/app/sections/skills/StackComposition";
import { SkillsFinalCTA } from "@/app/sections/skills/SkillsFinalCTA";

export default function SkillsPage() {
  return (
    <main>
      <SkillsHero />
      <SkillsTabsGrid />
      <StackComposition />
      <SkillsFinalCTA />
    </main>
  );
}
