/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jarvis: {
          bg: '#0d1117',
          panel: '#161b22',
          border: '#2d333b',
          accent: '#58a6ff',
          purple: '#bc8cff',
          green: '#3fb950',
        }
      }
    },
  },
  plugins: [],
}