/*
 * @Author: your name
 * @Date: 2020-09-11 10:47:39
 * @LastEditTime: 2020-09-11 13:28:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chinaTelecom-Project/src/index/components/pc_footer.js
 */
import React from 'react'
import { Row, Col} from 'antd'


export default class PCFooter extends React.Component{
    render(){
        return(
            <footer>
                <Row>
                    <Col span = {2}></Col>
                    <Col span = {20} class="footer">
                        &copy;&nbsp;&nbsp;&nbsp; Power by AnhuiTelecom --2020. All Right Reserved.
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        )
    }
}