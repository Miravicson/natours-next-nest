// const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,css}',
    './components/**/*.{js,ts,jsx,tsx,css}',
    './app/**/*.{js,ts,jsx,tsx,css}',
    './modals/**/*.{js,ts,jsx,tsx,css}',
    './styles/**/*.{js,ts,jsx,tsx,css}',
  ],
  theme: {
    screens: {
      'big-desktop': '1800px',
      'tab-land': { max: '1200px' },
      'tab-port': { max: '900px' },
      phone: { max: '600px' },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        'grid-width': '114rem',
        'gutter-vertical': '8rem',
        'gutter-vertical-small': '6rem',
        'gutter-horizontal': '6rem',
      },
      maxWidth: ({ theme }) => ({
        ...theme('spacing'),
      }),
      colors: {
        primary: '#55c57a',
        'primary-light': '#7ed56f',
        'primary-dark': '#28b485',
        'secondary-light': '#ffb900',
        'secondary-dark': '#ff7730',
        'tertiary-light': '#2998ff',
        'tertiary-dark': '#5643fa',
        'grey-light': {
          1: '#fafafa',
          2: '#eeeeee',
        },
        'grey-dark': {
          1: '#777',
          2: '#999',
          3: '#333',
        },
      },
      fontSize: {
        'default-size': '1.6rem',
      },
    },
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
    },
  },
  // plugins: [typography],
  plugins: [],
};
