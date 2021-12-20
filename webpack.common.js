// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const isDev = process.env.NODE_ENV !== "production"

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(css|s[ac]ss)$/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jp?eg|svg|webp|)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "react typescript app",
      template: "./public/index.html",
    }),
  ].concat(isDev ? [] : [new MiniCssExtractPlugin()]),
}

// TODO add fonts and video
