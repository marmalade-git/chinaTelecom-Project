/*
 * @Author: your name
 * @Date: 2020-09-11 09:54:15
 * @LastEditTime: 2020-09-11 14:24:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chinaTelecom-Project/src/index/components/pc_index.js
 */
import React from 'react'
import PCHeader from "./pc_header"
import PCFooter from "./pc_footer"
import NewsContainer from "./pc_newscontainer"

export default class PCIndex extends React.Component{
    render(){
        return(
            <div>
                <PCHeader></PCHeader>
                <NewsContainer></NewsContainer>
                <PCFooter></PCFooter>
                
            </div>
        )
    }
}