/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#F2A945",
          500: "#F78410",
          600: "#E07516",
        },
      },
    },
  },
  plugins: [],
};

