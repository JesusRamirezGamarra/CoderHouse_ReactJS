module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-rug": {
          400: "#f19182",
          500: "#ef7a68",
          600: "#bf422e",
          700: "#FF0000",          
          900: "#CC0000",
        },
        fontFamily: {
          LeagueGotic: ["League Gothic", "sans-serif"],
        },
        SmoochSans: ["Smooch Sans", "sans-serif"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-8deg)",
          },
          "50%": {
            transform: "rotate(8deg)",
          },
        },
        beat: {
          "0%, 100%": {
            transform: "scale(1);",
            opacity: "1",
          },
          "50%": {
            transform: "scale(2.4);",
            opacity: "0.4",
          },
        },
      },
      animation: {
        wiggle: "wiggle 0.3s ease-in-out",
        beat: "beat 0.25s alternate infinite",
      },
    },
  },
  plugins: [],
};
