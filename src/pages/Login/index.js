import React from 'react'
import { Row, Col, Card, Form, Input, Button, Typography } from 'antd';
import {Fade} from 'react-reveal'
import { Link } from "react-router-dom";

const { Title } = Typography;

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row justify="center" align="middle" style={{height: "100vh", overflow: "hidden"}}>
      <Fade duration={900} bottom>
        <Card style={{ width: 350, boxShadow: "0 14px 30px rgb(103 132 187 / 15%), 0 4px 4px rgb(103 132 187 / 5%)", borderRadius: 10 }}>
          <Title level={2} style={{textAlign: "right"}}>Login</Title>
          <Form
            layout="vertical"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >

            <Form.Item
              label="Username"
              name="username"
              rules={[{ message: 'Please input your username!' }]}
              labelAlign="left"
            >
              <Input type="email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Fade>
    </Row>
  )
}

export default Login
