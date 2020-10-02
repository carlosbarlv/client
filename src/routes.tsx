import React, { ReactElement } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Login, RegisterPerson } from './pages'
import ProtectedRoutesWrapper from './components/ProtectedRoutesWrapper'
import {
  PATH_LOGIN,
  PATH_MAIN,
  PATH_PRODUCT_RANGE,
  PATH_REGISTER_PERSON,
  PATH_TRANSIST_SESSIONS,
} from './constants/routes'
import ProductRange from './pages/ProductRange'
import TransistSessions from './pages/TransistSessions'

const Routes = (): ReactElement => {
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
          <Route exact path={PATH_PRODUCT_RANGE} component={ProductRange} />
          <Route
            exact
            path={PATH_TRANSIST_SESSIONS}
            component={TransistSessions}
          />
        </ProtectedRoutesWrapper>
      </Switch>
    </Router>
  )
}

export default Routes
