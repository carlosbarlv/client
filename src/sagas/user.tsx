import { call, put, takeLatest } from 'redux-saga/effects'
import {
  AuthenticateUserAction,
  authenticateUserFailure,
  authenticateUserSuccess,
  GetMenuOptionsAction,
  getMenuOptionsFailure,
  getMenuOptionsSuccess,
} from '../actions/user'
import { USER_AUTHENTICATE, USER_GET_MENU_OPTIONS } from '../constants/actions'
import { userApiHelpers } from '../utils/api'
import { createSession } from '../utils/session'

function* getUserMenuOptionsSaga({
  username,
  businessId,
}: GetMenuOptionsAction) {
  try {
    const response = yield call(() =>
      userApiHelpers.getUserMenuOptions({
        businessId,
        username,
      })
    )

    const { data: menuOptions } = response.data

    yield put(getMenuOptionsSuccess(menuOptions))
  } catch (error) {
    yield put(getMenuOptionsFailure())
  }
}

function* watchGetUserMenuOptions() {
  yield takeLatest(USER_GET_MENU_OPTIONS, getUserMenuOptionsSaga)
}

function* authenticateUserSaga({ username, password }: AuthenticateUserAction) {
  try {
    const response = yield call(() =>
      userApiHelpers.authenticateUser({
        username,
        password,
      })
    )

    const { data: userInfo } = response.data

    createSession(userInfo)
    yield put(authenticateUserSuccess())
  } catch (error) {
    yield put(authenticateUserFailure())
  }
}

function* watchAuthenticateUser() {
  yield takeLatest(USER_AUTHENTICATE, authenticateUserSaga)
}

export { watchGetUserMenuOptions, watchAuthenticateUser }
