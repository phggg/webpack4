class CopyRightWebpackPlugin {
  constructor(options) {
    console.log(options)
  }
  apply (compiler) { // compiler存放了配置的相关内容,包括打包的所有内容
    // compiler.hooks中定义了打包过程中的某些具体时刻
    // compile是同步时刻
    compiler.hooks.compile.tap('CopyRightWebpackPlugin', (compilation) => { // compilation中存放着跟这一次打包相关的内容
      // 同步时刻不需要cb
      console.log('compile')
    })
    // emit是异步时刻
    compiler.hooks.emit.tapAsync('CopyRightWebpackPlugin', (compilation, cb) => {
      // 打包生成的文件具体有什么,这些信息是放在compilation.assets中的
      debugger;
      compilation.assets['copyright.txt'] = { // 向打包生成的文件夹中增加一个文件
        source: function () {
          return 'copyright by panghao'
        },
        size: function () {
          return 20
        }
      }
      cb()
    })
  }
}

module.exports = CopyRightWebpackPlugin