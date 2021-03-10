import React from "react";
import {Route, BrowserRouter as Router, Switch, Redirect,} from 'react-router-dom';
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";

const authGuard = (Component) => () => {
    return localStorage.getItem("token") ? (
      <Component />
    ) : (
      <Redirect to="/login" />
    );
  };

  const Routes = (props) => (
    <Router {...props}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard" render={authGuard(Dashboard)}></Route>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
    </Router>
  );
  export default Routes;