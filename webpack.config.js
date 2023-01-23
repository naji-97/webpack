const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
   index: './src/index.js',
   print: './src/print.js',
 },
plugins: [
  new HtmlWebpackPlugin({
    title: 'Output Management',
  }),
],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      Utilities: path.resolve(__dirname, 'src/utilities/'),
      Templates: path.resolve(__dirname, 'src/templates/'),
    },
  },
};