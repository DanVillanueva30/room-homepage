/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#a1a1a1',
        'darker-gray': '#454545',
      },
      fontFamily: {
        'spartan': ["League Spartan", 'sans-serif']
      },
      screens: {
        '10xl': '2500px'
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

