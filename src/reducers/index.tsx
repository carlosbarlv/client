import { combineReducers } from 'redux'
import user, { UserState } from './user'
import business, { BusinessState } from './business'
import partners, { PartnersState } from './partners'

export type StoreState = {
  user: UserState
  business: BusinessState
  partners: PartnersState
}

export default combineReducers({
  business,
  user,
  partners,
})
