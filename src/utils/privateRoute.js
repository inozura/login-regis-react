import React from "react";
import {
  Route,
  Redirect
} from "react-router-dom";
import {useSelector} from 'react-redux';
import { getLocalStorage } from "../configs/localStorage";

function PrivateRoute({ children, ...rest }) {
  const {isLogin, jwtToken} = useSelector(state => state.auth);
  const jwt = getLocalStorage('jwtToken');

  return (
    <Route
      {...rest}
      render={() => {
        if (jwt || isLogin || jwtToken) {
          return children;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}

export default PrivateRoute;