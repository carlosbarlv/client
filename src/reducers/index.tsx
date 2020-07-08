import { combineReducers } from 'redux'
import login, { LoginState } from './login'
import user, { UserState } from './user'
import business, { BusinessState } from './business'

export type StoreState = {
  user: UserState
  business: BusinessState
  login: LoginState
}

export default combineReducers({
  business,
  login,
  user,
})
