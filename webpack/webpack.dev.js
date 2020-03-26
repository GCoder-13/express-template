const path = require('path');
const merge = require('webpack-merge');
const NodemonPlugin = require('nodemon-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = (env = {}) => merge([
  common,
  {
    mode: 'development',
    watch: true,
    devtool: 'cheap-module-eval-source-map',
    plugins: [
      new NodemonPlugin({
        nodeArgs: env.debug ? ['--inspect-brk'] : [],
      }),
    ],
  },
]);
