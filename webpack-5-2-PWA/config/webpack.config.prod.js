const merge = require('webpack-merge')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const commonConfig = require('./webpack.config.common')
const WorkBoxPlugin = require('workbox-webpack-plugin')

const prodConfig = {
  devtool: 'cheap-module-source-map',
  mode: 'production', //'development' 和 'production'
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin({})]
  },
  // performance: false // 不提示打包过程中性能的一些问题,如打包文件超过244kb等
  plugins: [
    new WorkBoxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    }) // 使用PWA,底层使用技术为serviceWorker 
  ]
}

module.exports = merge(commonConfig, prodConfig)