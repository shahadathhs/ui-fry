/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ['Clash Display', 'sans-serif'],
      },
    },
  },
  plugins: [
    // daisy ui
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      // white
      "light",
      "cupcake",
      "corporate",
      // black
      "dark",
      "synthwave",
      "black",
      "luxury",
      "dracula",
      "night",
      "dim",
    ],
  },
}

