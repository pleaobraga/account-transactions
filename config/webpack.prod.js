const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[hash:8].chunk.js',
  },
})
