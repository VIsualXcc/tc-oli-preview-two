"use client";
import React, { useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import YouTubeSimple from "./youtube-simple";
import Image from "next/image";
import Link from "next/link";
import { Spotlight } from "./ui/spotlight-new";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
  animate,
  stagger,
} from "framer-motion";

import { BsStarFill } from "react-icons/bs";
import { cn } from "@/lib/utils";
import { Button } from "./button";

export function HeroTwo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 max-w-7xl mx-auto pt-20 md:pt-40 relative overflow-hidden px-4 md:px-8">
      {/* Spotlight hinzugefügt */}
      <Spotlight className="z-0" />
      <div className="flex  flex-col items-start">
        <h3 className="text-3xl md:text-5xl md:leading-tight max-w-5xl text-left tracking-tight font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white">
          Starte Deine Ausbildung zum Trader
        </h3>
        <p className=" mt-2 md:mt-6 text-left md:text-xl text-neutral-400 max-w-3xl relative z-10">
        Lerne von einem ehemaligen Deutsche-Bank-Trader mit über 30 Jahren Erfahrung auf internationalen Finanzmärkten. Werde Teil unserer Community mit mehr als 1.500 Mitgliedern und profitiere von exklusivem Wissen und Austausch.
        </p>
        <FeaturedImages
          textClassName="lg:text-left text-left"
          className="lg:justify-start justify-start items-center"
          showStars
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start w-full items-center my-4 relative z-10"
        >
          <Button
            as={Link}
            href="https://tradingcoacholi.mymemberspot.de/auth/login?redirectTo=%2Fstartpage"
            variant="primary"
            className="w-full sm:w-40 h-12 rounded-full flex items-center justify-center"
          >
            <span>Bewerben</span>
            <HiArrowRight className="ml-2 group-hover:translate-x-1 stroke-[1px] h-3 w-3 transition-transform duration-200" />
          </Button>
        </motion.div>
      </div>
      <div>
      {/* Simple YouTube component with performance optimization */}
      <div className="border border-neutral-700 rounded-3xl p-4 bg-neutral-900 shadow-[0px_0px_5px_1px_rgba(255,255,255,0.05)_inset]">
        <YouTubeSimple videoId="fNILBkfYLqQ" aspectRatio="16:9" title="Trading Coach Oliver Klemm" />
      </div>
      </div>
    </div>
  );
}

export const testimonials = [
  {
    name: "Michael Müller",
    designation: "Fortex Trader",
    image:
      "/images/person7.png",
  },
  {
    name: "Petra Schmidt",
    designation: "Ehem. Krankenschwetser",
    image:
    "/images/person8.png",
  },
  {
    name: "Gerit Kraus",
    designation: "Liquidity Trader",
    image:
    "/images/person27.png",
  },
  {
    name: "Dora Klein",
    designation: "Commodities Trader",
    image:
    "/images/person16.png",
  },
  {
    name: "Stefan Menne",
    designation: "Scalper",
    image:
    "/images/person11.png",
  },
  {
    name: "Hans Davids",
    designation: "Futures Trader",
    image:
    "/images/person13.png",
  },
  {
    name: "Dora Klin",
    designation: "Day Traderin",
    image:
    "/images/person4.png",
  },
  {
    name: "Ralph Fischer",
    designation: "Night Trader",
    image:
    "/images/person5.png",
  },
];

export const FeaturedImages = ({
  textClassName,
  className,
  showStars = false,
  containerClassName,
}: {
  textClassName?: string;
  className?: string;
  showStars?: boolean;
  containerClassName?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    const target = event.target as HTMLImageElement;
    const halfWidth = target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  useEffect(() => {
    animate(
      ".animation-container",
      {
        scale: [1.1, 1, 0.9, 1],
        opacity: [0, 1],
      },
      { duration: 0.4, delay: stagger(0.1) }
    );
  }, []);
  return (
    <div
      className={cn(
        "flex flex-col items-center mt-10 mb-10",
        containerClassName
      )}
    >
      <div
        className={cn(
          "flex flex-col sm:flex-row items-center justify-center mb-2",
          className
        )}
      >
        <div className="flex flex-row items-center mb-4 sm:mb-0">
          {testimonials.map((testimonial, idx) => (
            <div
              className="-mr-4  relative group"
              key={testimonial.name}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.6 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 160,
                        damping: 20,
                      },
                    }}
                    exit={{ opacity: 0, y: 20, scale: 0.6 }}
                    style={{
                      translateX: translateX,

                      whiteSpace: "nowrap",
                    }}
                    className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-neutral-900 z-50 shadow-xl px-4 py-2"
                  >
                    <div className="absolute inset-x-0 z-30 w-[20%] mx-auto -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                    <div className="absolute inset-x-0 w-[70%] mx-auto z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                    <div className="flex items-center gap-2">
                      <div className="font-bold text-white relative z-30 text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-neutral-300 text-xs px-1 py-0.5 rounded-sm bg-neutral-950">
                        {testimonial.designation}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="animation-container">
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    rotate: `${Math.random() * 15 - 5}deg`,
                    scale: 1,
                    opacity: 1,
                  }}
                  whileHover={{
                    scale: 1.05,
                    zIndex: 30,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="rounded-2xl overflow-hidden border-2 border-neutral-700 relative"
                >
                  <Image
                    onMouseMove={handleMouseMove}
                    height={100}
                    width={100}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="object-cover object-top  h-14 w-14 "
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center ml-6">
          <Image 
            src="/images/trustpilot.png" 
            alt="Trustpilot Rating" 
            width={120} 
            height={50} 
            className="object-contain h-12"
          />
        </div>
      </div>
      <p
        className={cn(
          "text-neutral-400 text-sm text-center ml-8 relative z-40",
          textClassName
        )}
      >
        Trusted von 1.500+ Tradern
      </p>
    </div>
  );
};
