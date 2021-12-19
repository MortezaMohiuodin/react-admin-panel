const { merge } = require("webpack-merge")
const Dotenv = require("dotenv-webpack")

const common = require("./webpack.common")

module.exports = merge(common, {
  mode: "production",
  output: {
    publicPath: "/dist",
  },
  plugins: [new Dotenv({ path: ".env.production" })],
})
