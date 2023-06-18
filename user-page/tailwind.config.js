/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      height: {
        128: "28rem",
      },
      width: {
        128: "28rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
