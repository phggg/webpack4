const merge = require('webpack-merge')
const commonConfig = require('./webpack.config.common')

const prodConfig = {
  devtool: 'cheap-module-source-map',
  mode: 'production', //'development' 和 'production'
}

module.exports = merge(commonConfig, prodConfig)