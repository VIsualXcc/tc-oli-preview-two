import Link from "next/link";
import React from "react";
import { Logo } from "./logo";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { FaXTwitter } from "react-icons/fa6";


export function Footer() {
  const documentation = [
    { title: "Vorbereitung", href: "https://tradingcoacholi.com/", ariaLabel: "Mehr zur Trading-Vorbereitung" },
    { title: "Bewerbung", href: "https://tradingcoacholi.com/", ariaLabel: "Bewerbung für das Trading-Coaching" },
    { title: "Club", href: "https://tradingcoacholi.com/", ariaLabel: "Mehr über den Trading Club erfahren" },
    { title: "Elite", href: "https://tradingcoacholi.com/", ariaLabel: "Details zum Elite-Trading-Programm" },
    { title: "Mentoring", href: "https://tradingcoacholi.com/", ariaLabel: "Infos zum Mentoring-Programm" },
  ];
  
  const resources = [
    { title: "Änderungen", href: "https://tradingcoacholi.com/", ariaLabel: "Aktuelle Änderungen anzeigen" },
    { title: "Preise", href: "https://tradingcoacholi.com/", ariaLabel: "Preise und Tarife ansehen" },
    { title: "Affiliate", href: "https://tradingcoacholi.com/", ariaLabel: "Affiliate-Programm für Partner" },
    { title: "Links", href: "https://tradingcoacholi.com/", ariaLabel: "Nützliche Links entdecken" },
  ];
  
  const company = [
    { title: "Hilfe", href: "https://tradingcoacholi.com/", ariaLabel: "Hilfe & Support erhalten" },
    { title: "Kontakt", href: "https://tradingcoacholi.com/", ariaLabel: "Kontakt aufnehmen" },
    { title: "Kunden", href: "https://tradingcoacholi.com/", ariaLabel: "Erfahrungen unserer Kunden" },
    { title: "Partner", href: "https://tradingcoacholi.com/", ariaLabel: "Unsere Partner kennenlernen" },
  ];
  
  const legal = [
    { title: "Datenschutz", href: "https://tradingcoacholi.com/", ariaLabel: "Datenschutzerklärung einsehen" },
    { title: "Impressum", href: "https://tradingcoacholi.com/", ariaLabel: "Impressum und rechtliche Hinweise" },
    { title: "AGB", href: "https://tradingcoacholi.com/", ariaLabel: "Allgemeine Geschäftsbedingungen (AGB) lesen" },
  ];

  const socials = [
    { title: "Twitter", href: "https://x.com/tradingcoacholi", icon: FaXTwitter, ariaLabel: "Folge uns auf Twitter (X)" },
    { title: "Facebook", href: "https://www.facebook.com/groups/222610614960586/", icon: IconBrandFacebook, ariaLabel: "Trete unserer Facebook-Community bei" },
    { title: "Instagram", href: "https://www.instagram.com/tradingcoacholi/", icon: IconBrandInstagram, ariaLabel: "Folge uns auf Instagram" },
    { title: "Youtube", href: "https://www.youtube.com/@TradingCoachOli", icon: IconBrandYoutube, ariaLabel: "Besuche unseren YouTube-Kanal" },
  ];

  return (
    <div className="relative border-t border-white/[0.1] px-8 py-20 bg-black w-full overflow-hidden mx-auto max-w-7xl">
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 -mb-px flex h-8 items-end overflow-hidden">
        <div className="flex -mb-px h-[2px] w-56">
          <div className="w-full flex-none [background-image:linear-gradient(90deg,rgba(255,255,255,0)_0%,#FFFFFF_32.29%,rgba(255,255,255,0.3)_67.19%,rgba(255,255,255,0)_100%)] blur-xs" />
        </div>
      </div>

      <div className="max-w-7xl my-28  mx-auto text-sm text-neutral-400 flex flex-col justify-between md:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-10 md:mb-0">
            <Logo />
            <div className="flex gap-3 mt-6">
              {socials.map((social, idx) => (
                <SocialIcon key={`social-${idx}`} href={social.href} >
                  <social.icon strokeWidth={1.5} width={15} height={15} aria-label={social.ariaLabel}/>
                </SocialIcon>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-20">
            <div className="flex flex-col space-y-4">
              <p className="text-white font-semibold">Dokumentaion</p>
              <ul className="space-y-3">
                {documentation.map((item, idx) => (
                  <li key={`doc-${idx}`}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-4">
              <p className="text-white font-semibold">Informationen</p>
              <ul className="space-y-3">
                {resources.map((item, idx) => (
                  <li key={`resource-${idx}`}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-4">
              <p className="text-white font-semibold">Kontakt</p>
              <ul className="space-y-3">
                {company.map((item, idx) => (
                  <li key={`company-${idx}`}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-4">
              <p className="text-white font-semibold">Rechtliches</p>
              <ul className="space-y-3">
                {legal.map((item, idx) => (
                  <li key={`legal-${idx}`}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SocialIconProps {
  href: string;
  children: React.ReactNode;
}

export function SocialIcon({ href, children }: SocialIconProps) {
  return (
    <Link
      href={href}
      className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center hover:bg-neutral-700/20 transition-all border border-neutral-700/50 shadow-[2px_-2px_15px_rgba(0,0,0,0.2)] hover:shadow-[4px_-4px_20px_rgba(0,0,0,0.3)] relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:rounded-full"
    >
      <div className="w-5 h-5 text-neutral-400 hover:text-white transition-colors flex justify-center items-center">
        {children}
      </div>
    </Link>
  );
}
