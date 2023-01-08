/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontWeight: {
        "2xlbold": 400,
      },
      colors: {
        primary: "#55198B",
      },
      fontFamily: {
        // Montserrat: ["Montserrat", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
        160: "40rem",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
