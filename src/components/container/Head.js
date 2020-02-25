import React from "react";
import { Menu } from 'antd';
import {  Link } from 'react-router-dom';
import {history} from "../../redux/unity";

const { SubMenu } = Menu;



class Head extends React.Component{

    state =  {
        username:"游客",
        isLoggedIn : false,
        current: "index",
    };
    componentDidMount() {
        this.checkAuth()
    }

    checkAuth(){
        let user =  JSON.parse(localStorage.getItem("user"))
        if (user.username !== undefined&&user.token !==undefined ){
            this.setState({
                username : user.username,
                isLoggedIn : true
            })
        }
    }


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
                <Menu.Item key="Cart">
                    购物车
                </Menu.Item>
                    {this.state.isLoggedIn === true
                        ? <SubMenu title="个人中心">
                            <Menu.Item>
                                欢迎：{this.state.username}
                            </Menu.Item>
                            <Menu.Item key="user-setting">
                                用户设置
                            </Menu.Item>
                            <Menu.Item key="user-change-password" >
                                更改密码
                            </Menu.Item>
                            <Menu.Item>
                                登出
                            </Menu.Item>
                        </SubMenu>
                        : <Menu.Item key="Login"><Link to="/Login">请登录</Link></Menu.Item>
                    }
                </Menu>
        );
    }
}

export default Head
