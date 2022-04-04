module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "4rem",
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
