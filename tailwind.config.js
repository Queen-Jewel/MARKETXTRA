/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
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
                main: "url('images/smiling-ethnic-woman-with-tablet 1.png')",
            },
            colors: {
                GreenT: "#008000",
                GreenL: "#00B800",
                Graytrue: "#141414",
                Gray: "#475467",
                Orange: "#D45800",
                GreenB: "#556B2F",
                TextGray: "#737373",
                Drwhite: "#FAFAFA",
                txtgray: "#424242",
                stepgray: "#D9D9D9",
                footer: "#ECF1F4",
                gradientCol: {
                    GreenT: "#008000",
                    GreenL: "#00B800",
                },
            },

            fontFamily: {
                Work: ["Karla"],
                Man: ["Manrope"],
                Rob: ["Roboto"],
            }
        },
    },
    plugins: [],
};
