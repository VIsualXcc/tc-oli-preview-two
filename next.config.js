/** @type {import('next').NextConfig} */
const nextConfig = {
  // Entferne Konsolen-Logs in Produktion
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Deaktiviere Source Maps in Produktion für bessere Performance
  productionBrowserSourceMaps: false,
  
  // Performance-Optimierungen
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons'],
    // CSS-Optimierung deaktiviert, um Critters-Probleme zu vermeiden
    optimizeCss: false,
  },
  
  // Entferne X-Powered-By Header
  poweredByHeader: false,
  
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [],
    path: '/_next/image',
    loader: 'default',
    loaderFile: '',
    disableStaticImages: false,
    minimumCacheTTL: 60,
    formats: ['image/webp'], // AVIF entfernt wegen Kompatibilitätsproblemen
    dangerouslyAllowSVG: true, // SVG erlauben für das Trustpilot-Logo
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    contentDispositionType: 'attachment',
    qualities: [75, 85], // Qualitätsstufen vereinfacht
    unoptimized: false,
    remotePatterns: [
      { hostname: "assets.aceternity.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "www.abzocktest.com"},
      { hostname: "www.kagels-trading.de"},
      { hostname: "uxwing.com"},
      { hostname: "media.cleanshot.cloud"}
    ],
  },
};

module.exports = nextConfig;