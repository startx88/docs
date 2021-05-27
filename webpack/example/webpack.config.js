const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack'); //to access built-in plugins

const production = process.env.NODE_ENV;

// export 
module.exports = {
  mode: "development",
  //devtool: production === "development" ? "eval-source-map" : "source-map",
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundel.js',
    chunkFilename: (pathData) => {
      console.log(pathData.chunk.name)
      return pathData.chunk.name === 'main' ? '[name].js' : '[name]/[name].js';
    },
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    })
  ]
};
