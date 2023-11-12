/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#202C33",
        primaryLight: "#8696A0",
        primaryDark: "#111B21",
        primaryGreen: "#08935D",
        primaryGreenIcon: "#00A884",
        primaryBlue: "#4699BD",
        iconColor: "#AEBAC1",
        background: "#0C1317",
        emptyScreen: "#222E35",
        textLight: "#D1D3D3",
        borderLight: "#313D45",
        "bg-outgoing-background": "#005C4B",
      },
      gridTemplateColumns: {
        main: "1fr 2.3fr",
      },
    },
  },
  plugins: [require("daisyui")],
};
