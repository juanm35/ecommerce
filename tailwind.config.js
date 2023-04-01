/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'jungle-grey': '#222831',
        'jungle-green': '#72B01D',
        'jungle-greyblue': '#76949F',
        'jungle-blue': ' #1D72B0'
      },
      maxWidth: {
        '64': '16rem'
      },
      maxHeight:{
        '50s': '50vh',
        '70s': '70vh'
      }
    },
  },
  plugins: [],
}
