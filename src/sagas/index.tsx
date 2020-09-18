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
import { watchGetPaginatedEconomicActivities } from './economicActivities'

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
  ])
}
