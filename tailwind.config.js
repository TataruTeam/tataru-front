/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const colors = require('tailwindcss/colors');

const boxShadowBase = '0 4px 0 0';

const toyShadows = () => {
  const elements = {};
  const toIgnore = [
    'lightBlue',
    'warmGray',
    'trueGray',
    'coolGray',
    'blueGray',
  ];

  Object.keys(colors).forEach((color) => {
    if (toIgnore.includes(color)) return;

    Object.keys(colors[color]).forEach((value) => {
      elements[
        `toy-${color}-${value}`
      ] = `${boxShadowBase} ${colors[color][value]}`;
    });
  });

  return elements;
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand'],
      },
      boxShadow: {
        ...toyShadows(),
      },
    },
  },
  plugins: [],
};
