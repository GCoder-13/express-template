const path = require('path');
const nodeExternals = require('webpack-node-externals');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  target: 'node',
  entry: path.resolve(__dirname, '../bin/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'server.js',
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, '../dist')],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
};
