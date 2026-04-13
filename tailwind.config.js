/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-out-down': {
          'from': { opacity: '1', transform: 'translateY(0px)' },
          'to': { opacity: '0', transform: 'translateY(10px)' }
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-up-slow': {
          '0%': { opacity: '0', transform: 'translateY(80px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-out-up': {
          'from': { opacity: '1', transform: 'translateY(0px)' },
          'to': { opacity: '0', transform: 'translateY(10px)' }
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'scale(0.95)' },
          'to': { opacity: '1', transform: 'scale(1)' }
        },
        'spin-reverse': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(-360deg)' }
        },
        // ✅ Nueva animación para popup
        'fade-in-scale': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-in-out forwards',
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-out-down': 'fade-out-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 2s ease-out',
        'fade-in-up-slow': 'fade-in-up-slow 4.5s ease-in-out',
        'fade-out-up': 'fade-out-up 0.5s ease-out',
        'ping-short': 'ping 0.5s linear',
        'spin-slow': 'spin 5s linear infinite',
        'fadeIn': 'fadeIn 0.5s ease-in-out forwards',
        'spin-reverse': 'spin-reverse 1s linear infinite',
        // ✅ Animación asociada al popup
        'fade-in-scale': 'fade-in-scale 0.3s ease-out forwards',
      },
      transitionProperty: {
        'bg': 'background-color',
      },
    },
  },
  plugins: [],
}
