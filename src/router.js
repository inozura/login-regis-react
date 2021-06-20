import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

export default function router(props) {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <Router history={history} basename={process.env.PUBLIC_URL}>
        {props.children}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </React.Suspense>
  );
}