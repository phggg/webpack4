const merge = require('webpack-merge')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const commonConfig = require('./webpack.config.common')

const prodConfig = {
  devtool: 'cheap-module-source-map',
  mode: 'production', //'development' 和 'production'
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin({})]
  },
}

module.exports = merge(commonConfig, prodConfig)