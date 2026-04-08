import { HireFinalCTA } from "@/app/sections/hire/HireFinalCTA";
import { HireHero } from "@/app/sections/hire/HireHero";
import { HirePricing } from "@/app/sections/hire/HirePricing";
import { HireServices } from "@/app/sections/hire/HireServices";
import { HireTrust } from "@/app/sections/hire/HireTrust";

export default function HirePage() {
  return (
    <main>
      <HireHero />
      <HireServices />
      <HirePricing />
      <HireTrust />
      <HireFinalCTA />
    </main>
  );
}
