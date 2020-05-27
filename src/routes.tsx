import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import ProtectedRoutesWrapper from './components/ProtectedRoutesWrapper';
import { PATH_MAIN, PATH_LOGIN } from './constants/routes';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={PATH_LOGIN} component={Login} />
        <ProtectedRoutesWrapper>
          <Route
            exact
            path={PATH_MAIN}
            component={() => <h1>MAIN PAGE PLACEHOLDER</h1>}
          />
        </ProtectedRoutesWrapper>
      </Switch>
    </Router>
  );
};

export default Routes;
