/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./build/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                blue: {
                    light: '#00317ab3',
                    dark: '#123468'
                },
                aquamarine: {
                    default: '#81bcba'
                },
                grey: {
                    default: '#626262'
                },
                shadow: {
                    default: '#e8f6f6'
                }
            }
        },
        fontFamily: {
            'montserrat': ['Montserrat']
        }
    },
    plugins: [],
}