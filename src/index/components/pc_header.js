/*
 * @Author: your name
 * @Date: 2020-09-11 10:47:19
 * @LastEditTime: 2020-09-11 13:56:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chinaTelecom-Project/src/index/components/pc_header.js
 */
import React from 'react'
import { Row, Col } from 'antd'
import {Menu} from 'antd'

import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    SlackOutlined,
    ScheduleOutlined,
    SoundOutlined
  } from '@ant-design/icons';

export default class PCHeader extends React.Component{
    constructor(){
        super();
        this.state={
            current : "top"
        }
    }
    render(){
        return(
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="#" class="logo">
                            <img src="../../images/logo.png"/>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu selectedKeys={[this.state.current]} mode="horizontal">
                            <Menu.Item key="top" >
                                <HomeOutlined/>首页
                            </Menu.Item>
                            <Menu.Item key="toutiao" >
                                <SettingFilled/>头条
                            </Menu.Item>
                            <Menu.Item key="social" >
                                < SmileOutlined/>社会
                            </Menu.Item>
                            <Menu.Item key="instate" >
                                <SyncOutlined/>国内
                            </Menu.Item>
                            <Menu.Item key="fasion" >
                            <SlackOutlined />时尚
                            </Menu.Item>
                            <Menu.Item key="keji" >
                            <ScheduleOutlined />科技
                            </Menu.Item>
                            <Menu.Item key="yule" >
                            <SoundOutlined />娱乐
                            </Menu.Item>
                        </Menu>  
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        )
    }
}