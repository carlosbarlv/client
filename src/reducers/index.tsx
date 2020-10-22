import { combineReducers } from 'redux'
import user, { UserState } from './user'
import business, { BusinessState } from './business'
import partners, { PartnersState } from './partners'
import general, { GeneralState } from './general'
import catchements, { CatchementsState } from './catchements'
import economicActivities, {
  EconomicActivitiesState,
} from './economicActivities'
import sessions, { TransistSessionsState } from './transistSections'
import Person, { PersonState } from './Person'

export type StoreState = {
  business: BusinessState
  catchements: CatchementsState
  partners: PartnersState
  general: GeneralState
  user: UserState
  economicActivities: EconomicActivitiesState
  sessions: TransistSessionsState
  Person: PersonState
}

export default combineReducers({
  business,
  catchements,
  partners,
  general,
  user,
  economicActivities,
  sessions,
  Person,
})
