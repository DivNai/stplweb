module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // theme: { extend: {} },
  plugins: [],
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          '0%': { opacity: 0, transform: 'translateX(-30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        slideBottom: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        slideLeft: 'slideLeft 2s ease',
        slideBottom: 'slideBottom 2s ease'
      }
    }
  }
}

