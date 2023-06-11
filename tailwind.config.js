/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    animation: {
      "animate-bounce": "bounce 4s infinite",
    },
    colors: {
      "custom-teal": "#EAFBFB",
      "dark-teal": "#23464A",
      "dark-background": "#1E1E1E",
      "button-teal": "#00BCD4",
      "button-dark-teal": "#B2EBF2",
      "custom-orange": "#FBC131",
      ...require("tailwindcss/colors"),
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
