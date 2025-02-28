"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./button";
import { Spotlight as SpotlightEffect } from "./ui/spotlight-new";

// Verbesserte SpotlightNewDemo
export function SpotlightNewDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <SpotlightEffect />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Spotlight <br /> which is not overused.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          A subtle yet effective spotlight effect, because the previous version
          is used a bit too much these days.
        </p>
      </div>
    </div>
  );
}

// Optimierte Hero-Komponente mit Spotlight und minimiertem JavaScript
export function Hero() {
  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 md:px-4 md:pt-40 bg-black"
    >
      {/* Spotlight-Effekt hinzugefügt */}
      <SpotlightEffect />
      
      <div className="text-balance relative z-20 mx-auto mb-4 mt-4 max-w-4xl text-center text-4xl font-semibold tracking-tight text-neutral-300 md:text-7xl">
        <h1
          className={cn(
            "inline-block bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)]",
            "bg-clip-text text-transparent"
          )}
        >
          Professional Daytrading by Coach Oliver Klemm
        </h1>
      </div>
      
      <h2
        className="relative z-20 mx-auto mt-4 max-w-xl px-4 text-center text-base/6 text-white sm:text-base font-light"
      >
        <span className="font-semibold">personal coaching</span> &bull; <span className="font-semibold">proven expert</span> &bull; <span className="font-semibold">30+ years experience</span> &bull; <span className="font-semibold">all markets</span>
      </h2>
      
      <div
        className="mb-8 mt-6 sm:mb-10 sm:mt-8 flex w-full flex-col items-center justify-center gap-4 px-4 sm:px-8 sm:flex-row md:mb-20"
      >
        <Button
          as={Link}
          href="https://tradingcoacholi.mymemberspot.de/auth/login?redirectTo=%2Fstartpagen"
          variant="primary"
          className="w-full sm:w-40 h-12 rounded-full flex items-center justify-center"
          aria-label="Jetzt für Coaching bewerben"
        >
         jetzt bewerben
        </Button>
      </div>
      
      {/* Hero Image Container - optimiert und vereinfacht */}
      <div
        className="relative mx-auto w-full max-w-7xl p-2 backdrop-blur-lg md:p-4"
        
      >
        <div className="rounded-[50px] relative" style={{ aspectRatio: '1855/952' }}>
          {/* Performance-intensive GlowingEffect entfernt */}
          <Image
            src="/dash.jpg"
            alt="TradingCoach Dashboard"
            width={1855}
            height={952}
            className="rounded-[20px] h-auto object-cover w-full "
            priority={true}
            loading="eager"
            quality={75}
            sizes="(max-width: 768px) 100vw, 1855px"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0 rounded-[20px]"
            style={{
              background:
                "linear-gradient(179.87deg, rgba(0, 0, 0, 0) 0.11%, rgba(0, 0, 0, 0.8) 69.48%, #000000 92.79%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
