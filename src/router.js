import React from "react";
import { Route, Router, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./utils/privateRoute";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

const jwt = localStorage.getItem('jwtToken');

export default function router(props) {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <Router history={history} basename={process.env.PUBLIC_URL}>
        {props.children}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

          {/* PRIVATE ROUTE CONDITION */}
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

        </Switch>
      </Router>
    </React.Suspense>
  );
}