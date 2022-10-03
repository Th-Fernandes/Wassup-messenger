/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // screens: {},
    colors: {
      "brand": "#6636F1",
      "brand-hover": "#551FF0",
      "dark-bg": {
        200: "#181818",
        400: "#242424"
      },
      "light-txt": {
        100: "#FFFFFF",
        200: "#C3C3C3"
      },
      "dark-txt": {
        100: "#121212"
      },
      "error": "#F9627D"
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"]
    }
  },
  plugins: [],
};
