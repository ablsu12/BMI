/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        '16': '16px'
      },
      screens: {
        xs: "345px",
        sm: "440px",
        md: "578px",
        lg: "1024px",
        xl: "1280px",
        '2xl': "1440px",
      },
      colors: {
        "primary-color": "#6C63FF",
        "secondary-color": "#000000",
      },
    },
  },
  plugins: [],
};
