"use client";

import Image from "next/image";
import Link from "next/link";
import { activePrograms } from "@/lib/programs";
import { hubNav } from "@/lib/hub-content";
import { siteConfig } from "@/lib/site-config";
import { navLinks } from "@/lib/site-content";
import { trackPhoneClick } from "@/lib/analytics";
import { WhatsAppButton } from "./whatsapp-button";

type SiteFooterProps = {
  variant?: "hub" | "nios";
};

export function SiteFooter({ variant = "hub" }: SiteFooterProps) {
  const quickLinks = variant === "hub" ? hubNav : navLinks;
  const isHub = variant === "hub";

  return (
    <footer className="bg-[var(--brand-black)] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Image
              src="/logo-dark.png"
              alt="Skillvard"
              width={180}
              height={56}
              className="mb-4 h-12 w-auto"
            />
            <p className="font-display text-sm text-white/70">
              Master skills. Shape future.
            </p>
            <p className="mt-2 text-sm text-white/60">
              {isHub
                ? "You can learn on your own. You shouldn't have to feel alone."
                : "നിങ്ങൾക്ക് സ്വയം പഠിക്കാൻ കഴിയും. പക്ഷേ നിങ്ങൾ ഒറ്റയ്ക്കാവേണ്ടതില്ല."}
            </p>
          </div>

          <div>
            <h3 className="font-display mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--brand-lime)]">
              {isHub ? "Courses" : "Quick Links"}
            </h3>
            <ul className="space-y-2">
              {isHub
                ? activePrograms.map((p) => (
                    <li key={p.id}>
                      <Link
                        href={p.href}
                        className="text-sm text-white/80 transition hover:text-white"
                      >
                        {p.titleEn}
                      </Link>
                    </li>
                  ))
                : quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/80 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--brand-lime)]">
              {isHub ? "Contact" : "ബന്ധപ്പെടുക"}
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href={siteConfig.siteUrl} className="hover:text-white">
                  {siteConfig.siteUrl.replace("https://", "")}
                </a>
              </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-white"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                  className="hover:text-white"
                  onClick={() => trackPhoneClick("footer")}
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>{isHub ? siteConfig.address.nameEn : siteConfig.address.name}</li>
              {(isHub ? siteConfig.address.linesEn : siteConfig.address.lines).map(
                (line) => (
                  <li key={line}>{line}</li>
                ),
              )}
            </ul>
            <div className="mt-4">
              <WhatsAppButton
                location={`footer-${variant}`}
                variant="footer"
                message={
                  isHub ? siteConfig.hubWhatsappMessage : siteConfig.whatsappMessage
                }
              >
                {isHub ? "Chat on WhatsApp" : "സംസാരിക്കാൻ WhatsApp-ൽ"}
              </WhatsAppButton>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Skillvard. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
