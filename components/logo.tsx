"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const LogoIcon = () => (
    <div className="w-10 h-10 flex items-center justify-center">
      <Image
        src="/tco-logo.png"
        alt="Trading Coach Oli Logo"
        width={40} // Anpassbare Größe
        height={40}
        priority
        className="rounded-full"
      />
    </div>
);

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex gap-2 items-center text-sm text-black px-2 py-1 shrink-0 relative z-20"
    >
      <LogoIcon />
      <span className="font-medium text-white">Trading Coach Oli</span>
    </Link>
  );
};