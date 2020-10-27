const express = require('express')
const webpack = require('webpack') // 引入webpack
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config') // 引入webpack的配置文件
const complier = webpack(config) // 用webpack结合config可以随时进行代码的编译,complier就是一个编译器,complier执行一次就会重新打包一次代码

const app = express()

// 只要文件发生变化,complier就会重新运行,重新运行的出口就是config中的出口
app.use(webpackDevMiddleware(complier,{ 
  publicPath: config.output.publicPath // 这里如果config中没有设置publicPath,那么此处可以是空对象
}))

app.listen(3000,() => {
  console.log('server is running in http://localhost:3000')
})