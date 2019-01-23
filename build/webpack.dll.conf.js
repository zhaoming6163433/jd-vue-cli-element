const path = require('path')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')
module.exports = {
  entry: {
    //填写需要提取出来的依赖包
    //如果有些依赖包在index.html页面引入了cdn了就无需再引入了，否则会打包进js文件中，在页面重复引入代码。
    vendor: ['vue-router']
  },
  output: {
    path: path.join(__dirname, '../static'),
    filename: 'dll.[name]_[hash:7].js',
    library: '[name]_[hash:7]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../', '[name]-manifest.json'),
      name: '[name]_[hash:7]'
    }),
    new AssetsPlugin({
        filename: 'bundle-config.json',
        path: './'
    }),
    //压缩 只是为了包更小一点
    new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          drop_console:true,
          drop_debugger:true
        },
        output:{
          // 去掉注释内容
          comments: false,
        },
        sourceMap: true
    })
  ]
}
