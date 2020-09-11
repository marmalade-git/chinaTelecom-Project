/*
 * @Author: your name
 * @Date: 2020-09-10 09:24:09
 * @LastEditTime: 2020-09-11 09:52:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack-project/webpack.config.js
 */

const path = require('path');
const webpack = require('webpack');

module.exports = {

    mode:'development',

  entry: './src/index.js',    
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src')
  },

  module:{
    rules:[
      {test:/\.js$/, use:'babel-loader'},
      {test:/\.css$/,use:['style-loader','css-loader']},
      //{test:/\.less$/,use:['style-loader','css-loader','less-loader']},
      //{test:/\.(jpeg|jpg|png|gif)$/,use:'file-loader'},
      {test:/\.(ttf|woff|woff2|eot|otf)$/,use:'file-loader'},
      {test:/\.(jpeg|jpg|png|gif)$/,use:'file-loader'}
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    //new webpack.HashedModuleIdsPlugin(),

    ],
  devServer:{
    host:'127.0.0.1',
    port:'8080',
    hot:true,
    contentBase:'./src'
  }
}
