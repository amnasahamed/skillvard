import type { ReactNode } from "react";
import { GuideSectionCue } from "./guide-section-cue";

type GuideSectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  tone?: "white" | "muted" | "dark";
  children: ReactNode;
};

const toneClasses = {
  white: "bg-white",
  muted: "bg-zinc-50 guide-dot-bg",
  dark: "bg-[var(--brand-black)] text-white",
};

export function GuideSection({
  id,
  title,
  subtitle,
  eyebrow,
  tone = "white",
  children,
}: GuideSectionProps) {
  const isDark = tone === "dark";

  return (
    <section
      id={id}
      className={`relative scroll-mt-[7.25rem] py-12 sm:scroll-mt-28 sm:py-16 lg:py-24 ${toneClasses[tone]}`}
    >
      <GuideSectionCue sectionId={id} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="max-w-3xl">
          {eyebrow ? (
            <p
              className={`font-display text-[10px] font-bold uppercase tracking-[0.18em] sm:text-xs sm:tracking-[0.2em] ${
                isDark ? "text-[var(--brand-lime)]" : "text-[var(--brand-black)]/40"
              }`}
            >
              {eyebrow}
            </p>
          ) : null}
          <h2
            className={`mt-2 text-xl font-bold leading-snug tracking-tight sm:text-2xl sm:leading-tight lg:text-[2rem] ${
              isDark ? "text-white" : "text-[var(--brand-black)]"
            }`}
          >
            {title}
          </h2>
          {subtitle ? (
            <p
              className={`font-display mt-2 text-sm leading-relaxed sm:mt-3 sm:text-base lg:text-lg ${
                isDark ? "text-white/65" : "text-[var(--brand-black)]/55"
              }`}
            >
              {subtitle}
            </p>
          ) : null}
        </header>
        <div className="mt-8 sm:mt-10 lg:mt-12">{children}</div>
      </div>
    </section>
  );
}

export function GuideCard({
  children,
  className = "",
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "lime" | "dark";
}) {
  const variants = {
    default: "bg-white ring-1 ring-black/[0.06] shadow-sm",
    elevated: "bg-white ring-1 ring-black/[0.06] shadow-md shadow-black/[0.04]",
    lime: "bg-[var(--brand-lime)]/20 ring-1 ring-[var(--brand-lime)]/40",
    dark: "bg-[var(--brand-black)] text-white ring-1 ring-white/10",
  };

  return (
    <article
      className={`rounded-2xl p-4 sm:rounded-3xl sm:p-6 ${variants[variant]} ${className}`}
    >
      {children}
    </article>
  );
}

export function GuideCallout({
  children,
  variant = "tip",
}: {
  children: ReactNode;
  variant?: "tip" | "warn" | "info";
}) {
  const styles = {
    tip: "border-[var(--brand-lime)]/50 bg-[var(--brand-lime)]/15 text-[var(--brand-black)]/85",
    warn: "border-amber-300/80 bg-amber-50 text-amber-950",
    info: "border-black/8 bg-white text-[var(--brand-black)]/75",
  };

  return (
    <div
      className={`rounded-xl border px-3.5 py-3 text-sm leading-relaxed sm:rounded-2xl sm:px-5 sm:py-4 ${styles[variant]}`}
    >
      {children}
    </div>
  );
}

export function GuideLabel({ children }: { children: ReactNode }) {
  return (
    <span className="font-display inline-flex items-center rounded-full bg-[var(--brand-black)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--brand-lime)]">
      {children}
    </span>
  );
}
