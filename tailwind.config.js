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
    extend: {},
  },
  theme: {
    extend: {
        keyframes: {
            wiggle: {
                '0%, 100%': {
                    transform: 'rotate(-3deg)'
                },
                '50%': {
                    transform: 'rotate(3deg)'
                }
            },            
            'fade-in': {
                '0%': {
                    opacity: '0',
                },
                '100%': {
                    opacity: '1',
                },
            },  
            'fade-in-down': {
                '0%': {
                    opacity: '0',
                    transform: 'translateY(-10px)'
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateY(0)'
                },
            },
            'fade-out-down': {
                'from': {
                    opacity: '1',
                    transform: 'translateY(0px)'
                },
                'to': {
                    opacity: '0',
                    transform: 'translateY(10px)'
                },
            },
            'fade-in-up': {
                '0%': {
                    opacity: '0',
                    transform: 'translateY(50px)'
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateY(0)'
                },
            },
            'fade-out-up': {
                'from': {
                    opacity: '1',
                    transform: 'translateY(0px)'
                },
                'to': {
                    opacity: '0',
                    transform: 'translateY(10px)'
                },
            }
        },
        animation: {
            wiggle: 'wiggle 1s ease-in-out infinite',
            'fade-in': 'fade-in 2s ease-out',
            'fade-in-down': 'fade-in-down 0.5s ease-out',
            'fade-out-down': 'fade-out-down 0.5s ease-out',
            'fade-in-up': 'fade-in-up 2s ease-out',
            'fade-out-up': 'fade-out-up 0.5s ease-out',
            'ping-short': 'ping 0.5s linear',
            'spin-slow': 'spin 5s linear infinite',
        },
        animationDelay: {
          '1s': '1s',
          '2s': '2s',
          '3s': '3s',
          '4s': '4s',
          '5s': '5s',
        },
    },
  },
  variants: {
    extend: {
      animationDelay: ['hover', 'focus'],
    },
  },
  plugins: [],
}