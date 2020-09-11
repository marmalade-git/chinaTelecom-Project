/*
 * @Author: your name
 * @Date: 2020-09-11 09:54:23
 * @LastEditTime: 2020-09-11 12:33:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chinaTelecom-Project/src/index/components/mobile_index.js
 */
import React from 'react'
import MobileFooter from './mobile_footer'
import MobileHeader from './mobile_header'

export default class MobileIndex extends React.Component{
    Render(){
        return(
            <div><MobileHeader></MobileHeader>
            <MobileFooter></MobileFooter></div>
            
        )
    }
}