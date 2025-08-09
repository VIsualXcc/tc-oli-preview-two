/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    // Autoprefixer kommentiert, da wir Probleme damit haben
  },
};

export default config;
