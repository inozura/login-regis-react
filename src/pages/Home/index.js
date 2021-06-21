import React from 'react'
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";

import { HomeOutlined, LoginOutlined, ManOutlined, DashboardOutlined } from '@ant-design/icons';

const Home = () => {
  return (
    <Row justify="center" align="middle" style={{height: "100vh"}}>
      <Col span={12}>
        <h1 style={{textAlign: "center"}}>This is Homepage</h1>

        {/* NAVIGATION */}
        <Row justify="space-between" style={{padding: "0 50px"}}>
          <Link to="/">
            <HomeOutlined size={20}/> Home
          </Link>
          <Link to="/login">
            <LoginOutlined size={20}/> Login
          </Link>
          <Link to="/register">
            <ManOutlined size={20}/> Register
          </Link>
          <Link to="/dashboard">
            <DashboardOutlined size={20}/> Dashboard
          </Link>
        </Row>
      </Col>
    </Row>
  )
}

export default Home
