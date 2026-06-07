"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export const GUIDE_SECTION_IDS = [
  "about",
  "journey",
  "documents",
  "streams",
  "pass-toc",
  "subjects",
  "exams",
  "pcp",
  "faq",
] as const;

const READ_LINE_OFFSET = 120;

type GuideScrollContextValue = {
  activeId: (typeof GUIDE_SECTION_IDS)[number];
  progress: number;
  scrollToSection: (id: (typeof GUIDE_SECTION_IDS)[number]) => void;
};

const GuideScrollContext = createContext<GuideScrollContextValue | null>(null);

export function useGuideScroll() {
  const ctx = useContext(GuideScrollContext);
  if (!ctx) {
    throw new Error("useGuideScroll must be used within GuideScrollProvider");
  }
  return ctx;
}

export function useGuideSectionActive(sectionId: string) {
  const { activeId } = useGuideScroll();
  return activeId === sectionId;
}

function getActiveSectionId(): (typeof GUIDE_SECTION_IDS)[number] {
  let current: (typeof GUIDE_SECTION_IDS)[number] = GUIDE_SECTION_IDS[0];

  for (const id of GUIDE_SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= READ_LINE_OFFSET) {
      current = id;
    }
  }

  return current;
}

function getScrollProgress(): number {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollable <= 0) return 0;
  return Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100));
}

export function GuideScrollProvider({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState<(typeof GUIDE_SECTION_IDS)[number]>(
    GUIDE_SECTION_IDS[0]
  );
  const [progress, setProgress] = useState(0);
  const isClickScrolling = useRef(false);
  const clickScrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollToSection = useCallback((id: (typeof GUIDE_SECTION_IDS)[number]) => {
    const el = document.getElementById(id);
    if (!el) return;

    isClickScrolling.current = true;
    if (clickScrollTimer.current) clearTimeout(clickScrollTimer.current);

    setActiveId(id);

    const top = el.getBoundingClientRect().top + window.scrollY - READ_LINE_OFFSET + 4;
    window.scrollTo({ top, behavior: "smooth" });

    clickScrollTimer.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  }, []);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      if (!isClickScrolling.current) {
        const next = getActiveSectionId();
        setActiveId((prev) => (prev === next ? prev : next));
      }
      setProgress(getScrollProgress());
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (clickScrollTimer.current) clearTimeout(clickScrollTimer.current);
    };
  }, []);

  return (
    <GuideScrollContext.Provider value={{ activeId, progress, scrollToSection }}>
      {children}
    </GuideScrollContext.Provider>
  );
}
