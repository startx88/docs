import path from "path";
module.exports = {
  devtool: "eval-cheap-module-source-map",
  entry: "./src/index.ts",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist"),
    public: "./",
    library: 'appkart',
    libraryTarget: 'umd',
    filename: 'appkart.js',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclued: /node_modules/,
        use: "babel-loader"
      }
    ]
  }
};
