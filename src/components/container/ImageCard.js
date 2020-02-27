import React from "react"
import Config from 'Config'

export default class ImgCard extends React.Component{

      render(){
          return(
              <img style={{ width: "80%" , height: "80%" }} src={this.props.src}  alt={Config.baseURL+this.props.src}/>
          )
      }
}
