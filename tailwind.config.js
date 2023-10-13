/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.tsx', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#ffffff',
        black: '#000000',
        theme: {
          primary: '#20E1B2',
          lightGrey: '#FCF8FF',
          grey: '#EEE9F0',
          medium: '#9F9AA1',
          mediumDark: '#424242',
          green: '#437919',
        },
      },
    },
  },
  plugins: [],
};
