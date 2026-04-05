/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.{js,html}",
    "./components/**/*.js",
    "./js/**/*.{js}"
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          100: '#F5F5DC',
          200: '#E8E8CC',
          300: '#DBDBC2'
        },
        primary: {
          green: '#748E63',
          dark: '#2C3E20'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
      
    },
  },
  plugins: [],
}
