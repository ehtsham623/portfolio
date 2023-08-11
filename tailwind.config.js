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
        blueColor: "rgb(65 105 224)",
        greenColor: "rgb(101 185 92)",
        yellowColor: "rgb(255 152 0)",
        pinkColor: "rgb(254 94 148)",
        orangeColor: "rgb(250 91 15)",
        salmonColor: "rgb(242 153 118)",
        purpleColor: "rgb(145 1 238)",
        skyblueColor: "rgb(0 212 188)",
        cadetblueColor: "rgb(94 157 159)",
        tartorangeColor: "rgb(235 73 76)",
        oliveColor: "rgb(101 109 65)",
        redColor: "rgb(254 0 0)",

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
