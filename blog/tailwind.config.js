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
      width: {
        500: '500px',
        300: '300px',
        50: '50px',
      },
    },
  },

  plugins: [],
};
