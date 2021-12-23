const { merge } = require("webpack-merge")
const Dotenv = require("dotenv-webpack")

const common = require("./common")

module.exports = merge(common, {
  mode: "production",
  output: {
    publicPath: "../dist",
  },
  plugins: [new Dotenv({ path: ".env.production" })],
})
