/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: { preflight: false },
  theme: {},
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
