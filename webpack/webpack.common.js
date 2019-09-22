const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  target: 'node',
  entry: path.resolve(__dirname, '../bin/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'server.js'
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, '../src'),
      controllers: path.resolve(__dirname, '../src/controllers'),
      middlewares: path.resolve(__dirname, '../src/middlewares'),
      routes: path.resolve(__dirname, '../src/routes'),
      utils: path.resolve(__dirname, '../src/utils')
    }
  },
  plugins: [
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
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
}
