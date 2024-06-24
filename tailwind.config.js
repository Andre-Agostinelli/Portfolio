/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // Enable Just-in-Time mode
  content: [
    './public/index.html', // explicit entry pt
    './public/**/*.html', // Include all HTML files in the public directory
    './src/**/*.{html,js}', // Include all JavaScript files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1c3d5a', // Example of custom color
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
    },
  },
  variants: {},
  plugins: [],
  };

