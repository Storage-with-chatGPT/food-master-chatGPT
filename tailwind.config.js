/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
  theme: {
    extend: {
      colors: {
        "my-red": "#FF7B54",
        "my-orange": "#FFB26B",
        "my-yellow": "#FFD56F",
        "my-green": "#939B62",
        "my-gray": "#d1d5db",
      },
    },
  },
};
