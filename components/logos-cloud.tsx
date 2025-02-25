"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

export function SpotlightLogoCloud() {
  const logos = [
    {
      name: "Trustpilot",
      src: "https://media.cleanshot.cloud/media/85423/sdFJz4pxGSjpdAiQbgWaXXD6ZNcJwz1CjeDWvQQZ.jpeg?Expires=1740469217&Signature=pZNMKBx6dZ90odaGcO3n6dqvXF~mXh4Hq8nenanAjvFoDtY4cm8qpEXbqzJmrQWBPuQLqCxcQx7SogK3smP6Nu4UCKx0NIOWUbdbgI3PoaAAotxWjjEguzxM0JnbqxdarWcyAtm-hg6SJzib4OrMk9sf1z56ePSa8AiwWGxzowp8WaCWFmkQESMZKNL9micwGjGSOPSixhcBuqnLTovINIJXTNhnibrPszrqeUrJsEqeaDMHhfiujBZLY-uI3LVO-YVBx95h8VoY2MUooYDLPDUUa9b5Je~SSfaf86bUsIfKwz2mMN~OEGyUnzAM9VPWSFOwiif1v9IYln1RapXzlA__&Key-Pair-Id=K269JMAT9ZF4GZ",
    },
    {
      name: "Abzocktest",
      src: "https://www.abzocktest.com/wp-content/uploads/2015/12/logo.png",
    },
    {
      name: "Kagels Trading",
      src: "https://www.kagels-trading.de/wp-content/uploads/kagels-trading-logo-2002x708-retina.png",
    },
    {
      name: "Asteroid Kit",
      src: "https://assets.aceternity.com/pro/logos/asteroid-kit.png",
    },
  ];

  return (
    <div className="relative w-full py-12 md:py-20 overflow-hidden">
      <div className="text-balance relative z-20 mx-auto mb-4 max-w-4xl text-center text-lg font-semibold tracking-tight text-neutral-300 md:text-3xl px-4">
          <h2
            className={cn(
              "inline-block bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)]",
              "bg-clip-text text-transparent"
            )}
          >
            Von Experten empfohlen
          </h2>
      </div>
      <p className="text-center max-w-lg mx-auto text-base md:text-lg font-sans text-neutral-500 mt-4 mb-8 md:mb-10 px-4">
      Mit Bestnoten empfohlen auf führenden Seiten der Trading Community. Echte Bewertungen, unabhängig getestet, Community Proofed. Kein Nepp.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6 md:gap-10 w-full max-w-3xl mx-auto relative px-4">
        {logos.map((logo, idx) => (
          <div
            key={logo.src + idx}
            className="flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={300}
              height={300}
              className="w-full max-w-[200px] object-contain select-none filter invert"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
