"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { hubHero, hubNav } from "@/lib/hub-content";
import { navLinks, hero } from "@/lib/site-content";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppButton } from "./whatsapp-button";

type SiteHeaderProps = {
  variant?: "hub" | "nios";
};

export function SiteHeader({ variant = "hub" }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const links = variant === "hub" ? hubNav : navLinks;
  const logoHref = variant === "hub" ? "/" : "/nios-plus-two#home";
  const ctaLabel = variant === "hub" ? hubHero.ctaWhatsapp : hero.cta;
  const whatsappMessage =
    variant === "hub" ? siteConfig.hubWhatsappMessage : siteConfig.whatsappMessage;
  const navLabel = variant === "hub" ? "Main navigation" : "പ്രധാന നാവിഗേഷൻ";
  const menuOpenLabel = variant === "hub" ? "Open menu" : "മെനു തുറക്കുക";
  const mobileNavLabel = variant === "hub" ? "Mobile navigation" : "മൊബൈൽ നാവിഗേഷൻ";
  const isCurrent = (href: string) => {
    const [path] = href.split("#");
    if (!path || path === "/") return pathname === "/" && href === "/";
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-40 border-b border-black/[0.06] bg-[var(--brand-cream)]/92 shadow-[0_8px_30px_rgb(16_19_13/0.04)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:py-3.5">
        <Link href={logoHref} className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/logo-light.png"
            alt="Skillvard"
            width={160}
            height={48}
            className="h-10 w-auto sm:h-11"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-black/[0.06] bg-white/75 p-1.5 shadow-sm lg:flex" aria-label={navLabel}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(link.href) ? "page" : undefined}
              className={`rounded-full px-3.5 py-2 text-[13px] font-semibold transition duration-200 active:scale-[0.98] ${
                isCurrent(link.href)
                  ? "bg-[var(--brand-black)] text-white"
                  : "text-[var(--brand-black)]/65 hover:bg-[var(--brand-mist)] hover:text-[var(--brand-black)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton
            location={`header-${variant}`}
            variant="primary"
            message={whatsappMessage}
          >
            {ctaLabel}
          </WhatsAppButton>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white transition active:scale-95 lg:hidden"
          aria-expanded={open}
          aria-label={menuOpenLabel}
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/[0.06] bg-[var(--brand-cream)] px-4 py-5 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-3" aria-label={mobileNavLabel}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isCurrent(link.href) ? "page" : undefined}
                className={`rounded-xl px-3 py-2.5 text-base font-semibold transition ${
                  isCurrent(link.href)
                    ? "bg-[var(--brand-black)] text-white"
                    : "hover:bg-white"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <WhatsAppButton
              location={`header-mobile-${variant}`}
              variant="primary"
              className="mt-2 w-full"
              message={whatsappMessage}
            >
              {ctaLabel}
            </WhatsAppButton>
          </nav>
        </div>
      )}
    </header>
  );
}
