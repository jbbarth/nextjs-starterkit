// https://github.com/zeit/next.js/issues/1735#issuecomment-351198376
require("@babel/register")({
  babelrc: false,
  presets: [
    [
      "@babel/env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
})

module.exports = { default: require("./api") }
