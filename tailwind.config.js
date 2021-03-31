module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        extend: {
          brand: {
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
            navy: "#111827",
          },
        },
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
