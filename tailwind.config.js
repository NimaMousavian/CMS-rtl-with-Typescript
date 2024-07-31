/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#a66fff",
          main: "#751aff",
          dark: "#5503f0",
          contrastText: "#fff",
          lighter: "#dac4ff",
        },
      },
    },
  },
  plugins: [],
};
