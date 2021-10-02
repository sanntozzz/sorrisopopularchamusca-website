const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
      green: colors.green,
      blue: colors.blue,
      yellow: colors.yellow,
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
