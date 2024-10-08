const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    index: "./",
    "en/index": "./en",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [require("autoprefixer")],
              },
            },
          ],
        }),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: "file-loader?name=./fonts/[name].[ext]",
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new CopyWebpackPlugin([
      { from: "./index.html", to: "../dist/index.html" },

      { from: "./fonts", to: "../dist/fonts" },
      { from: "./particles-configs", to: "../dist/particles-configs" },

      { from: "./images", to: "../dist/en/images" },
      { from: "./fonts", to: "../dist/en/fonts" },
      { from: "./en/js-off.html", to: "../dist/en/js-off.html" },
      { from: "./particles-configs", to: "../dist/en/particles-configs" },
    ]),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "window.$": "jquery",
    }),
    new ExtractTextPlugin({
      filename: "[name].[hash].css",
    }),
    new HtmlWebpackPlugin({
      inject: "head",
      filename: "en/index.html",
      template: "en/index.html",
      chunks: ["en/index"],
    }),
  ],
  resolve: {
    extensions: [".js"],
    modules: [
      path.resolve(__dirname + "/src"),
      path.resolve(__dirname + "/node_modules"),
    ],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
};
