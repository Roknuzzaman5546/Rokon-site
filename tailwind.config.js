/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Lobester: "'Lobster', sans-serif",
        Slabo: "'Slabo 27px', serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

