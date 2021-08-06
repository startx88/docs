const path = require('path');
const rules = require('./rules');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: rules.css,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /node_modules/,
      },
      {
        test: rules.scss,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        exclude: /node_modules/,
      }
    ]
  }
})