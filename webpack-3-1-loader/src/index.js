import testImg from './test.png'
import style from './index.scss'
import './index2.mcss'
import createImg from './createImg'
console.log(style)

let root = document.getElementById('root')
createImg()

let img = new Image()
img.src = testImg
img.classList.add(style.testImg1111)

root.append(img)

// ------------------打包字体文件
root.innerHTML += '<div class="iconfont icon-fenxiang"></div>'