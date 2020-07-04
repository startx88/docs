/**
 * An entry point indicates which module webpack should use to begin building out its internal dependency graph
 * 1. there are multiple ways to define the entry
 */

// Single Entry
module.exports = {
  entry: "./src/index.js" // create a bungle of this file
};

// Multiple Entry
module.exports = {
  entry: {
    first: "./src/index.js",
    second: "./src/second.js"
  }
};

/**
 *  Dynamic entry:
 */
module.exports = {
  //...
  entry: () => new Promise(resolve => resolve(["./demo", "./demo2"]))
};
