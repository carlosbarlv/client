import { call, put, takeLatest } from 'redux-saga/effects'
import { nationalitiesApiHelpers } from '../utils/api'
import { GENERAL_GET_NATIONALITIES } from '../constants/actions'
import {
  getNationalitiesFailure,
  getNationalitiesSuccess,
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

export { watchGetNationalities }
