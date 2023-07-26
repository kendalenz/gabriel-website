/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'red-100': '#D2122E',
        'grey-500': '#262626',
        'grey-400': '#505050'
      }
    },
  },
  plugins: [],
}

