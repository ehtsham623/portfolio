/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //primary colors theme
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        //secondary
        successColor: "#00C300",
        errorColor: "#EB0076",
        warningColor: "#FFB907",
        //backgrounds
        background: "#222222",
        //text color
        textSecondary: "#A2A2A2",
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
