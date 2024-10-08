/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        fontWeight: {
            thin: '100',
            hairline: '100',
            extralight: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            'extra-bold': '800',
            black: '900',
        },
        screens: {
            'xs': '300px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            backgroundImage: {
                main: "url('images/smiling-ethnic-woman-with-tablet 1.png')"
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
                custom: "#929AAA",
                usbord: "#C5C5C5",
                lightgreen: '#ECFDF3',
                bgred: '#FEF3F2',
                green: '#12B76A',
                mainred: '#F04438',
                grayinc:"#525252",
                bbygray: '#A3A3A3',
                gradientCol: {
                    GreenT: '#008000',
                    GreenL: '#00B800',
                },
            },

            fontFamily: {
                Work: ["Karla"],
                Man: ["Manrope"],
                Rob: ["Roboto"],
                Inter: ['Inter']
            },

            boxShadow: {
                '3xl': '0 8px 16px 0px rgba(0, 0, 0, 0.2)',
            }
        },
    },
    plugins: [],
};