const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',
  target: 'web',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public`
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'app.css', allChunks: true }),
    new HtmlWebPackPlugin({
      template: './src/client/index.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      }
    ]
  }
};
