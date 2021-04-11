module.exports = {
  purge: ["./src/**/*.{js,html}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
            favPink: "#f02e65",
            favWhite: "#ffffff",
            favLightGray: "#40404c",
            favDarkerGray: "#8f8f8f",
            appleGreen: "#5EBD3E",
            appleYellow: "#FFB900",
            appleOrange: "#F78200",
            appleRed: "#E23838",
            applePurple: "#973999",
            appleBlue: "#009CDF",
            darkPurple: "#221a23",
            darkPurple2: "#1b0525",
            navy: "#111827",
      },
      fontFamily: {
        gilroy: ["Gilroy"],
        bogue: ["Bogue"]
        }
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
