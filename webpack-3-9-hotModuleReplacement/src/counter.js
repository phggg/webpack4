import style from './index.scss'
export default function Counter () {
  console.log(style)
  let div = document.createElement('div')
  div.setAttribute('id', 'counter')
  div.innerHTML = 1
  div.className = style.test
  div.onclick = function () {
    div.innerHTML = parseInt(div.innerHTML, 10) + 1
  }
  document.body.append(div)
}