/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
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
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans],
        montserrat: ['"MontSerrat"', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      xs: '256px',
      ...defaultTheme.screens,
    },
  },

  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
