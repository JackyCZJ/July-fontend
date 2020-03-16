import React from "react";
import { Tooltip, Col, Row,Divider } from "antd";
import ImgCard from "../container/ImageCard";
import Digital from '../../img/Digital.png'
import Debris from '../../img/Debris.png'
import Electrica from '../../img/Electrica.png'
import Learn from '../../img/Learn.png'
import Makeup from '../../img/Makeup.png'
import Ornaments from '../../img/Ornaments.png'
import Snacks from '../../img/Snacks.png'
import Life from '../../img/Life.png'
import {Link} from "react-router-dom";


export default class Category extends React.Component {


    render() {
        return (
            <Col>
            <Row  type="flex" justify="center">
                <h2>商品分类<Divider type="vertical"/>Product Category</h2>
            </Row>

                <Row gutter={20} column={4} type="flex" justify="center">
                    <Tooltip title="电子产品"><Col xs={10} sm={4} md={6} lg={4} xl={4}><Link to={{pathname:"/Category", state:{category:"Digital"}}}><ImgCard src={Digital}/></Link></Col></Tooltip>
                    <Tooltip title="3C产品"><Col xs={10} sm={4} md={6} lg={4} xl={4}><Link to={{pathname:"/Category", state:{category:"Debris"} }}><ImgCard src={Debris}/></Link></Col></Tooltip>
                    <Tooltip title="家用电子"><Col xs={10} sm={4} md={6} lg={4} xl={4}><Link to={{pathname:"/Category", state:{category:"Electrica"} }}><ImgCard src={Electrica}/></Link></Col></Tooltip>
                    <Tooltip title="学习文具"><Col xs={10} sm={4} md={6} lg={4} xl={4}><Link to={{pathname:"/Category", state:{category:"Learn"} }}><ImgCard src={Learn}/></Link></Col></Tooltip>
                </Row>
                <Row gutter={20} type="flex" justify="center" style={{ marginTop: "10px" }}>
                    <Tooltip title="文艺摆件"><Col xs={10} sm={4} md={6} lg={4} xl={4}><Link to={{pathname:"/Category", state:{category:"Ornaments"} }}><ImgCard src={Ornaments}/></Link></Col></Tooltip>
                    <Tooltip title="家用杂货"><Col xs={10} sm={4} md={6} lg={4} xl={4}><Link to={{pathname:"/Category", state:{category:"Life"} }}><ImgCard src={Life}/></Link></Col></Tooltip>
                    <Tooltip title="零食杂粮"><Col xs={10} sm={4} md={6} lg={4} xl={4}><Link to={{pathname:"/Category", state:{category:"Snacks"} }}><ImgCard src={Snacks}/></Link></Col></Tooltip>
                    <Tooltip title="化妆品"><Col xs={10} sm={4} md={6} lg={4} xl={4}><Link to={{pathname:"/Category" , state:{category:"Makeup"}}}><ImgCard src={Makeup}/></Link></Col></Tooltip>
                </Row>
            </Col>

        )
    }
}
