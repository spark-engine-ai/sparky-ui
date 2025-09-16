/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./example.html",
    "./examples/**/*.{html,js}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('./index.js')
  ],
}