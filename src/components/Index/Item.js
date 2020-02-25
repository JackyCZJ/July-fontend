import React, { Component } from 'react'
import {Card} from "antd";
import PropTypes from 'prop-types';
import Config from 'Config'

export default class Item extends Component{
    render() {
        return(
            <Card hoverable style={{ width: 240 , height: 240 }} cover={<img  src={this.props.src}  alt={Config.baseURL}/>}
            >
                <p>{this.props.price}</p>
                <a href={Config.baseURL}>{this.props.title}</a>
            </Card>
        )
    }
}

Item.prototypes = {
    title : PropTypes.string.required,
    src : PropTypes.string.required,
    price : PropTypes.number.required
}
