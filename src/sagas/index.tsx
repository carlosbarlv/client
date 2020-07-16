import { watchAuthenticateUser, watchGetUserMenuOptions } from './user'
import { watchGetBusinessInfo } from './business'
import { watchGetPaginatedPartners } from './partners'
import { all } from 'redux-saga/effects'

export default function* rootSaga(): Generator {
  yield all([
    watchAuthenticateUser(),
    watchGetBusinessInfo(),
    watchGetUserMenuOptions(),
    watchGetPaginatedPartners(),
  ])
}
