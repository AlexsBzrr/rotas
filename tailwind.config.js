/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#c92071",
        secondary: "#b5b6f2",
        tertiary: "#991956",
        error: "#ee4266",
        success: "#52ca76",
        warning: "#f6aa1c",
        info: "#2196f3",
        white: "#ffffff",
        yellow: "#E7FF86",
      },
    },
  },
  plugins: [],
};
