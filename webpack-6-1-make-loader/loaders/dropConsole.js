// drop-console.js
const parser = require('@babel/parser') //将源代码解析成AST
const traverse = require('@babel/traverse').default  //对AST节点进行递归遍历，生成一个便于操作、转换的path对象
const generator = require('@babel/generator').default //将AST解码生成js代码
const bableTypes = require('@babel/types')  //对具体的AST节点进行增删改查

module.exports = function (source) {
  let sourceStr = source;
  // let subArr = [];
  let output = null;
  // if (sourceStr.indexOf('<script>') !== -1 && sourceStr.indexOf('</script>') !== -1) { //对vue中的js进行处理
  //   sourceStr = source.match(/<script.*?>([\s\S]+?)<\/script>/)[1];
  //   subArr = source.split(sourceStr);
  // }
  const ast = parser.parse(sourceStr, { sourceType: 'module' })
  console.log(ast.program.body);
  traverse(ast, {
    CallExpression (path) {
      console.log(path.node.callee)

        // 删除console
      if (bableTypes.isMemberExpression(path.node.callee) && bableTypes.isIdentifier(path.node.callee.object, { name: "console" })) {
        path.remove()
      }
    }
  })
  // if (source.indexOf('<script>') !== -1 && source.indexOf('</script>') !== -1) { //对vue中的js进行处理
  //   output = generator(ast, {}, sourceStr);
  //   output.code = subArr[0] + output.code + subArr[1];
  // } else {
  // }
  output = generator(ast, {});
  return output.code
}