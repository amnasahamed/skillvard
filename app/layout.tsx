import type { Metadata } from "next";
import { Anek_Malayalam, Inter } from "next/font/google";
import Script from "next/script";
import { JsonLd } from "@/components/json-ld";
import { hubMeta } from "@/lib/hub-content";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const anekMalayalam = Anek_Malayalam({
  subsets: ["malayalam", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-malayalam",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: hubMeta.title,
    template: `%s | Skillvard`,
  },
  description: hubMeta.description,
  openGraph: {
    title: hubMeta.title,
    description: hubMeta.description,
    url: siteConfig.siteUrl,
    siteName: "Skillvard",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/hub-hero.jpg", width: 1400, height: 933, alt: "Skillvard" }],
  },
  twitter: {
    card: "summary_large_image",
    title: hubMeta.title,
    description: hubMeta.description,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anekMalayalam.variable} ${inter.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="antialiased">
        {children}
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
