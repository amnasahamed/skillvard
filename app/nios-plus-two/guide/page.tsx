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
    locale: "ml_IN",
    images: [
      {
        url: "/images/nios-share-banner.png",
        width: 1200,
        height: 1200,
        alt: niosGuideMeta.title,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: niosGuideMeta.title,
    description: niosGuideMeta.description,
    images: ["/images/nios-share-banner.png"],
  },
  alternates: {
    canonical: `${siteConfig.siteUrl}/nios-plus-two/guide`,
  },
};

export default function NiosGuideRoute() {
  return (
    <>
      <SiteHeader variant="nios" />
      <main id="main-content">
        <NiosGuidePage />
      </main>
      <SiteFooter variant="nios" />
      <WhatsAppFab />
    </>
  );
}
