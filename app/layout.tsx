import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ClientOnly } from "@/components/client-only";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trading Coach Oli | Daytrading Insider von Ex-Deutsche Bank Trader",
  description: "Lerne profitables Trading mit professionellem Coaching von Trading Coach Oli. Exklusive Strategien für Anfänger & Profis, um an der Börse erfolgreich zu handeln!",
  keywords: "Trading Coaching, Trading lernen, professionelle Trader, Trading Coach, Aktienhandel, Krypto Trading, Daytrading, Coaching, Oliver Klemm, Börse, Aktien, Investment, Trading Ausbildung, Mentoring, Trading Strategien, Trading Psychologie",
  authors: [{ name: "Oliver Klemm" }],
  creator: "Oliver Klemm",
  publisher: "Trading Coach Oli",
  metadataBase: new URL("https://tc-oli-two.visualx.cc"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Trading Coach Oli | Daytrading Insider von Ex-Deutsche Bank Trader",
    description: "Lerne profitables Trading mit professionellem Coaching von Trading Coach Oli. Exklusive Strategien für Anfänger & Profis, um an der Börse erfolgreich zu handeln!", 
    url: "https://tc-oli-two.visualx.cc",
    siteName: "Trading Coach Oli",
    images: [{
      url: "/og_trading-coach-oli.png",
      width: 1200,
      height: 630,
      alt: "Trading Coach Oli"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trading Coach Oli | Daytrading Insider von Ex-Deutsche Bank Trader",
    description: "Lerne profitables Trading mit professionellem Coaching von Trading Coach Oli. Exklusive Strategien für Anfänger & Profis, um an der Börse erfolgreich zu handeln!",
    site: "@TradingCoachOli",
    images: [{
      url: "/og_x_trading-coach-oli.png", 
      width: 1200,
      height: 630,
      alt: "Trading Coach Oli"
    }],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased bg-black", inter.className)} suppressHydrationWarning>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        {children}
        <ClientOnly>
          <Footer />
        </ClientOnly>
        <Script id="schema-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Trading Coach Oli',
            url: 'https://tc-oli-two.visualx.cc',
            image: '/og_trading-coach-oli.png',
            description: 'Lerne profitables Trading mit professionellem Coaching von Trading Coach Oli. Exklusive Strategien für Anfänger & Profis, um an der Börse erfolgreich zu handeln!',
            keywords: 'Trading Coaching, Trading lernen, professionelle Trader, Trading Coach, Aktienhandel, Krypto Trading, Daytrading, Coaching, Oliver Klemm, Börse, Aktien, Investment, Trading Ausbildung, Mentoring, Trading Strategien, Trading Psychologie'.split(', '),
            publisher: {
              '@type': 'Organization',
              name: 'Trading Coach Oli',
              logo: {
                '@type': 'ImageObject',
                url: '/og_trading-coach-oli.png',
              },
            },
          })}
        </Script>
      </body>
    </html>
  );
}
