/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        burtons: "Burtons",
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
