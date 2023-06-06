/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  corePlugins: {
    preflight: false,
  },
  purge: [
    "./index.html",
    "./src/**/*.vue",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EA7C69",
        secondary: "#9288E0",
        typo: {
          dark: "#3B5162",
          gray: "#889898",
          light: "#ABBBC2",
          lighter: "#E0E6E9",
        },
        base: {
          white: "#FFFFFF",
          bg: "#FAFAFA",
          "dark-line": "#393C49",
          "dark-bg-1": "#252836",
          "dark-bg-2": "#1F1D2B",
          "form-bg": "#2D303E",
        },
        accent: {
          green: "#50D1AA",
          red: "#FF7CA3",
          orange: "#FFB572",
          blue: "#65B0F6",
          purple: "#9290FE",
        },
        danger: {
          300: "#E03F34",
          50: "#F6D8D6",
        },
        warning: {
          300: "#E07324",
          50: "#F8DECB",
        },
        success: {
          300: "#1B9F60",
          50: "#C5E9D7",
        },
      },
      boxShadow: {
        primary: "0px 8px 24px rgba(234,124,105,0.3)",
        secondary: "0px 8px 24px rgba(146,136,224,0.3)",
      },
      fontSize: {
        h1: [
          "28px",
          {
            fontWeight: "600",
          },
        ],
        h2: [
          "20px",
          {
            fontWeight: "600",
          },
        ],
        "body-large": "16px",
        "body-normal": "14px",
        "body-small": "12px",
        "button-normal": "14px",
        "button-small": "12px",
        "display-32": "32px",
        "display-20": "20px",
      },
    },
  },
  plugins: [],
};
