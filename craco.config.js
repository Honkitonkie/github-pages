module.exports = {
  style: {
    postcssOptions: {
      plugins: [require("tailwindcss"), require("autoprefixer"), require("flowbite/plugin")],
    },
  },
};
