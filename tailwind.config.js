/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: {
      sm: "376px",
      md: "768px",
      lg: "1440px",
    },
    extend: {
      colors: {
        GreenT: '#008000',
        GreenL: '#00B800',
        Graytrue: '#141414',
        Gray: '#475467',
        Orange: '#D45800',
        GreenB: '#556B2F',
        TextGray: '#737373',
        Drwhite: '#FAFAFA',
        txtgray: '#424242',
        stepgray:'#D9D9D9',
        footer: '#ECF1F4',

      },
      fontFamily: {
        Work: ['Work Sans'],
        Man: ['Manrope'],
        Rob: ['Roboto']
      }
    },
  },
  plugins: [],
}

