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

const legalLinks = [
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cancellation-and-refund", label: "Cancellation & Refund" },
  { href: "/shipping-and-exchange", label: "Shipping & Exchange" },
  { href: "/contact-us", label: "Contact Us" },
];

export function SiteFooter({ variant = "hub" }: SiteFooterProps) {
  const quickLinks = variant === "hub" ? hubNav : navLinks;
  const isHub = variant === "hub";

  return (
    <footer className="brand-noise border-t border-white/5 bg-[var(--brand-black)] text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="mb-14 flex flex-col gap-6 border-b border-white/10 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-lime)]">Start a conversation</p>
            <p className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Clear guidance before you commit.
            </p>
          </div>
          <WhatsAppButton
            location={`footer-top-${variant}`}
            variant="footer"
            message={isHub ? siteConfig.hubWhatsappMessage : siteConfig.whatsappMessage}
          >
            {isHub ? "Talk to Skillvard" : "Skillvard-നോട് സംസാരിക്കുക"}
          </WhatsAppButton>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1.2fr]">
          <div className="max-w-xs">
            <Image
              src="/logo-dark.png"
              alt="Skillvard"
              width={180}
              height={56}
              className="mb-4 h-12 w-auto"
            />
            <p className="font-display text-sm font-semibold text-white/80">
              Master skills. Shape future.
            </p>
            <p className="mt-2 text-sm leading-6 text-white/55">
              {isHub
                ? "You can learn on your own. You shouldn't have to feel alone."
                : "നിങ്ങൾക്ക് സ്വയം പഠിക്കാൻ കഴിയും. പക്ഷേ നിങ്ങൾ ഒറ്റയ്ക്കാവേണ്ടതില്ല."}
            </p>
          </div>

          <div>
            <h3 className="font-display mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-lime)]">
              Policies
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition hover:text-white hover:underline hover:underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-lime)]">
              {isHub ? "Courses" : "Quick Links"}
            </h3>
            <ul className="space-y-2">
              {isHub
                ? activePrograms.map((p) => (
                    <li key={p.id}>
                      <Link
                        href={p.href}
                        className="text-sm text-white/65 transition hover:text-white hover:underline hover:underline-offset-4"
                      >
                        {p.titleEn}
                      </Link>
                    </li>
                  ))
                : quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/65 transition hover:text-white hover:underline hover:underline-offset-4"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-lime)]">
              {isHub ? "Contact" : "ബന്ധപ്പെടുക"}
            </h3>
            <ul className="space-y-2.5 text-sm leading-6 text-white/65">
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
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <p>LLPIN: {siteConfig.llpin}</p>
        </div>
      </div>
    </footer>
  );
}
