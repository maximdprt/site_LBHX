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
        // Palette LBHX 2026
        // Bleu marine foncé
        "bleu-atlantique": "#1B3A6B",
        // Bleu moyen (formes décoratives)
        "bleu-clair": "#4A6FA5",
        // Jaune (tenue arbitre)
        "jaune-sable": "#F5C842",
        // Rouge / corail principal (CTA, accents)
        "orange-vif": "#E8334A",
        // Blanc (fond principal)
        "blanc-sable": "#FFFFFF",
        // Rouge foncé (ombre / variantes)
        "rouge-fonce": "#C4203A",
        // Rose / magenta (éléments ponctuels si besoin)
        "rose-magenta": "#E8557A",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
