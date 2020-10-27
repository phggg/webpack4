import Counter from './counter'
import Number from './number'

// let root = document.getElementById('root')
// // let test = document.createElement("div")
// // test.innerHTML = 'asddasda'
// // test.className = style.txt
// // root.append(test)
// console.log('hello word 11#############')

// let btn = document.createElement('button')
// btn.innerHTML = '新增'
// root.appendChild(btn)
// btn.onclick  = function(){
//   let div = document.createElement('div')
//   div.innerHTML = 'item'
//   // div.className = style.
//   root.appendChild(div)
// }

// root.innerHTML = '<div class="test">我的wenpack之旅</div>'

// ---------------------------\
Counter()
Number()

// 当Number的代码发生变化时,重新运行Numer
if(module.hot){ // 如果当前项目开启了热模块更新
  module.hot.accept('./number.js',() => {
    // 这个方法接受两个参数,第一个参数的文件如果发生了变化,则会执行第二个参数的函数
    document.body.removeChild(document.getElementById('number'))
    Number()
  })
}