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
        loader: {
          '0%': {
            width: '0%',
            backgroundColor: 'transparent',
          },
          '100%': {
            width: '100%',
            backgroundColor: '#202020',
          }
        }
      },
      animation: {
        loader: 'loader 5s linear forwards'
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
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
        mediumGray: '#a4a4a4',
        darkGray: '#2a2a2a',
        lightDarkGray: '#666666',
        darkBackground: '#2a2a2a',
        nightRider: '#383434',
        darkSlate: '#121212',
        charcoal: '#1c1c1c',
        darkCharcoal: '#202020',
        darkSilver: '#252525',
        vividBlue: '#0074e4',
        electricBlue: '#037aee',
        brightBlue: '#0078f2',
        lightGray: '#f8f8f8',
        semiTransparent: '#00000080'
      }
    },
  },
  plugins: [],
}

