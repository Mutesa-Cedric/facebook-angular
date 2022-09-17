/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        "blue-darkest":"#0C141C",
        "blue-dark":"#0D1D2E",
        "blue-light":"#0C88EF",
        "white-primary":"#D8D8D8"
      }
    },
  },
  plugins: [],
}
