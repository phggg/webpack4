const loaderUtils = require('loader-utils')
module.exports = function (source) { // source 为引入文件的源代码(内容)
  return source.replace('诺克萨斯', 'world')
}
