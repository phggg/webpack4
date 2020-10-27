import style from './index.scss'

let root = document.getElementById('root')
let test = document.createElement("div")
test.innerHTML = 'asddasda'
test.className = style.txt
root.append(test)

// root.innerHTML = '<div class="test">我的wenpack之旅</div>'