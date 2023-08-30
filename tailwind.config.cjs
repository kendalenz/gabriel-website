/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'grey-500': '#262626',
        'grey-400': '#505050',
        'grey-100': '#D3D3D3',
        'blue-100': '#4682B4',
        'blue-400': '#145A95',
        'black': '#000000'
      },
      backgroundImage: (theme) => ({
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      content: {
      
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}

