// 如果希望异步打包后的文件不要用引入的id为名,而是指定名字,那么可以使用以下方法
async function getComponent () {
  // 使用 /* webpackChunkName:"lodash" */来指定异步打包的文件名
  const { default: _ } = await import(/* webpackChunkName:"lodash" */'lodash');
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.addEventListener('click', () => {
  console.log(111)
  getComponent().then((element) => {
    document.body.appendChild(element)
  })
})
