"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Testimonials() {
  return (
    <div className="w-full max-w-7xl mx-auto my-20 py-20 px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Title Section - 40% */}
        <div className="w-full lg:w-[40%]">
          <div className="sticky top-20">
            <h2
              className={cn(
                "text-3xl text-center lg:text-left md:text-6xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] ",
                "bg-clip-text text-transparent leading-tight"
              )}
            >
              Was unsere <br />
              Schüler über uns sagen
            </h2>
            <p className="text-sm text-center lg:text-left mx-auto lg:mx-0 text-neutral-400 mt-6 max-w-sm">
            Sieh, was unsere ehemaligen Schüler sagen.
            Lass dich vom Erfolg inspirieren – die Zahlen sprechen für sich!            </p>
          </div>
        </div>

{/* Right Testimonials Section - 60% */}
<div className="w-full grid gap-8 grid-cols-1 lg:grid-cols-2 md:w-[60%] mx-auto">
  <TestimonialCard
    name="Gabrielle Kaufmann"
    role="Forex-Traderin"
    image="/images/person18.png"
    quote="Neben den Videos gibt es persönliche Unterstützung und spezielle Frauengruppen. Also Mädels, nutzt die Chance und startet mit dem Trading!"
    className="lg:mt-[50px]"
  />
  <TestimonialCard
    name="Axel Pasemann"
    role="Day Trader"
    image="/images/person29.png"
    quote="Mein Weg zu finanzieller Freiheit und Unabhängigkeit! Ich bin seit fast einem Jahr dabei und jede Investition hat sich gelohnt."
    className="lg:mt-[50px]"
  />
  <TestimonialCard
    name="Axel Pasemann"
    role="Day Trader"
    image="/images/person29.png"
    quote="Mein Weg zu finanzieller Freiheit und Unabhängigkeit! Ich bin seit fast einem Jahr dabei und jede Investition hat sich gelohnt."
    className="lg:mt-[50px]"
  />
  <TestimonialCard
    name="Gabrielle Kaufmann"
    role="Forex-Traderin"
    image="/images/person18.png"
    quote="Neben den Videos gibt es persönliche Unterstützung und spezielle Frauengruppen. Also Mädels, nutzt die Chance und startet mit dem Trading!"
    className="lg:mt-[50px]"
  />
        </div>
      </div>
    </div>
  );
}

const TestimonialCard = ({
  name,
  role,
  image,
  quote,
  className,
}: {
  name: string;
  role: string;
  image: string;
  quote: string;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "flex flex-col h-96 p-8 rounded-[17px]",
        "border border-[#474747]",
        "bg-white bg-[linear-gradient(178deg,#2E2E2E_0.37%,#0B0B0B_38.61%),linear-gradient(180deg,#4C4C4C_0%,#151515_100%),linear-gradient(180deg,#2E2E2E_0%,#0B0B0B_100%)]",
        "relative isolate",
        className
      )}
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-neutral-700">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="text-sm text-neutral-400">{role}</p>
        </div>
      </div>
      <p className="text-lg text-neutral-300 leading-relaxed">
        &quot;{quote}&quot;
      </p>
    </motion.div>
  );
};
