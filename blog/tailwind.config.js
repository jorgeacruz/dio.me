/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: ['./src/**/*.{html,ts}'],

  theme: {
    extend: {
      fontFamily: {
        primary: ['Oswald'], //h1, titles
        secondary: ['Oswald'], // h2, h3, h4
      },
      colors: {
        primary: '#040995cc',
        secondary: '#ffcc',
      },
    },
  },

  plugins: [],
};
