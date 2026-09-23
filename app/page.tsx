import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { HubPageReady } from "@/components/hub/hub-page-ready";
import { HubHero } from "@/components/hub/hub-hero";
import { HubMilestoneSection } from "@/components/hub/hub-milestone-section";
import { HubApproachSection } from "@/components/hub/hub-approach-section";
import { ProgramsSection } from "@/components/hub/programs-section";
import { HubHowSection } from "@/components/hub/hub-how-section";
import { HubWhySection } from "@/components/hub/hub-why-section";
import { HubCtaStrip } from "@/components/hub/hub-cta-strip";
import { HubContactSection } from "@/components/hub/hub-contact-section";
import { AnnouncementBar } from "@/components/announcement-bar";

export default function HomePage() {
  return (
    <>
      <HubPageReady />
      <AnnouncementBar variant="hub" />
      <SiteHeader variant="hub" />
      <main id="main-content">
        <HubHero />
        <HubMilestoneSection />
        <HubApproachSection />
        <ProgramsSection />
        <HubHowSection />
        <HubWhySection />
        <HubCtaStrip />
        <HubContactSection />
      </main>
      <SiteFooter variant="hub" />
      <WhatsAppFab />
    </>
  );
}
