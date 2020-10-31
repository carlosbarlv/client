import React, { ReactElement } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Login, RegisterPerson } from './pages'
import ProtectedRoutesWrapper from './components/ProtectedRoutesWrapper'
import {
  PATH_CASH_TRANSACTIONS,
  PATH_LOGIN,
  PATH_MAIN,
  PATH_PRODUCT_RANGE,
  PATH_REGISTER_PERSON,
  PATH_TRANSIST_SESSIONS,
} from './constants/routes'
import ProductRange from './pages/ProductRange'
import TransistSessions from './pages/TransistSessions'
import CashTransactions from './pages/CashTransactions'
import ComponenteNuevo from './components/ComponenteNuevo'

const Routes = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <Route exact path={PATH_LOGIN} component={Login} />
        <ProtectedRoutesWrapper>
          <Route exact path={PATH_MAIN} component={ComponenteNuevo} />
          <Route exact path={PATH_REGISTER_PERSON} component={RegisterPerson} />
          <Route exact path={PATH_PRODUCT_RANGE} component={ProductRange} />
          <Route
            exact
            path={PATH_TRANSIST_SESSIONS}
            component={TransistSessions}
          />
          <Route
            exact
            path={PATH_CASH_TRANSACTIONS}
            component={CashTransactions}
          />
        </ProtectedRoutesWrapper>
      </Switch>
    </Router>
  )
}

export default Routes
