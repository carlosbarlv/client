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
  watchGetProvince,
} from './general'
import {
  watchGetPaginatedEconomicActivities,
  watchPostPaginatedEconomicActivities,
} from './economicActivities'
import { watchGetTransistSessions } from './transistSections'
import { watchCreateAddress } from './address'
import { watchCreateLegalPerson, watchCreatePhysicalPerson } from './Person'

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
    watchGetProvince(),
    watchGetDenominations(),
  ])
}
