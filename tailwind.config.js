/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBE8D3",
        sand: "#E9DFC6",
        forest: "#2D6B49",
        red: "#BE2E2E",
        orange: "#F66135",
        yellow: "#FFC542",
        green: "#3CA67A",
      },
    },
  },
  plugins: [],
}
