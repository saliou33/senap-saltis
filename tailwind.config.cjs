/** @type {import('tailwindcss').Config} */
const defaulTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
      primary: '#77D19D',
      secondary: '#EFAFBC',
      tertiary: '#E0E343',
      grayup: '#444444',
      graydown: '#787878',
    },
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', ...defaulTheme.fontFamily.sans],
        montserrat: ['"MontSerrat"', ...defaulTheme.fontFamily.sans],
      },
    },
  },

  plugins: [],
};
