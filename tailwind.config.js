/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
