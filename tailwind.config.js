module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'playfairDisplay': ['Playfair Display']
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-fast': 'spin 0.3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(3deg)'
          },
          '50%': {
            transform: 'rotate(-3deg)'
          }
        }
      }
    },
  },
  plugins: [],
}
