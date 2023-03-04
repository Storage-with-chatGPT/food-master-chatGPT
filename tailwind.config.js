/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  plugins: [require('tailwind-scrollbar-hide')],
  theme: {
    extend: {
      colors: {
        'my-red': '#FF7B54',
        'my-orange': '#FFB26B',
        'my-yellow': '#FFD56F',
        'my-green': '#939B62',
        'my-gray': '#d1d5db',
      },
    },
  },
};
