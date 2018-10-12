const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const index = new HtmlWebpackPlugin({
  template: path.join(__dirname, '../src/template.html'),
  filename: 'index.html',
});

module.exports = require('./webpack.base.config')({
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../build'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: true,
              importLoaders: 1,
              modules: true,
              localIdentName: '[local]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers: ['IE 10', 'IE 11', 'last 4 version'],
                  grid: true,
                }),
              ],
              sourceMap: true,
            },
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    index,
  ],
  mode: 'development',
});
