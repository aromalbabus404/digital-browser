import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pool: {
          950: "#020712",
          900: "#051124",
          850: "#091B38",
          800: "#0F264A",
          700: "#16386B",
          600: "#1D529E",
          500: "#2B6FCE",
          400: "#38BDF8",
          300: "#7DD3FC",
          200: "#BAE6FD",
          100: "#E0F2FE",
          50: "#F0F9FF",
        },
        aqua: {
          DEFAULT: "#00F0FF",
          glow: "rgba(0, 240, 255, 0.4)",
          dark: "#00B4D8",
        },
        gold: {
          accent: "#D4AF37",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Outfit", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
