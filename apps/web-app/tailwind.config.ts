import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent-color)",
        "accent-soft": "var(--accent-soft-color)",
        complement: "var(--complement-color)",
        dominant: "var(--bg-dominant-color)",
        inverted: "var(--bg-inverted-color",
        muted: "var(--bg-muted-color)",
      },
      backgroundColor: {
        dominant: "var(--bg-dominant-color)",
        muted: "var(--bg-muted-color)",
        "muted-secondary": "var(--bg-muted-secondary-color)",
        inverted: "var(--bg-inverted-color)",
      },
      textColor: {
        heading: "var(--text-heading-color)",
        dominant: "var(--text-dominant-color)",
        muted: "var(--text-muted-color)",
        inverted: "var(--text-inverted-color)",
      },
      borderColor: {
        dominant: "var(--border-dominant-color)",
      },
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
      screens: {
        "-3xl": { max: "1635px" },
        "-2xl": { max: "1535px" },
        "-xl": { max: "1279px" },
        "-lg": { max: "1023px" },
        "-md": { max: "767px" },
        "-sm": { max: "639px" },
        mobile: { max: "1250px" },
        "-xs": { max: "425px" },
        "-2xs": { max: "300px" },
        "@md": { min: "640px", max: "767px" },
        "@lg": { min: "768px", max: "1023px" },
        "@xl": { min: "1024px", max: "1279px" },
        "@2xl": { min: "1280px", max: "1535px" },
        "-mobile": { min: "1251px" },
      },
    },
  },
  plugins: [],
};
export default config;
