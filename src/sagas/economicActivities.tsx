import { call, put, takeLatest } from 'redux-saga/effects'
import {
  getPaginatedEconomicActivityFailure,
  getPaginatedEconomicActivitySuccess,
  PostEconomicActivityAction,
  postEconomicActivityFailure,
  postEconomicActivitySuccess,
} from '../actions/economicActivities'
import { economicActivitiesApiHelpers } from '../utils/api'
import {
  PERSON_GET_ECONOMIC_ACTIVITY,
  PERSON_POST_ECONOMIC_ACTIVITY,
} from '../constants/actions'

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

function* postPaginatedEconomicActivitiesSaga(
  payload: PostEconomicActivityAction
) {
  try {
    const response = yield call(() =>
      economicActivitiesApiHelpers.postGetEconomicActivities(payload.keyword)
    )
    const {
      data: economicActivity,
      meta: economicActivitiesMetadata,
    } = response.data

    yield put(
      postEconomicActivitySuccess(economicActivity, economicActivitiesMetadata)
    )
  } catch (error) {
    yield put(postEconomicActivityFailure())
  }
}

function* watchPostPaginatedEconomicActivities() {
  yield takeLatest(
    PERSON_POST_ECONOMIC_ACTIVITY,
    postPaginatedEconomicActivitiesSaga
  )
}

export { watchPostPaginatedEconomicActivities }
