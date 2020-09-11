/*
 * @Author: your name
 * @Date: 2020-09-11 14:07:47
 * @LastEditTime: 2020-09-11 15:05:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chinaTelecom-Project/src/index/components/pc_newscontainer.js
 */
import React from 'react'

import {Row, Col, Carousel} from 'antd'
import { toQuery } from 'react-responsive'
import PCNewsImageBlock from './pc_news_image_blocks'

export default class NewsContainer extends React.Component{
    render(){
        const contentStyle = {
            dots:true,
            autoplay:true,
            speed:500,
            slideToShow:1,
            infinite:true
          };
        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <div class="leftContainer">
                            <div class="carousel">
                                <Carousel {...contentStyle}>
                                    <div>
                                        <img src="../../images/WechatIMG64.jpeg"/>
                                    </div>
                                    <div>
                                    <img src="../../images/WechatIMG65.jpeg"/>
                                    </div>
                                    <div>
                                    <img src="../../images/WechatIMG66.jpeg"/>
                                    </div>
                                    <div>
                                    <img src="../../images/WechatIMG67.jpeg"/>
                                    </div>
                                </Carousel>
                            </div>
                           
                            <div >
                                <PCNewsImageBlock></PCNewsImageBlock>
                            </div>

                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}