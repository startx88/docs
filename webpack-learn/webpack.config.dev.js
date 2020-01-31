const path = require("path");

/**
 *  Configure webpack
 */

const regExp = {
  img: /\.(jpg|png|gif|jpeg)$/,
  js: /\.(js|jsx|ts|tsx)/,
  css: /\.css/,
  cssModule: /\.module\.css$/,
  scss: /\.scss/,
  scssModule: /\.module\.scss$/
};

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "build/"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: regExp.js,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: regExp.img,
        loader: "file-loader",
        options: {
          name: "images/[contenthash].[ext]"
        }
      },
      {
        test: regExp.css,
        exclude: regExp.cssModule,
        use: ["style-loader", "css-loader"]
      },
      {
        test: regExp.cssModule,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]"
              }
            }
          }
        ]
      },
      {
        test: regExp.scss,
        exclude: regExp.scssModule,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: regExp.scssModule,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]"
              }
            }
          },
          "sass-loader"
        ]
      }
    ]
  }
};
