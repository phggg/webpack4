import $ from 'jquery'
import { join } from 'lodash-es'
import './style.scss'
import './style1.scss'

const dom = $('<div>')
dom.html(join(['pang', 'hao'], '---'))
$('body').append(dom)
console.log('hello111');