const path = require("path")
const { merge } = require("webpack-merge")
const Dotenv = require("dotenv-webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const common = require("./webpack.common")

module.exports = merge(common, {
  mode: "development",
  output: {
    publicPath: "/",
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, "public"),
    },
    historyApiFallback: true,
  },
  plugins: [new Dotenv({ path: ".env.development" })],
})
