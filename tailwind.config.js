/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E1E",
        transwhite: "rgba(255, 255, 255, 0.7)",
        buttonblue: "#4169E1",
        lightblue: "#A8BAF1",
         gray: "#808080",
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'curly': ['Dancing Script']
    },

      backgroundImage: {
        "main-bg": "url('/public/assets/background.png')",
      },
    },
    plugins: [],
  },
};
