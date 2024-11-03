/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        '171717': "#171717", // black
        'fad02c': "#fad02c", // yellow
        '2e2e2e': "#2e2e2e", // dark gray
        'dcb72a': "#dcb72a", // yellow
        'e3e3e3': "#e3e3e3", // light gray
      },
    },
    fontFamily: {
      Sukhumvit: ['"Sukhumvit"', "sans-serif"],
    },
  },
  plugins: [],
};
