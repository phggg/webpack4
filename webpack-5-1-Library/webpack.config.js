const path = require('path')
module.exports = {
  mode: 'production',
  entry: {
    app: path.resolve(__dirname, './src/index.js'),
  },
  externals: ['lodash'], // 打包过程中不要打包lodash
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'library.js',
    libraryTarget: 'umd', // 配置通用引入,不管是用ES Moudle,还是CommonJs,或者AMD方式都可以正常引入
    library: 'library', // 可以用<script>方式引入,引入后在全局挂载一个名为library的变量
  }
}