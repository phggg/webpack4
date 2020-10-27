// import test from './test.js'
// console.log(test.name)
// import _ from 'lodash'

// let element = document.createElement('div');
// element.innerHTML = _join(['a', 'b', 'c'], '----')
// document.body.appendChild(element)

// 如果希望异步打包后的文件不要用引入的id为名,而是指定名字,那么可以使用以下方法
function getComponent () {
  // 使用 /* webpackChunkName:"lodash" */来指定异步打包的文件名
  return import(/* webpackChunkName:"lodash" */'lodash').then(({ default: _ }) => {
    let element = document.createElement('div');
    element.innerHTML = _.join(['a', 'b', 'c', 'd'], '****----')
    return element
  })
}

getComponent().then((element) => {
  document.body.appendChild(element)
})