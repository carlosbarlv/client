import React, { ReactElement } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Login, RegisterPerson } from './pages'
import ProtectedRoutesWrapper from './components/ProtectedRoutesWrapper'
import {
  PATH_LOGIN,
  PATH_MAIN,
  PATH_PRODUCT_RANGE,
  PATH_REGISTER_PERSON,
} from './constants/routes'
import ProductRange from './pages/ProductRange'

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
        </ProtectedRoutesWrapper>
      </Switch>
    </Router>
  )
}

export default Routes
