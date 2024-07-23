/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: {
      sm: "430px",
      md: "768px",
      lg: "1024px",
    },
    
    extend: {
      backgroundImage : {
        'main': "url('images/smiling-ethnic-woman-with-tablet 1.png')",
      },
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
        indigo: '#333333',
        grayTrue1: "#F5F5F5",
        grayTrue25: "#FCFCFC",
        newT:"#475467",
        gradientCol: {
        GreenT: '#008000',
        GreenL: '#00B800',
      },
      },
      
      
      fontFamily: {
        Work: ['Work Sans'],
        Man: ['Manrope'],
        Rob: ['Roboto'],
        Inter: ['Inter']
      }
    },
  },
  plugins: [],
}

