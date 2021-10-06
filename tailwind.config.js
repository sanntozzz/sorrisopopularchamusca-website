const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
    },
    extend: {
      colors: {
        darkBlue: "#116089",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
