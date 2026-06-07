import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { NiosLanding } from "@/components/nios-landing";
import { siteMeta } from "@/lib/site-content";
import { siteConfig } from "@/lib/site-config";
import { AnnouncementBar } from "@/components/announcement-bar";

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  keywords: siteMeta.keywords,
  openGraph: {
    title: siteMeta.titleMl,
    description: siteMeta.descriptionMl,
    url: `${siteConfig.siteUrl}/nios-plus-two`,
    locale: "ml_IN",
    images: [
      {
        url: "/images/nios-share-banner.png",
        width: 1200,
        height: 1200,
        alt: siteMeta.titleMl,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.titleMl,
    description: siteMeta.descriptionMl,
    images: ["/images/nios-share-banner.png"],
  },
  alternates: {
    canonical: `${siteConfig.siteUrl}/nios-plus-two`,
  },
};

export default function NiosPlusTwoPage() {
  return (
    <>
      <AnnouncementBar variant="nios" />
      <SiteHeader variant="nios" />
      <main>
        <NiosLanding />
      </main>
      <SiteFooter variant="nios" />
      <WhatsAppFab />
    </>
  );
}

