const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development', //'development' 和 'production'
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  devServer: {
    contentBase: './dist', // 服务器要起在那一个文件夹下
    open: true, // 当webpackDevServer启动时,会自动帮我们打开浏览器,并访问服务器的地址
    proxy: {
      '/api': 'http://localhost:3000'
    },
    hot: true, // 让webpack-dev-server开启HotMoudleReplacement功能
    // hotOnly: true // 即便是html的功能没有生效,也不要让浏览器自动刷新,一般如果html出了问题,webpack会帮我们自动刷新一次,这个配置项要求html不要帮我们做额外的刷新
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/, // 如果js在node_modules或者bower_components中,则不使用babel解析
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              useBuiltIns: 'usage', // 当我做babel/polyfill填充的时候,根据业务代码来决定加入哪些函数填充
              corejs: 3,
              targets: {
                chrome: '67', // 这个项目会运行在大于67版本的chrome中,所以babel打包的过程中会判断是否有必要注入函数
              }
            }]
          ]
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 2048
          }
        }
      },
      {
        test: /\.(scss)$/,
        // use: useLoader('sass-loader')
        loaders: [
          'style-loader',
          // 'css-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              // modules: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')({
                  "overrideBrowserslist": [
                    "> 0.01%",
                    "last 2 versions",
                    "not ie <= 8"
                  ],
                })
              ]
            }
          },
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ],
  output: {
    publicPath: '/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}