import Head from 'next/head';

const SEO = ({
  title = 'Trading Coach Oli – Dein Trading-Experte für Daytrading',
  description = 'Lerne profitables Trading mit professionellem Coaching von Trading Coach Oli. Exklusive Strategien für Anfänger & Profis, um an der Börse erfolgreich zu handeln!',
  keywords = 'Trading Coaching, Trading lernen, professionelle Trader, Trading Coach, Aktienhandel, Krypto Trading, Daytrading, Coaching, Oliver Klemm, Börse, Aktien, Investment, Trading Ausbildung, Mentoring, Trading Strategien, Trading Psychologie',
  url = 'https://tc-oli-two.visualx.cc',
  image = '/og_trading-coach-oli.png',
  image_x = '/og_x_trading-coach-oli.png'
}) => {
  return (
    <Head>
      {/* Title & Meta Description */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Oliver Klemm" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Trading Coach Oli" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image_x} />
      <meta name="twitter:site" content="@TradingCoachOli" />

      {/* Apple Touch Icon */}
      <meta name="apple-mobile-web-app-title" content="Trading Coach Oli" />
      <link rel="apple-icon" href={image} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      {/* Structured Data (Schema.org JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Trading Coach Oli',
            url: url,
            image: image,
            description: description,
            keywords: keywords.split(', '),
            publisher: {
              '@type': 'Organization',
              name: 'Trading Coach Oli',
              logo: {
                '@type': 'ImageObject',
                url: /images/tco-logo-square-dark.png,
              },
            },
          }),
        }}
      />
    </Head>
  );
};

export default SEO;
