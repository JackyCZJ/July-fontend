import React, { Component } from 'react'
import {Card} from "antd";
import PropTypes from 'prop-types';
import Config from 'Config'
import Meta from "antd/es/card/Meta";

export default class Item extends Component{
    render() {
        return(
            <Card hoverable style={{ width: "100%" , height: "100%" }} cover={<img style={{ width: "100%" , height: "75%" }} src={this.props.src}  alt={Config.baseURL}/>}>
                <Meta title={this.props.title} />
                <h1>{this.props.price}</h1>
            </Card>

        )
    }
}

Item.prototypes = {
    title : PropTypes.string.required,
    image_uri : PropTypes.string.required,
    price : PropTypes.number.required
}
