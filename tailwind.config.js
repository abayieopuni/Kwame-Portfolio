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
        primary: "var(--primary-color)", // Custom primary color
      },
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
