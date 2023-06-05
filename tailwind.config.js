/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Global_Component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Provider/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Hooks/**/*.{js,ts,jsx,tsx,mdx}",
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
      "dark-teal": "#00838F",
      "dark-background": "#1E1E1E",
      "button-teal": "#00BCD4",
      "button-dark-teal": "#B2EBF2",
      ...require("tailwindcss/colors"),
    },
  },
  plugins: [],
};
