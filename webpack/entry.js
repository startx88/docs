/*******
 * Entry:
 * 1. Entry is the first thing webpack does.
 * 2. It is a list of files that webpack will process.
 *
 * Syntax:
 *  entry: string | [string]
 *
 * // single entry point
 * module.exports = {
 *   entry: './src/index.js',
 * }
 *
 * Or
 *
 * module.exports = {
 *  entry: ['./src/index.js','./src/vendor.js'],
 *  output:{
 *    filename:'bundle.js'
 *  }
 * }
 *
 * Or
 *
 * // multiple entry point
 * module.exports = {
 *   entry: {
 *    app: './app.js',
 *    vendor: './vendor.js'
 *   }
 * }
 *
 * Entry description object:
 * 1. dependOn: the entry point that the current entry point depends on. they must be loaded before the entry point is loaded.
 * ex:
 *  module.exports = {
 * entry: {
 *    vendor: './vendor.js',
 *    app: {
 *        dependOn: 'vendor'
 *        import: './app.js',
 *    }
 *  }
 * }
 *
 * 2. filename: Specified the name of each output file on disk.
 * 3. import: Module(s) that are loaded upon startup.
 * 4. library: Specify library options to bundle a library from current entry.
 * 5. runtime: The name of the runtime chunk. When set, a new runtime chunk will be created.
 *    It can be set to false to avoid a new runtime chunk since webpack 5.43.0.
 * 6. publicPath: Specify a public URL address for the output files of this entry when they are referenced in a browser
 *
 * Note:
 * 1. runtime and dependOn should not be used together on a single entry, otherwise it will cause an error.
 * 2. Make sure runtime must not point to an existing entry point name, otherwise it will cause an error.
 * 3. Also dependOn must not be circular, the following example again would throw an error:
 * ex:
 *    module.exports = {
 *       entry: {
 *         a3: {
 *           import: './a',
 *           dependOn: 'b3',
 *         },
 *         b3: {
 *           import: './b',
 *           dependOn: 'a3',
 *         },
 *       },
 *    };
 *
 *
 * Multi Page Application:
 * module.exports = {
 *    entry: {
 *      pageOne: './src/pageOne/index.js',
 *      pageTwo: './src/pageTwo/index.js',
 *      pageThree: './src/pageThree/index.js',
 *    },
 *   output: {
 *      filename: '[name].bundle.js',
 *   }
 * };
 *
 *  * ********/

/**
 *  Dynamic entry:
 */
module.exports = {
  //...
  entry: () => new Promise(resolve => resolve(["./demo", "./demo2"]))
};
