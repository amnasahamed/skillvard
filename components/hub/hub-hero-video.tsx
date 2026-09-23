"use client";

import { useCallback, useRef, useState } from "react";

type HubHeroVideoProps = {
  caption: string;
};

export function HubHeroVideo({ caption }: HubHeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  const markReady = useCallback(() => {
    setVideoReady(true);
  }, []);

  return (
    <div className="relative aspect-[5/4] overflow-hidden rounded-[1.25rem_3.5rem_1.25rem_1.25rem] shadow-[0_32px_80px_rgb(16_19_13/0.18)] ring-1 ring-black/5 sm:rounded-[1.5rem_5rem_1.5rem_1.5rem] lg:aspect-[4/3]">
      {/* Poster shows instantly while video buffers */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-out"
        style={{
          backgroundImage: "url(/images/posters/hero-student-poster.jpg)",
          opacity: videoReady ? 0 : 1,
        }}
        aria-hidden
      />

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/posters/hero-student-poster.jpg"
        className={`absolute inset-0 h-full w-full scale-[1.04] object-cover object-[center_20%] transition-opacity duration-700 ease-out ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        onLoadedData={markReady}
        onCanPlay={markReady}
        aria-hidden
      >
        <source src="/videos/hero-student-writing.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 sm:p-5">
        <p className="text-sm font-medium text-white sm:text-base">{caption}</p>
      </div>
    </div>
  );
}
