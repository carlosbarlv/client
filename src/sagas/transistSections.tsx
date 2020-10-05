import { call, put, takeLatest } from 'redux-saga/effects'
import {
  getTransistSessionsFailure,
  getTransistSessionsSuccess,
} from '../actions/transistSections'
import { TRANSIST_SESSIONS_GET_TRANSIST_SESSIONS } from '../constants/actions'
import { transistSessionsApiHelper } from '../utils/api'

function* getTransistSessionsSaga() {
  try {
    const { data: response } = yield call(() => {
      return transistSessionsApiHelper.getTransistSessions()
    })
    yield put(getTransistSessionsSuccess(response.data))
  } catch (error) {
    yield put(getTransistSessionsFailure())
  }
}

function* watchGetTransistSessions() {
  yield takeLatest(
    TRANSIST_SESSIONS_GET_TRANSIST_SESSIONS,
    getTransistSessionsSaga
  )
}

export { watchGetTransistSessions }
