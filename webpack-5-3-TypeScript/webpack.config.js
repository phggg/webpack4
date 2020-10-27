const path = require('path')
module.exports = {
  mode: 'production',
  entry: {
    app: path.resolve(__dirname, './src/index.tsx'),
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    filename: 'script/[name].js',
    chunkFilename: 'script/[name].js', // 非入口文件打包后的文件名
    path: path.resolve(__dirname, './dist')
  }
}