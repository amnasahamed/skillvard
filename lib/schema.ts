import { hubMeta } from "./hub-content";
import { siteConfig } from "./site-config";

export function buildJsonLd(): Record<string, unknown> {
  const organization = {
    "@type": "EducationalOrganization",
    "@id": `${siteConfig.siteUrl}/#organization`,
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/logo-light.png`,
    description: hubMeta.description,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.linesEn[0],
      addressLocality: "Kozhikode",
      postalCode: "673602",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}/#website`,
    url: siteConfig.siteUrl,
    name: siteConfig.siteName,
    description: hubMeta.description,
    publisher: { "@id": `${siteConfig.siteUrl}/#organization` },
    inLanguage: "en",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website],
  };
}
