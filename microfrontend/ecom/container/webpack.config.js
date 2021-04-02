const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    port: 8080
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        cart: "cart@http://localhost:8082/remoteEntry.js",
        products: "products@http://localhost:8081/remoteEntry.js"
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}