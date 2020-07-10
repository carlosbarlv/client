import { combineReducers } from 'redux'
import user, { UserState } from './user'
import business, { BusinessState } from './business'

export type StoreState = {
  user: UserState
  business: BusinessState
}

export default combineReducers({
  business,
  user,
})
