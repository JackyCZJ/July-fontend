import React from "react";
import {Button, Cascader, Checkbox, Form, Input, Select, Tooltip,} from "antd";
import options from "./AddressOptions";
import {checkUsername,Register} from "../../redux/action/action";
import {history} from "../../redux/unity";
import {connect} from "react-redux";

const { Option } = Select;
const residences = options;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 12
    },
    sm: {
      span: 8
    }
  },
  wrapperCol: {
    xs: {
      span: 12
    },
    sm: {
      span: 8
    }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 12,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

const Registration = ({dispatch}) => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log(values)
    dispatch(Register(values))
  }

  async function check (values) {
    return await checkUsername(values)
  }
  const checkAuth=()=>{
    let user =  localStorage.getItem("user")
    if (user) {
      history.go("/")
    }
  }
  checkAuth()

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: "86"
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="邮箱"
        rules={[
          {
            type: "email",
            message: "并非是正确的Email地址!"
          },
          {
            required: true,
            message: "请输入你的Email地址!"
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="密码"
        rules={[
          {
            required: true,
            message: "请输入密码!"
          }
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="确认密码"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "重复确认密码"
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                "两次密码并不匹配。"
              );
            }
          })
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="username"
        label={
          <span>
            用户名&nbsp;
            <Tooltip title="打算如何称呼您？"/>
          </span>
        }
        rules={[
          {
            required: true,
            message: "输入你的用户名!",
            whitespace: true
          },
          () => ({
            validator(rule, value) {
              if ((value.length<= 4)){
                return Promise.reject(
                    "用户名过短，请大于4个字节"
                )
              }
              return  check(value).then(res=>{
                if (res){
                  return Promise.reject("用户名已存在")
                } else{
                  return Promise.resolve                }
              })

            }
          })
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="residence"
        label="省市区"
        rules={[
          {
            type: "array",
            required: true,
            message: "Please select your habitual residence!"
          }
        ]}
      >

        <Cascader options={residences} />
      </Form.Item>
      <Form.Item name="address" label="详细地址" rules={[{
        type:"string",
        required: true,
        message: "请输入详细地址"
      }]
      }>
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="电话号码"
        rules={[
          {
            required: true,
            message: "Please input your phone number!"
          }
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%"
          }}
        />
      </Form.Item>



      <Form.Item
        name="agreement"
        valuePropName="checked"
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" >
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};



export default connect()(Registration);
