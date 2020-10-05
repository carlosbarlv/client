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
  watchGetNationalities,
  watchGetPartnersCategories,
} from './general'
import {
  watchGetPaginatedEconomicActivities,
  watchPostPaginatedEconomicActivities,
} from './economicActivities'
import { watchCreatePerson } from './physicalPerson'
import { watchGetTransistSessions } from './transistSections'

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
    watchCreatePerson(),
    watchPostPaginatedEconomicActivities(),
    watchGetTransistSessions(),
  ])
}
