import { combineReducers } from 'redux'
import user, { UserState } from './user'
import business, { BusinessState } from './business'
import partners, { PartnersState } from './partners'
import nationalities, { GeneralState } from './general'
import catchements, { CatchementsState } from './catchements'

export type StoreState = {
  business: BusinessState
  catchements: CatchementsState
  partners: PartnersState
  nationalities: GeneralState
  user: UserState
}

export default combineReducers({
  business,
  catchements,
  partners,
  nationalities,
  user,
})
