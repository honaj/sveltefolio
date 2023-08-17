/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'gray': '#282828',
      'white': '#fbf1c7',
      'orange': '#fe8019',
      'blue': '#83a598'
    },
    extend: {
      transitionProperty: {
        'colors': 'color',
      },
      fontFamily: {
        'Jost': ['Jost', 'sans-serif'],
      },
    }
  },
  plugins: []
};