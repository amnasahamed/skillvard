import { HeroSection } from "@/components/sections/hero-section";
import { GuideLinkBanner } from "@/components/sections/guide-link-banner";
import { WarmthSection } from "@/components/sections/warmth-section";
import { WhySection } from "@/components/sections/why-section";
import { ApproachSection } from "@/components/sections/approach-section";
import { CtaStrip } from "@/components/sections/cta-strip";
import { StreamsSection } from "@/components/sections/streams-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { BeyondSection } from "@/components/sections/beyond-section";
import { ApplySection } from "@/components/sections/apply-section";

export function NiosLanding() {
  return (
    <>
      <HeroSection />
      <GuideLinkBanner />
      <WarmthSection />
      <WhySection />
      <ApproachSection />
      <CtaStrip />
      <StreamsSection />
      <FeaturesSection />
      <BeyondSection />
      <ApplySection />
    </>
  );
}
