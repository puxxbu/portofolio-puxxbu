// @tailwindcss/line-clamp

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-mode="dark"]'],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#F1F1EF",
        dark: "#2A2835",
        primary: "#7D2AC0",
        "dark-primary": "#D3FF6C",
        secondary: "#dfdcdc",
        "dark-secondary": "#302e3a",
      },
      fontFamily: {
        signature: ["Kaushan Script", "cursive"],
      },
      screens: {
        mobile: {
          max: "768px",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
