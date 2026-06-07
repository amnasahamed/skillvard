import { GuideHero } from "./guide-hero";
import { GuideNav } from "./guide-nav";
import { GuideScrollProvider } from "./guide-scroll-provider";
import { WhatIsNios } from "./what-is-nios";
import { JourneyTimeline } from "./journey-timeline";
import { DocumentsGuide } from "./documents-guide";
import { StreamsGuide } from "./streams-guide";
import { PassMarksTocGuide } from "./pass-marks-toc-guide";
import { SubjectGroupsGuide } from "./subject-groups-guide";
import { ExamsGuide } from "./exams-guide";
import { PcpPracticalGuide } from "./pcp-practical-guide";
import { FaqSection } from "./faq-section";
import { GuideCta } from "./guide-cta";

export function NiosGuidePage() {
  return (
    <GuideScrollProvider>
      <div className="guide-page">
        <GuideHero />
        <GuideNav />
        <WhatIsNios />
        <JourneyTimeline />
        <DocumentsGuide />
        <StreamsGuide />
        <PassMarksTocGuide />
        <SubjectGroupsGuide />
        <ExamsGuide />
        <PcpPracticalGuide />
        <FaqSection />
        <GuideCta />
      </div>
    </GuideScrollProvider>
  );
}
