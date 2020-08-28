import { call, put, takeLatest } from 'redux-saga/effects'
import {
  coinsApiHelpers,
  nationalitiesApiHelpers,
  partnersCategoriesApiHelpers,
} from '../utils/api'
import {
  GENERAL_GET_COINS,
  GENERAL_GET_NATIONALITIES,
  GENERAL_GET_PARTNERS_CATEGORIES,
} from '../constants/actions'
import {
  getCoinsFailure,
  getCoinsSuccess,
  getNationalitiesFailure,
  getNationalitiesSuccess,
  getPartnersCategoriesFailure,
  getPartnersCategoriesSuccess,
} from '../actions/general'

function* getNationalitiesSaga() {
  try {
    const response = yield call(() =>
      nationalitiesApiHelpers.getNationalities()
    )

    const { data: nationalities } = response.data

    yield put(getNationalitiesSuccess(nationalities))
  } catch (error) {
    yield put(getNationalitiesFailure())
  }
}

function* getPartnersCategoriesSaga() {
  try {
    const response = yield call(() =>
      partnersCategoriesApiHelpers.getPartnersCategories()
    )

    const { data: partnersCategories } = response.data

    yield put(getPartnersCategoriesSuccess(partnersCategories))
  } catch (error) {
    yield put(getPartnersCategoriesFailure())
  }
}

function* getCoinsSaga() {
  try {
    const response = yield call(() => coinsApiHelpers.getCoins())

    const { data: coins } = response.data

    yield put(getCoinsSuccess(coins))
  } catch (error) {
    yield put(getCoinsFailure())
  }
}

function* watchGetNationalities() {
  yield takeLatest(GENERAL_GET_NATIONALITIES, getNationalitiesSaga)
}

function* watchGetPartnersCategories() {
  yield takeLatest(GENERAL_GET_PARTNERS_CATEGORIES, getPartnersCategoriesSaga)
}

function* watchGetCoins() {
  yield takeLatest(GENERAL_GET_COINS, getCoinsSaga)
}

export { watchGetNationalities, watchGetPartnersCategories, watchGetCoins }
