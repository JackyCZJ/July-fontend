import React from "react"
import Config from 'Config'


export default class Shop extends React.Component{
    componentDidMount() {
        document.title = "商店一览-"+Config.title
    }

    render(){
        return(
            <div>content</div>
        )
    }
}
