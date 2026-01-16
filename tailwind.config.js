/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.jsx",
    "./components/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        'orange-brand': {
          50: '#fff5eb',
          100: '#ffe8d6',
          200: '#ffd1ad',
          300: '#ffb984',
          400: '#ff9d52',
          500: '#FF8C00',
          600: '#e67e00',
          700: '#cc7000',
          800: '#994d00',
          900: '#663300',
        },
        'brand-dark': '#1a1a1a',
      },
    },
  },
  plugins: [],
}
