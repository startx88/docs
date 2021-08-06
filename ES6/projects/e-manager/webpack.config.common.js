const path = require('path');
const Rule = require('./rules');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: Rule.img,
        use: "file-loader",
        exclude: /node_modules/,
      },
      {
        test: Rule.js,
        use: "babel-loader",
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, './public/index.html')
    })
  ]
}