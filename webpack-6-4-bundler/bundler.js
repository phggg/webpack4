const fs = require('fs') // 想要分析文件,需要用fs获取到文件内容
const path = require('path') // dependencies中的文件路径不可以是相对路径,因此需要path
const parser = require('@babel/parser') // 帮助我们分析代码
const traverse = require('@babel/traverse').default // 帮助我们对抽象语法树进行遍历
const babel = require('@babel/core') // 将原始代码打包编译成浏览器能够运行的代码

const moduleAnalyser = (filename) => { // 帮助我们分析模块
  const content = fs.readFileSync(filename, 'utf-8')
  const ast = parser.parse(content, {
    sourceType: 'module'
  }) // 抽象语法树AST
  // console.log(ast.program.body)
  const dependencies = {}
  traverse(ast, { // 对抽象语法树进行遍历
    ImportDeclaration ({ node }) { // 如果遇见类型为ImportDeclaration的元素,则执行这个函数
      const dirname = path.dirname(filename)
      const newFile = './' + path.join(dirname, node.source.value)
      // console.log(node) // 类型为ImportDeclaration的元素
      // console.log(newFile)
      dependencies[node.source.value] = newFile // 将依赖中的文件存入对象,键是依赖文件的相对路径,值是依赖文件的绝对路径
      // console.log(dependencies) // [ './message.js' ]
    }
  })
  const {code} = babel.transformFromAst(ast,null,{
    presets: ['@babel/preset-env'] // babel插件的集合,常见的有将ES6转换为ES5的@babel/preset-env
  }) // 将ast语法树转换成一个对象,这个对象中有一个code字段,其中为编译生成的可以在浏览器上运行的代码
  // console.log(code)
  return {
    filename,
    dependencies,
    code
  }
}

const moduleInfo = moduleAnalyser('./src/index.js')
console.log(moduleInfo)