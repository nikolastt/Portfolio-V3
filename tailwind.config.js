/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-500": "#00BD95",
        "primary-300": "#2AFA93",
        "primary-800": "#155750",
        "primary-900": "#0a192f",
        "font-primary": "#CCDCF6",
        "font-secondary": "#8892B0",
        "menu-bg": "#112240",
        "secondary-500": "#171C23",
        "secondary-300": "#21272F",
        text: "#F7F7F7",
      },
      fontFamily: {
        robotoMono: ["Roboto Mono"],
        lateef: ["Lateef, serif"],
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
