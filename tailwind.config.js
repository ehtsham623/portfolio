/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //primary colors
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        //secondary
        successColor: "#00C300",
        errorColor: "#EB0076",
        warningColor: "#FFB907",
      },
      fontFamily: {
        body: ["Poppins"],
        serif: ["Poppins"],
        mono: ["Poppins"],
        sans: ["Poppins"],
      },
    },
  },
  plugins: [],
};
