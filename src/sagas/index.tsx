import { watchAuthenticateUser, watchGetUserMenuOptions } from './user'
import { watchGetBusinessInfo } from './business'
import { watchGetPaginatedPartners } from './partners'
import {
  watchCreateProductRange,
  watchGetProductRanges,
  watchUpdateProductRangeSaga,
} from './catchements'
import { all } from 'redux-saga/effects'
import { watchGetNationalities } from './general'

export default function* rootSaga(): Generator {
  yield all([
    watchAuthenticateUser(),
    watchGetBusinessInfo(),
    watchGetUserMenuOptions(),
    watchGetPaginatedPartners(),
    watchGetNationalities(),
    watchGetProductRanges(),
    watchCreateProductRange(),
    watchUpdateProductRangeSaga(),
  ])
}
