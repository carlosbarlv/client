import Axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import {
  authenticateUserFailure,
  authenticateUserSuccess,
} from '../actions/login'
import { createSession } from '../utils/session'
import { WEB_SERVICE_API_LOGIN } from '../constants/routes'
import { LOGIN_AUTHENTICATE } from '../constants/actions'

function* authenticateUser({ username, password }: any) {
  try {
    // This should be in a separate file
    const response = yield call(Axios.post, WEB_SERVICE_API_LOGIN, {
      username,
      password,
    })

    const { data: userInfo } = response.data

    createSession(userInfo)
    yield put(authenticateUserSuccess())
  } catch (error) {
    yield put(authenticateUserFailure())
  }
}

function* watchAuthenticateUser() {
  yield takeLatest(LOGIN_AUTHENTICATE, authenticateUser)
}

export { watchAuthenticateUser }
