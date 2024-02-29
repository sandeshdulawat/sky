/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["poppins", "sans-serif"],
        monst: ["Montserrat"],
        pop: ["Poppins"],
        opensans: ["Open Sans"],
        orb: ["Orbitron"],
        curs: ["Cedarville Cursive"],
        pro: ["Protest Revolution"],
        
      },
      colors: {
        primary: "#bc4444",
        secondary: "#ebebeb",
        tertiary: "#189ba6",
        primaryWhite: "#fff",
        primaryBlack: "#000",
        darkBrown: "#916f00",
        grayy: "#dbe4e9",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
