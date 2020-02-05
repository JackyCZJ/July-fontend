import React, { Component,setState } from "react";
import { Menu } from 'antd';
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';

const { SubMenu } = Menu;



class Head extends React.Component{
    state =  {
        username:"游客",
        current: "index",
    }

    handleClick = (e)=>{
        this.setState({
            current : e.key
        })
    }

    render(){
        return (

                <Menu onClick={this.handleClick} theme="light"   style={{ backgroundColor:'rgba(255,255,255, 0.1)', lineHeight: '64px' }}
                selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="index">
                   <Link to="/"> 主页 </Link>
                </Menu.Item>
                <Menu.Item key="shop">
                    <Link to="/shop">店子</Link>
                </Menu.Item>

                <Menu.Item  key="user">
               个人中心
                    </Menu.Item>
                </Menu>
        );
    }
}

export default Head