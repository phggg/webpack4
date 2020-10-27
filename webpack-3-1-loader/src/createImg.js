import testImg from './test.png'
import style from './index.scss'
function createImg () {
  let img = new Image()
  img.src = testImg
  img.classList.add(style.testImg1111)

  let root = document.getElementById('root')
  console.log(root)
  root.append(img)
}

export default createImg