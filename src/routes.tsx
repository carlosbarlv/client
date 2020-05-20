import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Homepage from './pages/Homepage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/homepage">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
