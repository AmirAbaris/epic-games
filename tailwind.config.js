/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        darkTransparent: '#00000080',
        darkGray: '#0b0b0b',
        darkSlate: '#101014',
        charcoal: '#1c1c1c',
        darkCharcoal: '#202020',
        darkSilver: '#252525',
        vividBlue: '#0074e4',
        electricBlue: '#037aee',
        brightBlue: '#0078f2',
        lightGray: '#f8f8f8'
      }
    },
  },
  plugins: [],
}

