import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_bg_color: "var(--primary_bg_color)",
        secondary_bg_color:"var(--secondary_bg_color)",
        primary_text_color:"var(--primary-text-color)",
        border_color:"var(--border-color)",
        button_bg_color:"var(--button-bg-color)"
      },
    },
  },
  plugins: [],
};
export default config;
