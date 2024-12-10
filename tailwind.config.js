/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add custom properties
      content: {
        empty: "''", // Support for `content: "";`
      },
      transitionDuration: {
        400: "400ms", // Custom duration for smoother transitions
      },
      colors: {
        cream: '#f6eee0',
        peach: '#e4b7a0',
        desertSun: '#a45c40',
        coral: '#f79489',
      }
    },
  },
  plugins: [
    // Add pseudo-element support using plugins
    function ({ addVariant }) {
      addVariant("before", "&::before");
      addVariant("after", "&::after");
    },
  ],
};
