import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import ProtectedRoutesWrapper from './components/ProtectedRoutesWrapper';
import {
  PATH_MAIN,
  PATH_LOGIN,
  PATH_REGISTER_PERSON,
} from './constants/routes';
import RegisterPerson from './pages/RegisterPerson';

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
          <Route exact path={PATH_REGISTER_PERSON} component={RegisterPerson} />
        </ProtectedRoutesWrapper>
      </Switch>
    </Router>
  );
};

export default Routes;
