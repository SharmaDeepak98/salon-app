// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoCondensed: ['"Roboto Condensed"', 'sans-serif'],
        instrumentSerif: ['"Instrument Serif"', 'serif'],
        dancingScript: ['"Dancing Script"', 'cursive'],
      },
      colors:{
        cream:'#fcf0d6'
      }
    },
  },
  plugins: [],
}
