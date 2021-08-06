/**
 * Loaders:
 *
 * 1. Webpack only understand javascript and json file.
 * 2. Loaders allow webpack to process other types of files and convert them into valid modules that can be used in the application.
 * 3. Loaders are configured in the webpack.config.js file.
 *
 * Loaders has two properties:
 * - test: A regexp to match the file type.
 * - use: Property indicates which loader should be used to do the transforming.
 *  
 *  
 * */

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: ['json-loader']
      }
    ]
  }
}

/*
* The configuration above has defined a rules property for a single module with two required properties: test and use.
*
* Note:
* "Hey webpack compiler, when you come across a path that resolves to a '.txt' file inside of a require()/import statement,
*  use the raw-loader to transform it before you add it to the bundle."
*
*/