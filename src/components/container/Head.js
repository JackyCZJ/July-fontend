import React, { Component,setState } from "react";
import { Menu } from 'antd';
import {  Link } from 'react-router-dom';

const { SubMenu } = Menu;



class Head extends React.Component{
    state =  {
        username:"游客",
        current: "index",
    };

    handleClick = (e)=>{
        this.setState({
            current : e.key
        })
    };

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
                    <SubMenu  title="个人中心">
                        <Menu.Item key="user-setting">
                            用户设置
                        </Menu.Item>
                        <Menu.Item key="user-change-password" >
                            更改密码
                        </Menu.Item>
                    </SubMenu>
                </Menu>
        );
    }
}

export default Head
