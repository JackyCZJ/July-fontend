import React from 'react'
import { Col, Row } from 'antd'
import {SearchForm} from "./Search"



export default class Banner extends React.Component{
    render(){
        return(
            <div>
            <Row justify="center" type="flex" style={{height:'100px'}}>
               <Col span={24} style={{top:"60%"}}>
                <SearchForm />
               </Col>
            </Row>
            </div>
        )
    }
}
