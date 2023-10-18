/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm:'480px',
      md:'650px',
      xl:'965px',
      lg:'1400px',
    },
    extend: {
      fontFamily :{
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata'],
      },
      letterSpacing:{
        widest:'.3em'
      }
    },
  },
  plugins: [],
}


