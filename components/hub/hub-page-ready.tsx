"use client";

import { useEffect } from "react";

/** Marks the page ready for subtle entrance animations — no blocking overlay. */
export function HubPageReady() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const frame = requestAnimationFrame(() => {
      document.documentElement.dataset.pageReady = "true";
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return null;
}
