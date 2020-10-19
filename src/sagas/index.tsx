import { watchAuthenticateUser, watchGetUserMenuOptions } from './user'
import { watchGetBusinessInfo } from './business'
import { watchGetPaginatedPartners } from './partners'
import {
  watchCreateProductRange,
  watchGetProductRanges,
  watchUpdateProductRangeSaga,
} from './catchements'
import { all } from 'redux-saga/effects'
import {
  watchGetActivityParameters,
  watchGetCoins,
  watchGetDenominations,
  watchGetNationalities,
  watchGetPartnersCategories,
} from './general'
import {
  watchGetPaginatedEconomicActivities,
  watchPostPaginatedEconomicActivities,
} from './economicActivities'
import { watchGetTransistSessions } from './transistSections'
import { watchCreateLegalPerson, watchCreatePhysicalPerson } from './Person'
import { watchCreateAddress } from './address'

export default function* rootSaga(): Generator {
  yield all([
    watchAuthenticateUser(),
    watchGetBusinessInfo(),
    watchGetNationalities(),
    watchGetPaginatedPartners(),
    watchGetPartnersCategories(),
    watchGetProductRanges(),
    watchCreateProductRange(),
    watchUpdateProductRangeSaga(),
    watchGetUserMenuOptions(),
    watchGetPaginatedEconomicActivities(),
    watchGetCoins(),
    watchGetActivityParameters(),
    watchPostPaginatedEconomicActivities(),
    watchGetTransistSessions(),
    watchCreatePhysicalPerson(),
    watchCreateLegalPerson(),
    watchCreateAddress(),
    watchGetDenominations(),
  ])
}
