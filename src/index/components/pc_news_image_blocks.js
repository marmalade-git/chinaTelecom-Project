/*
 * @Author: your name
 * @Date: 2020-09-11 14:09:09
 * @LastEditTime: 2020-09-11 15:39:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chinaTelecom-Project/src/index/components/pc_news_image_blocks.js
 */
import React from 'react'
import {Card} from 'antd'

export default class PCNewsImageBlock extends React.Component{
    render(){
        const {Meta} = Card;
        return(
            <div class="topNewsList">
                <Card hoverable style={{ width: 130}} class = "topNewsListCard" 
                cover={<img alt="example" src="../../images/chinatelecom.png" />}>
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card hoverable style={{ width: 130 }} class = "topNewsListCard"
                cover={<img alt="example" src="../../images/chinatelecom.png" />}>
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card hoverable style={{ width: 130 }} class = "topNewsListCard"
                cover={<img alt="example" src="../../images/chinatelecom.png" />}>
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card hoverable style={{ width: 130 }} class = "topNewsListCard"
                cover={<img alt="example" src="../../images/chinatelecom.png" />}>
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card hoverable style={{ width: 130 }} class = "topNewsListCard"
                cover={<img alt="example" src="../../images/chinatelecom.png" />}>
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card hoverable style={{ width: 130 }} class = "topNewsListCard"
                cover={<img alt="example" src="../../images/chinatelecom.png" />}>
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </div>
        )
    }
}