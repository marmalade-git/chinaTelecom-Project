/*
 * @Author: your name
 * @Date: 2020-09-10 09:23:52
 * @LastEditTime: 2020-09-10 15:34:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack-project/src/search.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './css/search.less'
import logo from './images/logo.png'

class Search extends React.Component{
    render(){
        return <div class = "search-text">
            搜索模块<img src={ logo }/>
        </div>
    }
}

ReactDOM.render(
    <Search></Search>,
    document.getElementById('root')
)