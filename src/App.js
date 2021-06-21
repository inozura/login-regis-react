import React, {useEffect} from "react";
import 'antd/dist/antd.css';
import Router from './router';
import { connect } from "react-redux";
import { loginAction } from "./configs/redux/actions/authAction";

function App(props) {

  const jwt = localStorage.getItem('jwtToken');

  // CHECK IF THE USER HAVE SESSION LOGIN
  useEffect(() => {
    if(jwt) return props.handleLogin(jwt);
  }, [])

  return (
    <div className="App">
      <Router />
    </div>
  );
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
    handleLogin: (data) => dispatch(loginAction(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
