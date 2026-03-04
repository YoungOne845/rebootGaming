/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#050505',
          purple: '#bc13fe',
          blue: '#1e90ff',
        }
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(188, 19, 254, 0.4)',
        'neon-blue': '0 0 20px rgba(30, 144, 255, 0.4)',
        'neon-purple-hover': '0 0 40px rgba(188, 19, 254, 0.8)',
        'neon-blue-hover': '0 0 40px rgba(30, 144, 255, 0.8)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}