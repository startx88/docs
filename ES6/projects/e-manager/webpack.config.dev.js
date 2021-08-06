const path = require('path');
const rules = require('./rules');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');

// dev config
module.exports = merge(common, {
  mode: "development",
  devtool: "eval",
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: rules.css,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
      {
        test: rules.scss,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/,
      }
    ]
  }
})