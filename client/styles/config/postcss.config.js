var tailwindcss = require("tailwindcss")

module.exports = {
  plugins: [
    require("postcss-easy-import"),
    tailwindcss("./client/styles/config/tailwind.config.js"),
    require("autoprefixer"),
    require("cssnano"),
  ],
}
