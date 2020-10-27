{
  './src/index.js':
  {
    dependencies: { './hello.js': './src\\hello.js' },
    code:
    '"use strict";\n\nvar _hello = _interopRequireDefault(require("./hello.js"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nconsole.log(_hello["default"]);'
  },
  './src\\hello.js':
  {
    dependencies: { './word.js': './src\\word.js' },
    code:
    '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value:
    true\n
  }); \nexports["default"] = void 0; \n\nvar _word = require("./word.js"); \n\nvar message = "say ".concat(_word.word); \nvar _default = message; \nexports["default"] = _default; ' },
  './src\\word.js':
  {
    dependencies: { },
    code:
    '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value:
    true\n
  }); \nexports.word = void 0; \nvar word = \'hello\';\nexports.word = word;'} 
}