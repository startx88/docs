/*******
 * Asset Modules:
 * 1. Asset Modules is a type of module that allows one to use asset files (fonts, icons, etc) without configuring additional loaders.
 *
 * Prior to webpack 5 it was common to use:
 *  1. raw-loader to import a file as a string
 *  2. url-loader to inline a file into the bundle as a data URI
 *  3. file-loader to emit a file into the output directory
 *
 * Asset Modules type replaces all of these loaders by adding 4 new module types:
 * 1. asset/resource :  emits a separate file and exports the URL. Previously achievable by using file-loader.
 * 2. asset/inline   :  exports a data URI of the asset. Previously achievable by using url-loader.
 * 3. asset/source   :  exports the source code of the asset. Previously achievable by using raw-loader.
 * 4. asset          : automatically chooses between exporting a data URI and emitting a separate file. Previously achievable by using url-loader with asset size limit.
 * */


// old implementation
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "./dist/bundle.js",
    libraryTarget: "umd",
    library: "bundle"
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        dependency: { not: ['url'] }, // To exclude assets that came from new URL calls from the asset loaders
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            }
          }
        ],
        type: 'javascript/auto' // you might want to stop Asset Module from processing your assets
      },
    ]
  }
}

/*******
 * Resource assets with new implemenation
 * 
 * */
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.png/,
        type: 'asset/resource'
      }
    ]
  },
};

// use in index.js file 
import mainImage from './images/main.png';
img.src = mainImage; // '/dist/151cfcfa1bd74779aadb.png'


/*******
 * Custom output filename
 *
 * By default, asset/resource modules are emitting with [hash][ext][query] filename into output directory.
 * You can modify this template by setting output.assetModuleFilename in your webpack configuration:
 * */
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]' // modified output images will be saved as images/[hash][ext][query]
  },
  module: {
    rules: [
      {
        test: /\.png/,
        type: 'asset/resource'
      }
    ]
  },
};

/**
 * Inlining assets
 * */
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.svg/,
        type: 'asset/inline'
      },
    ]
  }
};

// using inline images
import metroMap from './images/metro.svg';
block.style.background = `url(${metroMap})`; // url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDo...vc3ZnPgo=)

/*******
 * General asset type:
 * 
 * Now webpack will automatically choose between resource and inline by following a default 
 * condition: a file with size less than 8kb will be treated as a inline module type and resource module type otherwise.
 * 
 * You can change this condition by setting a Rule.parser.dataUrlCondition.maxSize option on the module rule level of your webpack configuration:
 * */
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.txt/,
        type: 'asset',
      }
    ]
  },
};

// change condition
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.txt/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 // 4kb
          }
        }
      }
    ]
  },
};