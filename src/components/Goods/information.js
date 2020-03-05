import React from "react"
import { connect } from 'react-redux' // 引入connect
import {GoodsInfo} from "../../redux/action/action"
import {Card, Skeleton, Row, Col, Carousel, Divider, InputNumber, Button} from 'antd';

require("./info.css")





class Goods extends React.Component{
    constructor(props){
        super(props)
        const { dispatch } = this.props;
        dispatch(GoodsInfo(this.props.match.params.id))
        this.state={
            count : 1
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(value){
        this.setState({
            count : value
        })
    }
    submitToCart(){

    }
    submitToOrder(){

    }

    render() {
        const {info , loading } = this.props
        let button;
        if (this.state.count === 1){
            button = <Button type={"danger"}>立刻购买</Button>
        }else{
             button = <Button type={"dashed"}>加入购物车</Button>
        }
        if (loading === false){
            return (<Row type="flex" justify="center" gutter={16} >
                    <Col  span={16}>
                    <Card bordered={true}>
                        <h2> 商品详情</h2>
                        <Col span={8}>
                            <Carousel  autoplay={true}>
                                {info.data.image_uri.map((e)=><img src={e} alt={e}/>)}
                            </Carousel>
                        </Col>
                        <Col span={4}>
                            <h1 className={"title"}> {info.data.name}</h1>
                            <h4>{info.data.info.category}/{info.data.info.brand}</h4>
                            <p>
                                {info.data.description}
                            </p>
                            <Divider type={"horizontal"}/>
                            <h2 className={"price"}>¥{info.data.price}</h2>
                            <h4>库存：{info.data.store}</h4>
                            <InputNumber min={1} max={info.data.store} defaultValue={1} onChange={this.onChange} />
                            <Divider type={"horizontal"}/>
                            {button}
                        </Col>

                    </Card>
                    </Col>
                </Row>
            )
        }else{
            return<Skeleton/>
        }

    }
}

const mapStateToProps = (state)=>{
    return{
        info : state.item,
        loading : state.item.loading
    }
}



export default connect(mapStateToProps)(Goods)
