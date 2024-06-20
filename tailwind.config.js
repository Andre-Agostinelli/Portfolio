/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // Enable Just-in-Time mode
  content: [
    './public/index.html', // explicit entry pt
    './public/**/*.html', // Include all HTML files in the public directory
    './src/**/*.js', // Include all JavaScript files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1c3d5a', // Example of custom color
      },
    },
  },
  variants: {},
  plugins: [],
  };

