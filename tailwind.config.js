const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      pink: {
        light: '#FFF0F6',
        dark: '#FE3A8C',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#555555',
        light: '#EAE7E7',
      },
      black: 'black'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
