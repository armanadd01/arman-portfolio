import { SiteHeader } from "@/app/components/layout/site-header";
import { SiteFooter } from "@/app/components/layout/site-footer";
import { HeroSection } from "@/app/sections/hero";
import { ProjectsSection } from "@/app/sections/projects";
import { SkillsSection } from "@/app/sections/skills";
import { ContactSection } from "@/app/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-black dark:text-zinc-50">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
