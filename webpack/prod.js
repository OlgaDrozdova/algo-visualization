const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const shareable = require("./shareable");

const htmlMinify = {
  removeComments: true,
  preserveLineBreaks: true,
  collapseWhitespace: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  removeStyleLinkTypeAttributes: true,
  keepClosingSlash: true,
};

module.exports = {
  mode: "production",
  entry: {
    app: path.resolve("src", "index.tsx"),
  },
  output: {
    filename: "js/[name]_[contenthash].js",
    path: path.resolve("dist"),
    publicPath: "",
  },
  ...shareable,
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
        },
        include: /src/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        defaultVendors: {
          name: "vendors",
          test: /node_modules/,
          minSize: 10000,
          maxSize: 250000,
          chunks: "initial",
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      APP_ENV: JSON.stringify("production"),
    }),
    new HtmlWebpackPlugin({
      chunks: ["app"],
      filename: "index.html",
      template: path.resolve("templates", "index.html"),
      minify: { ...htmlMinify },
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: path.resolve("files"), to: path.resolve("dist") }],
    }),
  ],
};
