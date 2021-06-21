import React, {useState, useEffect} from 'react'
import { Row, Alert, Card, Form, Input, Button, Typography } from 'antd';
import {Fade} from 'react-reveal'
import { Link, Redirect } from "react-router-dom";
import { LoadingOutlined } from '@ant-design/icons';
import { login } from '../../configs/api/auth_api';
import { loginTrue } from '../../configs/redux/actions/loginAction';
import axios from 'axios';
import { connect } from "react-redux";

const { Title } = Typography;

const Login = ({history, isLogin, jwtToken, handleLogin}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorDesc, setErrorDesc] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const jwt = localStorage.getItem('jwtToken');

  useEffect(() => {
    console.log(jwtToken);
    if(isLogin || jwtToken) return history.push('/dashboard');
  }, [jwt])

  const handleSubmit = async (event) => {
    if(event) {
      setIsLoading(true);
      try {
        const data = new FormData();
        data.set('username', event.email);
        data.set('password', event.password);

        await axios.post('http://94.103.87.212/api/auth/login', data)
        .then(async res => {
          setIsLoading(false);
          console.log(res.data);
          localStorage.setItem('jwtToken', res.data.access_token);
          handleLogin(res.data.access_token);
          console.log(jwtToken);
        });
      } catch (err) {
        setIsError(true);
        setIsLoading(false);
        setErrorDesc(err.response.data.detail);
        console.log('error', err.response.data);
      } finally {
        history.push("/dashboard");
      }
    }
  }

  return (
    <Row justify="center" align="middle" style={{height: "100vh", overflow: "hidden"}}>
      <Fade duration={900} bottom>
        <Card style={{ width: 350, boxShadow: "0 14px 30px rgb(103 132 187 / 15%), 0 4px 4px rgb(103 132 187 / 5%)", borderRadius: 10 }}>
          <Title level={2} style={{textAlign: "right"}}>Login</Title>
          <Form
            layout="vertical"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
              labelAlign="left"
            >
              <Input type="email" onChange={(text) => setEmail(text.target.value)} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password onChange={(text) => setPassword(text.target.value)} />
            </Form.Item>

            <Form.Item>
              <Row justify="center">
                <Button type="primary" htmlType="submit" disabled={isLoading} onClick={() => handleSubmit()}>
                  {isLoading ? <span><LoadingOutlined size={20} style={{color: "#ddd"}} /> Loading</span> : 'Submit'}
                </Button>
              </Row>
            </Form.Item>
          </Form>
        </Card>
      </Fade>

      {/* ALERT */}
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

const mapStateToProps = state => {
  return {
    isLogin: state.auth.isLogin,
    jwtToken: state.auth.jwtToken,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: (data) => dispatch(loginTrue(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
