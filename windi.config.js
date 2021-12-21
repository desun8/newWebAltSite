import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";
import typography from "windicss/plugin/typography";

export default defineConfig({
  extract: {
    include: [
      "index.html",
      "nested/**/*.html",
      "src/templates/**/*.html",
      "src/landings/**/*.html",
      "src/scripts/**/*.{ts,vue}",
    ],
  },
  safelist: ["prose", "prose-sm", "m-auto"],
  darkMode: "class",
  plugins: [typography],
  theme: {
    boxShadow: {
      collapsing:
        "1px 0 0 0 #131313, 0 1px 0 0 #131313, 1px 1px 0 0 #131313, 1px 0 0 0 #131313 inset, 0 1px 0 0 #131313 inset",
    },

    letterSpacing: {
      wide: ".015em",
    },

    extend: {
      colors: {
        "true-black": colors.black,
        black: "#131313",
        "black-opacity-50": "rgba(0, 0, 0, 0.5)",
        "dark-grey": "#262626",
        "dark-grey-opacity-10": "rgba(38, 38, 38, 0.1)",
        gray: "#dfdddf",
        "true-gray-150": "rgb(239,239,239)",
        "true-gray-350": "#c4c4c4",
        sun: "#ff5000",
        "sun-opacity-50": "rgba(255, 80, 0, 0.5)",
      },

      gridTemplateColumns: {
        subscribe: "260px auto",
        fillAuto: "1fr auto",
        "auto-fill": "repeat(auto-fill, minmax(190px, 1fr))",
        autoFill: "repeat(auto-fill, minmax(170px, 1fr))",
      },

      spacing: {
        5.5: "1.375rem",
        19: "4.75rem",
        22: "5.5rem",
        "3/2": "150%",
        "5/4": "125%",
      },

      screens: {
        "1.5xl": { min: "1440px" },
      },

      fontSize: {
        "1.5xl": "1.375rem",
      },
    },
  },
});
