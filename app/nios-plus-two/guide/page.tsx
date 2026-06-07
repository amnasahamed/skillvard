import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { NiosGuidePage } from "@/components/nios-guide/nios-guide-page";
import { niosGuideMeta } from "@/lib/nios-guide-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: niosGuideMeta.title,
  description: niosGuideMeta.description,
  openGraph: {
    title: niosGuideMeta.title,
    description: niosGuideMeta.description,
    url: `${siteConfig.siteUrl}/nios-plus-two/guide`,
  },
  alternates: {
    canonical: `${siteConfig.siteUrl}/nios-plus-two/guide`,
  },
};

export default function NiosGuideRoute() {
  return (
    <>
      <SiteHeader variant="nios" />
      <main>
        <NiosGuidePage />
      </main>
      <SiteFooter variant="nios" />
      <WhatsAppFab />
    </>
  );
}
