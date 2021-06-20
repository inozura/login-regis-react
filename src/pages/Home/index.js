import React from 'react'
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Row justify="center" align="middle" style={{height: "100vh"}}>
      <Col span={12}>
        <h1 style={{textAlign: "center"}}>This is Homepage</h1>
        <Row justify="space-between" style={{padding: "0 50px"}}>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/dashboard">Dashboard</Link>
        </Row>
      </Col>
    </Row>
  )
}

export default Home
