module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        glow: "glow 1s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          from: { textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0077b5, 0 0 40px #0077b5, 0 0 50px #0077b5, 0 0 60px #0077b5, 0 0 70px #0077b5;" },
          to: { textShadow: "0 0 20px #fff, 0 0 30px #0995cc, 0 0 40px #0995cc, 0 0 50px #0995cc, 0 0 60px #0995cc, 0 0 70px #0995cc, 0 0 80px #0995cc;" },
        },
      },
      container: {
        padding: {
          center: true,
          xs: "0.5rem",
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
      colors: {
        // Red && warningcolors = negative = #ED1C24
        grey: {
          100: "#f5f5f5",
          900: "#333",
        },
        github: {
          light: "#f5f5f5",
          DEFAULT: "#333",
        },
        linkedin: {
          light: "#caccce",
          grey: "#86888a",
          DEFAULT: "#0077b5",
          dark: "#313335",
        },
      },
    },
    fontFamily: {
      write: '"Patrick Hand SC"',
    },
  },
  plugins: [require("flowbite/plugin")],
};
