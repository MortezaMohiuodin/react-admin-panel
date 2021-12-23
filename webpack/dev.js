const path = require("path")
const { merge } = require("webpack-merge")
const Dotenv = require("dotenv-webpack")

const common = require("./common")

module.exports = merge(common, {
  mode: "development",
  output: {
    publicPath: "/",
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, "../public"),
    },
    historyApiFallback: true,
  },
  plugins: [new Dotenv({ path: ".env.development" })],
})
