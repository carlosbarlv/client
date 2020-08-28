import { call, put, takeLatest } from 'redux-saga/effects'
import {
  getPaginatedEconomicActivityFailure,
  getPaginatedEconomicActivitySuccess,
} from '../actions/economicActivities'
import { economicActivitiesApiHelpers } from '../utils/api'
import { PERSON_GET_ECONOMIC_ACTIVITY } from '../constants/actions'

function* getPaginatedEconomicActivitiesSaga() {
  try {
    const response = yield call(() =>
      economicActivitiesApiHelpers.getEconomicActivities()
    )

    const {
      data: economicActivity,
      meta: economicActivitiesMetadata,
    } = response.data

    yield put(
      getPaginatedEconomicActivitySuccess(
        economicActivity,
        economicActivitiesMetadata
      )
    )
  } catch (error) {
    yield put(getPaginatedEconomicActivityFailure())
  }
}

function* watchGetPaginatedEconomicActivities() {
  yield takeLatest(
    PERSON_GET_ECONOMIC_ACTIVITY,
    getPaginatedEconomicActivitiesSaga
  )
}

export { watchGetPaginatedEconomicActivities }
