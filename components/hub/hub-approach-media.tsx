"use client";

import { useCallback, useRef, useState } from "react";

export function HubApproachMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  const markReady = useCallback(() => {
    setVideoReady(true);
  }, []);

  return (
    <div className="relative min-h-[280px] overflow-hidden rounded-[3rem_1.5rem_1.5rem_1.5rem] shadow-[0_28px_70px_rgb(16_19_13/0.14)] ring-1 ring-black/5 sm:min-h-[340px] lg:min-h-0">
      <div
        className="absolute inset-0 bg-zinc-100 transition-opacity duration-700 ease-out"
        style={{ opacity: videoReady ? 0 : 1 }}
        aria-hidden
      />

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className={`absolute inset-0 h-full w-full scale-[1.04] object-cover transition-opacity duration-700 ease-out ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        onLoadedData={markReady}
        onCanPlay={markReady}
        aria-label="Hands turning a notebook page — a new chapter"
      >
        <source src="/videos/transition-hands-page.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent p-4">
        <p className="text-xs font-medium text-white/90 sm:text-sm">
          Turn the page — your next chapter starts here.
        </p>
      </div>
    </div>
  );
}
