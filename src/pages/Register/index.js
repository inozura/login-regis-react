import React, {useState, useEffect} from 'react'
import { Row, Alert, Card, Form, Input, Button, Typography, Col } from 'antd';
import {Fade} from 'react-reveal'
import {Link} from 'react-router-dom'
import { LoadingOutlined } from '@ant-design/icons';
import { connect } from "react-redux";
import { loginTrue } from '../../configs/redux/actions/authAction';
import { registerAPI } from '../../configs/api/auth_api';
import axios from 'axios';

import MainSVG from '../../assets/svg/undraw_Hello_re_3evm.svg';
import './Register.scss';

const { Title } = Typography;

const Login = ({history, handleLogin, isLogin, jwtToken}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorDesc, setErrorDesc] = useState('');

  useEffect(() => {
    // if(isLogin || jwtToken) return history.push('/dashboard');
  }, [isLogin, jwtToken])

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleButton = async (val) => {
    if(val) {
      setIsLoading(true);

      // CALLING API
      await registerAPI(val).then(res => {
        if(res.status === 200) {
          setIsLoading(false);
          handleLogin();
        } else {
          setIsError(true);
          setIsLoading(false);
          setErrorDesc(res.response.data.detail)
        }
      })
    }
  }

  return (
    <Row justify="center" align="middle" className="main__auth_row_register">
      <Fade>
        <Card className="main__auth_card">
          <Row>
            <Col span={12} className="left_main__auth_card"
              style={{justifyContent: "center", alignItems: "center"}}
            > 
              <Fade duration={500} left>
                <Title level={2} style={{color: "white"}}>Lorem Ipsum</Title>  
              </Fade>
              <Fade duration={500} right>
                <img width={300} height={300} src={MainSVG} alt="social" />
              </Fade>
            </Col>

            <Col span={12} md={12} xs={24} className="right_main__auth_card">
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

                <Row>
                  <Col span={12}>
                    <Form.Item
                      label="First Name"
                      name="first_name"
                      rules={[{ required: true, message: 'Please input your First Name!' }]}
                      labelAlign="left"
                      style={{marginRight: 5}}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Last Name"
                      name="last_name"
                      rules={[{ required: true, message: 'Please input your Last Name!' }]}
                      labelAlign="left"
                      style={{marginLeft: 5}}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>

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
                    <Button type="primary" htmlType="submit" disabled={isLoading} className="main__auth_button">
                      {isLoading ? <span><LoadingOutlined size={20} style={{color: "#ddd"}} /> Loading</span> : 'Submit'}
                    </Button>
                  </Row>
                </Form.Item>

                <p style={{textAlign: "center"}}>Already have an account? <Link to="/login">Sign In</Link></p>
              </Form>
            </Col>
          </Row>
        </Card>
      </Fade>

      {/* ALERT COMPONENT */}
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
    handleLogin: () => dispatch(loginTrue()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
