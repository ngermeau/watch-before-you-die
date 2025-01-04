/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridAutoRows: {
        400: "400px",
        "1fr": "1fr",
      },
      gridTemplateColumns: {
        "auto-fit-16": "repeat(auto-fit, minmax(16rem, 1fr))",
        "max-1fr": "max-content 1fr",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      colors: {
        background: "#151515",
        title: "#f4533f",
        text: "#ebdbc2",
      },
      keyframes: {
        imgFadeIn: {
          "0%": {
            opacity: 0.4,
          },
          "100%": {
            opacity: 0.8,
          },
        },
        txtFadeIn: {
          "0%": {
            opacity: 0.4,
          },
          "100%": {
            opacity: 1,
          },
        },
        entrance: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        imgFadeIn: "imgFadeIn 0.9s",
        txtFadeIn: "txtFadeIn 0.9s",
        entranceMovie: "entrance 4s",
        entranceImage: "entrance 8s",
        entranceAbout: "entrance 8s",
      },
    },
  },
  plugins: [],
};

export default config;
