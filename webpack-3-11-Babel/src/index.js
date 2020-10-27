import style from './index.scss'

let root = document.getElementById('root')
console.log('hello word 11#############')

let btn = document.createElement('button')
btn.innerHTML = '新增'
root.appendChild(btn)
btn.onclick = function () {
  let div = document.createElement('div')
  div.innerHTML = 'item'
  div.className = 'test'
  root.appendChild(div)
}

const arr = [
  new Promise(() => {
  }),
  new Promise(() => {
  })
]
arr.map((item) => {
  console.log(item)
})
