import type { Config } from "tailwindcss";
import scrollbar from "tailwind-scrollbar";
import fluid, { extract } from "fluid-tailwind";

export default {
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      // Add custom breakpoints
      fxl: "1440px",
      fsm: "430px",
    },
    extend: {
      colors: {
        GreenT: "#008000",
        GreenL: "#00B800",
        Graytrue: "#141414",
        Gray: "#475467",
        Orange: "#D45800",
        GreenB: "#556B2F",
        TextGray: "#737373",
        Drwhite: "#FAFAFA",
        txtgray: "#424242",
        stepgray: "#D9D9D9",
        footer: "#ECF1F4",
        indigo: "#333333",
        grayTrue1: "#F5F5F5",
        grayTrue25: "#FCFCFC",
        newT: "#475467",
        custom: "#929AAA",
        usbord: "#C5C5C5",
        lightgreen: "#ECFDF3",
        bgred: "#FEF3F2",
        green: "#12B76A",
        mainred: "#F04438",
        grayinc: "#525252",
        bbygray: "#A3A3A3",
        gradientCol: {
          GreenT: "#008000",
          GreenL: "#00B800",
        },
      },
    },
  },
  plugins: [scrollbar, fluid],
} satisfies Config;