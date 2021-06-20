import React, {useState, useEffect} from 'react'
import { Row, Alert, Card, Form, Input, Button, Typography } from 'antd';
import {Fade} from 'react-reveal'
import { Link } from "react-router-dom";
import axios from 'axios';
import { LoadingOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Login = ({history}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorDesc, setErrorDesc] = useState('');

  const jwt = localStorage.getItem('jwtToken');

  useEffect(() => {
    if(jwt) return history.push('/dashboard');
  }, [])

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleButton = async (val) => {
    if(val) {
      setIsLoading(true);
      try {  
        await axios.post('http://94.103.87.212/api/auth/signup', val)
        .then(res => {
          setIsLoading(false);
          console.log(res.data);
          // localStorage.setItem('jwtToken', res.data.access_token);
          history.push("/dashboard");
        });

      } catch (err) {
        setIsError(true);
        setIsLoading(false);
        setErrorDesc(err.response.data.detail)
        console.log('error', err.response.data);
      }
    }
  }

  return (
    <Row justify="center" align="middle" style={{height: "100vh", overflow: "hidden"}}>
      <Fade duration={900} bottom>
        <Card style={{ width: 350, boxShadow: "0 14px 30px rgb(103 132 187 / 15%), 0 4px 4px rgb(103 132 187 / 5%)", borderRadius: 10 }}>
          <Title level={2} style={{textAlign: "right"}}>Register</Title>
          
          <Form
            layout="vertical"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={handleButton}
            onFinishFailed={onFinishFailed}
          >

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
              labelAlign="left"
            >
              <Input type="email" />
            </Form.Item>

            <Form.Item
              label="First Name"
              name="first_name"
              rules={[{ required: true, message: 'Please input your First Name!' }]}
              labelAlign="left"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="last_name"
              rules={[{ required: true, message: 'Please input your Last Name!' }]}
              labelAlign="left"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Repeat Password"
              name="repeat_password"
              rules={[{ required: true, message: 'Please input your Repeat password!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Row justify="center">
                <Button type="primary" htmlType="submit" disabled={isLoading}>
                  {isLoading ? <span><LoadingOutlined size={20} style={{color: "#ddd"}} /> Loading</span> : 'Submit'}
                </Button>
              </Row>
            </Form.Item>
          </Form>
        </Card>
      </Fade>

      {
        isError && (
          <Alert
            message="Error"
            description={errorDesc}
            type="error"
            showIcon
            closable
            onClose={() => setIsError(false)}
            style={{
              position: "absolute",
              top: 15,
              right: 15
            }}
          />
        )
      }
    </Row>
  )
}

export default Login
