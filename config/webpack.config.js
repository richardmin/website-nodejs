var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.tsx'
  ],
  output: {
    filename: 'app.js',
    publicPath: '/js',
    path: path.resolve('dist')
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx', '.webpack.js', '.web.js'],
    modulesDirectories: ['src', 'node_modules'],
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loaders: ['babel', 'ts-loader'] },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
    ],

    preloaders: [
      { test: /\.js$/, loader: 'source-map-loader' },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin({ alwaysNotify: true }),
  ]
};