const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development', //'development' 和 'production'
  entry: {
    main: './src/index.js',
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
        test: /\.(scss|css)$/,
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
    new webpack.HotModuleReplacementPlugin(),
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