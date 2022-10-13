module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        blue: {
          darker: "#4d4dff",
          dark: "#3655b3",
          light: "#d3deff",
          lighter: "#a6bcff",
        },
        // red: "#be1809"
        red:{
          100:"#fff5f5",
          400:"#fc8181",
          500:"#f56565",
          700:"#c53030",
        }
      },
    },
  },
  variants: {
    extend: {
      scrollbar: ["rounded"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
