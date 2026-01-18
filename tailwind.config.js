/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'barbar-black': '#0f0f0f',
                'barbar-dark-gray': '#1a1a1a',
                'barbar-green': '#556b2f',
                'barbar-gold': '#c5a059',
            },
            fontFamily: {
                'oswald': ['Oswald', 'sans-serif'],
                'sans': ['Inter', 'Noto Sans JP', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
