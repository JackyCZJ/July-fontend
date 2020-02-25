import React from "react";
import {Form, Icon, Input, Button} from 'antd';
import {Link} from "react-router-dom";
import { login }  from "../../redux/action"
import {history} from "../../redux/unity"
import { connect } from 'react-redux';


class Login extends React.Component {
    checkAuth(){
       let user =  this.props.user
       if (user) {
           history.goBack()
       }
    }
    constructor(props){
        super(props)
        this.checkAuth()
        this.state = {
            username : "",
            password : "",
            isLoggedIn: false
        }
        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            const { dispatch } = this.props;

            if (!err) {
                dispatch(login({username: values.username,password: values.password}))
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form style={{width:"30%", position: 'absolute', left: '50%', top: '30%',
                transform: 'translate(-50%, -50%)' }}   onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            onChange={this.handleChange}
                            placeholder="用户名或邮箱"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            onChange={this.handleChange}
                            placeholder="密码"
                        />,
                    )}
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
const NewLoginForm = Form.create({ name: 'normal_login' })(Login);

export default  connect(mapStateToProps)(NewLoginForm)
