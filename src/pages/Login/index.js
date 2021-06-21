import React, {useState, useEffect} from 'react'
import { Row, Alert, Card, Form, Input, Button, Typography, Col } from 'antd';
import {Fade} from 'react-reveal'
import {Link} from 'react-router-dom'
import { LoadingOutlined } from '@ant-design/icons';
import { loginTrue } from '../../configs/redux/actions/loginAction';
import { connect } from "react-redux";
import axios from 'axios';

import './Login.scss';

const { Title } = Typography;

const Login = ({history, isLogin, jwtToken, handleLogin}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorDesc, setErrorDesc] = useState('');
  const jwt = localStorage.getItem('jwtToken');

  useEffect(() => {
    console.log(jwtToken);
    if(isLogin || jwtToken) return history.push('/dashboard');
  }, [jwt])

  // BUTTON SUBMIT EVENT
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
          localStorage.setItem('jwtToken', res.data.access_token);
          handleLogin(res.data.access_token);
        });
      } catch (err) {
        setIsError(true);
        setIsLoading(false);
        setErrorDesc(err.response.data);
      } finally {
        history.push("/dashboard");
      }
    }
  }

  return (
    <Row justify="center" align="middle" className="main__auth_row">
      <Fade>
        <Card className="main__auth_card">

          {/* CONTENT CARD */}
          <Row>
            <Col span={10} className="left_main__auth_card">
              <Fade duration={500} right top>
                <div className="bottom1_div__animate" />
              </Fade>
              <Fade duration={500} bottom>
                <div className="bottom2_div__animate" />
              </Fade>
              <Title level={2} style={{textAlign: "right", color: "white", zIndex: 9}}>Lorem Ipsum</Title>
            </Col>

            <Col span={14} md={14} xs={24} className="right_main__auth_card">
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
                  <Input type="email" />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item>
                  <Row justify="center">
                    <Button 
                      type="primary" 
                      htmlType="submit" 
                      disabled={isLoading} 
                      onClick={() => handleSubmit()}
                      className="main__auth_button"
                    >
                      { 
                        isLoading ?
                          (<span><LoadingOutlined size={20} style={{color: "#ddd"}} /> Loading</span>) 
                        : 'Submit'
                      }
                    </Button>
                  </Row>
                </Form.Item>

                <p style={{textAlign: "center"}}>Don't have an account? <Link to="/register">Sign Up</Link></p>
              </Form>
            </Col>
          </Row>

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

// REDUX CALL
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
