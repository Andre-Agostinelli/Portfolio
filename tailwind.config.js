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
        'tahiti': {
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
    },
  },
  variants: {},
  plugins: [],
  };

