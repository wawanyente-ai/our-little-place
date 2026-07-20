import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF9F8",
        "soft-cream": "#FCF5F6",
        "dusty-pink": "#EBCFD6",
        "muted-rose": "#DCA9B8",
        ink: "#373434",
        "ink-soft": "#7A7072",
        accent: "#B68594",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        quote: ["var(--font-cormorant)", "serif"],
      },
      backgroundImage: {
        "warm-gradient":
          "linear-gradient(180deg, #FFF9F8 0%, #FAF0F3 50%, #F6E7EC 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-6px) rotate(1deg)" },
        },
        heartFade: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        heartFade: "heartFade 1.5s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
