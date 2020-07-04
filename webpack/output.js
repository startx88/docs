/**
 * Output: How to write the compiled file into disk.
 * Note that: while there can be multiple entry points, only one output configuration is specified.
 */

// webpack.config.js
module.exports = {
  output: {
    filename: "bundle.js" // generate one output of multiple entrypoint
  }
};

// webpack.config.js
// multiple entry point and generate multiple chunks with name
module.exports = {
  entry: {
    app: "./src/app.js",
    search: "./src/search.js"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist"
  }
};

/**
 * These option allows users to insert comments within the export wrapper
 * 1. output.library
 * 2. output.libraryTarget
 *
 * or use
 * 3. output.auxiliaryComment
 * Ex:
 * module.exports = {
        output: {
            library: 'someLibName',
            libraryTarget: 'umd',
            filename: 'someLibName.js',
            auxiliaryComment: 'Test Comment'
        }
   };
 * */
