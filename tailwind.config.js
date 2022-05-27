const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "spotify-black": {
          400: "#191414",
        },
        "spotify-green": {
          400: "#1DB954",
        },
      },
    },
    fontFamily: {
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      serif: ["Montserrat", ...defaultTheme.fontFamily.serif],
    },
    plugins: [],
  },
};
