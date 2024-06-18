/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  mode: 'jit', // Just-in-time for smaller css/faster build
  purge: ['./public/**/*.html', './src/**/*.js'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};

