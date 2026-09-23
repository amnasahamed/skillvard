import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/nios-plus-two",
    "/nios-plus-two/guide",
    "/terms-and-conditions",
    "/privacy-policy",
    "/cancellation-and-refund",
    "/shipping-and-exchange",
    "/contact-us",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
