const { scopedPreflightStyles } = require('tailwindcss-scoped-preflight')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#AD0F17'
        },
        secondary: {
          DEFAULT: '#565756'
        }
      }
    }
  },
  plugins: [
    scopedPreflightStyles({
      cssSelector: '.textiles'
    }),
    require('daisyui')
  ]
}
