import React from "react"
import { Card } from 'antd';
import Config from 'Config'
export default class ImgCard extends React.Component{

      render(){
          return(
            <Card
            hoverable
            style={{ width: 240 , height: 240 }}
            cover={<img  src={this.props.src} />}
          >
            <a style={{alignSelf: 'center',}} href={Config.baseURL+this.props.title}>{this.props.title}</a>
          </Card>
          )
      }
}
