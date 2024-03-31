/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/client/**/*.{js,jsx,ts,tsx}", "./src/client/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
