/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        Fraunces: "Fraunces",
        HelveticaNow: "HelveticaNow",
      },
      colors: {
        primary: "#EE4D31",
        secondary: "#553566",
        primary_dark: "#B63A25",
        accent: "#F89107",
        light_pallete: "#F8E8D8",
        "main-bg": "#222222",
        "main-dark": "#171717",
        "dark-light": "#292929",
        "gray": "#BABABA",
        dark: "#101010",
      },
      gridTemplateColumns: {
        "16-auto": "250px auto",
      },
    }
  },
  plugins: [],
}