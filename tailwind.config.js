/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./*.js"],
    theme: {
        extend: {
            colors: {
                primary: '#607d8b',    // Blue Grey 500
                secondary: '#263238',  // Blue Grey 900
                accent: '#E2E6EA',     // Theme Base Color
                dark: '#1a202c',       // Dark Gray
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            animation: {
                'fade-up': 'fadeUp 1s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
