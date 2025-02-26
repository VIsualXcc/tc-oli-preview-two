/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    // Autoprefixer kommentiert, da wir Probleme damit haben
    // autoprefixer: {},
  },
};

export default config;
