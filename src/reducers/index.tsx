import { combineReducers } from 'redux'
import user, { UserState } from './user'
import business, { BusinessState } from './business'
import partners, { PartnersState } from './partners'
import nationalities, { GeneralState } from './general'

export type StoreState = {
  user: UserState
  business: BusinessState
  partners: PartnersState
  nationalities: GeneralState
}

export default combineReducers({
  business,
  user,
  partners,
  nationalities,
})
