import React from "react"
import Category from "./Category"
import {Row, Col} from "antd"
import Banner from "./Banner"


export default class Index extends React.Component{
    render(){
        return(
            <Row justify="center" >
             <Banner/>
               <Col><Category /></Col>
            </Row>
        )
    }
}
