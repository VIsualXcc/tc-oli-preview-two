import Head from 'next/head';

const SEO = ({
  title = 'Trading Coach Oli – Dein Trading-Experte',
  description = 'Lerne profitables Trading mit professionellem Coaching von Trading Coach Oli. Exklusive Strategien für Anfänger & Profis!',
  keywords = 'Trading Coaching, Trading lernen, professionelle Trader, Trading Coach, Aktienhandel, Krypto Trading',
  url = 'https://tradingcoacholi.com/',
  image = 'https://tradingcoacholi.com/wp-content/uploads/2024/og-tradingcoacholi.png',
}) => {
  return (
    <Head>
      {/* Title & Meta Description */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="apple-mobile-web-app-title" content="Trading Coach Oli" />

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
            keywords: keywords,
            publisher: {
              '@type': 'Organization',
              name: 'Trading Coach Oli',
              logo: {
                '@type': 'ImageObject',
                url: image,
              },
            },
          }),
        }}
      />
    </Head>
  );
};

export default SEO;