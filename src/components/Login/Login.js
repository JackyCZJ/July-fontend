import React from "react";
import {Form, Input, Button} from 'antd';
import {Link} from "react-router-dom";
import { login,getUrlParam }  from "../../redux/action/action"
import {history} from "../../redux/unity"
import { connect } from 'react-redux';
import Config from 'Config'
import{ UserOutlined , LockOutlined } from '@ant-design/icons';

class Login extends React.Component {
    componentDidMount() {
        document.title = "登录"+Config.title
    }
    constructor(props){
        super(props)
        this.checkAuth()
        this.state = {
            redirect: getUrlParam('redirect') || '/',
        }
    }

    formRef = React.createRef();

    checkAuth(){
       let user =  localStorage.getItem("user")
       if (user) {
           history.goBack()
       }
    }

    onFinish = values => {
        const { dispatch } = this.props;
        dispatch(login({username: values.username,password: values.password}),this.state.redirect)
    };

    render() {

        return (
            <Form onFinish={this.onFinish} ref={this.formRef} name="Login" style={{width:"30%", position: 'absolute', left: '50%', top: '30%',
                transform: 'translate(-50%, -50%)' }}  className="login-form">
                <Form.Item name={"username"} rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input
                        prefix={<UserOutlined />}
                        placeholder="用户名或邮箱"
                    />
                </Form.Item>
                <Form.Item name={"password"} rules={[{ required: true, message: 'Please input your Password!' }]}>
                    <Input
                        prefix={<LockOutlined />}
                        type="password"
                        placeholder="密码"
                    />
                </Form.Item>
                <Form.Item>
                    <Link className="login-form-forgot"  to={"/forgetPassword"}>
                        忘记密码？
                    </Link>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                    <Link to={"/SignUp"}>注册</Link>
                </Form.Item>
            </Form>
        );
    }
}



function mapStateToProps(state) {
    const { loggingIn } = state.auth;
    return {
        loggingIn,
    };
}

export default  connect(mapStateToProps)(Login)
