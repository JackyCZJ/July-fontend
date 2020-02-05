import React from "react"
import { Card } from 'antd';

export default class ImgCard extends React.Component{

      render(){
          return(
            <Card
            hoverable
            style={{ width: 240 , height: 240 }}
            cover={<img  src={this.props.src} />}
          >
            <a style={{alignSelf: 'center',}}>{this.props.title}</a>
          
          </Card>
          )
      }
}