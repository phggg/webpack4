const path = require('path')
const CopyRightWebpackPlugin = require('./plugins/copyright-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CopyRightWebpackPlugin({
      name: 'panghao'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}