import { call, put, takeLatest } from 'redux-saga/effects'
import {
  activityParametersApiHelpers,
  coinsApiHelpers,
  denominationsApiHelper,
  nationalitiesApiHelpers,
  partnersCategoriesApiHelpers,
} from '../utils/api'
import {
  GENERAL_GET_ACTIVITY_PARAMETERS,
  GENERAL_GET_COINS,
  GENERAL_GET_DENOMINATIONS,
  GENERAL_GET_NATIONALITIES,
  GENERAL_GET_PARTNERS_CATEGORIES,
} from '../constants/actions'
import {
  GeneralGetActivityParametersAction,
  GeneralGetPartnersCategoriesAction,
  getActivityParametersFailure,
  getActivityParametersSuccess,
  getCoinsFailure,
  getCoinsSuccess,
  getDenominationsFailure,
  getDenominationsSuccess,
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

function* watchGetNationalities() {
  yield takeLatest(GENERAL_GET_NATIONALITIES, getNationalitiesSaga)
}

function* getPartnersCategoriesSaga(
  payload: GeneralGetPartnersCategoriesAction
) {
  try {
    const response = yield call(() =>
      partnersCategoriesApiHelpers.getPartnersCategories(payload.listId)
    )

    const { data: partnersCategories } = response.data

    yield put(getPartnersCategoriesSuccess(partnersCategories))
  } catch (error) {
    yield put(getPartnersCategoriesFailure())
  }
}

function* watchGetPartnersCategories() {
  yield takeLatest(GENERAL_GET_PARTNERS_CATEGORIES, getPartnersCategoriesSaga)
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

function* watchGetCoins() {
  yield takeLatest(GENERAL_GET_COINS, getCoinsSaga)
}

function* getActivityParameters(payload: GeneralGetActivityParametersAction) {
  try {
    const response = yield call(() =>
      activityParametersApiHelpers.getActivityParameters(payload.activityId)
    )

    const { data: activityParameters } = response.data

    yield put(getActivityParametersSuccess(activityParameters))
  } catch (error) {
    yield put(getActivityParametersFailure())
  }
}

function* watchGetActivityParameters() {
  yield takeLatest(GENERAL_GET_ACTIVITY_PARAMETERS, getActivityParameters)
}

function* getDenominationsSaga() {
  try {
    const { data: response } = yield call(() => {
      return denominationsApiHelper.getDenominations()
    })
    yield put(getDenominationsSuccess(response.data))
  } catch (error) {
    yield put(getDenominationsFailure())
  }
}

function* watchGetDenominations() {
  yield takeLatest(
    GENERAL_GET_DENOMINATIONS,
    getDenominationsSaga
  )
}

export {
  watchGetNationalities,
  watchGetPartnersCategories,
  watchGetCoins,
  watchGetActivityParameters,
  watchGetDenominations
}
