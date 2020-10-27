const loaderUtils = require('loader-utils')
// 必须要使用function函数,因为要使用this
module.exports = function (source) { // source 为引入文件的源代码(内容)
  const options = loaderUtils.getOptions(this)
  const callback = this.async()
  // console.log(source)
  setTimeout(() => {
    const result = source.replace('panghao', options.name)
    callback(null,result)
  }, 10000);
}
