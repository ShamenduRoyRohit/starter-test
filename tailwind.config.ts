import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
              50:  "#E6F1FB",
              100: "#CCE3F7",
              500: "#1565C0", // main
              600: "#0D47A1", // hover
            },
            orange: {
              50:  "#FFEDE1",
              100: "#FFD4B5",
              500: "#F27321", // main accent :contentReference[oaicite:1]{index=1}
              600: "#D85F15", // hover
            },
            teal: {
              50:  "#E0F7F3",
              100: "#B3EBDF",
              500: "#00A79D",
              600: "#008C84",
            },            
            gray: {
              50:  "#F5F7FB",
              100: "#E4E7EE",
              500: "#5E6161", 
              700: "#2F3437",
            },

        },
      },
    },
  },
  plugins: [],
};
export default config;
