/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        vetivaGreen: "#9d7c40",
        vetivaGrey: '#c4c4c4',
      },
    },
  },
  plugins: [],
}