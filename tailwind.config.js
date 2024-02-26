/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  externals: {
    // Specify Swiper as an external dependency
    swiper: 'swiper',
  },
  theme: {
    extend: {
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(20%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        slideInRight: 'slideInRight 0.2s forwards'
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      height: {
        '128': '32rem'
      },
      maxHeight: {
        '128': '32rem'
      },
      maxWidth: {
        256: '66rem'
      },
      width: {
        '256': '55rem'
      },
      colors: {
        darkTransparent: '#00000080',
        lightGray: '#F5F5F599',
        darkGray: '#0b0b0b',
        darkBackground: '#424242',
        nightRider: '#383434',
        darkSlate: '#121212',
        charcoal: '#1c1c1c',
        darkCharcoal: '#202020',
        darkSilver: '#252525',
        vividBlue: '#0074e4',
        electricBlue: '#037aee',
        brightBlue: '#0078f2',
      }
    },
  },
  plugins: [],
}

