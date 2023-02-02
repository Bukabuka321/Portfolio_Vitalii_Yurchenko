/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hover: "rgba(0, 131, 255, 0.7);",
        border: "rgba(0, 131, 255, 0.38)",
        dark_back: "rgba(18, 0, 18, 0.26)",
      },
    },
  },
  plugins: [],
};
