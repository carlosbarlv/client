import Axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { getMenuOptionsFailure, getMenuOptionsSuccess } from '../actions/user'
import { WEB_SERVICE_API_PERSONAL_MENU } from '../constants/routes'
import { USER_GET_MENU_OPTIONS } from '../constants/actions'
import { formatMenuOptions } from '../utils/general'

function* getUserMenuOptions({ username, businessId }: any) {
  try {
    const response = yield call(Axios.post, WEB_SERVICE_API_PERSONAL_MENU, {
      pidEmpresa: businessId,
      pusuario: username,
    })

    const { data: rawOptions } = response.data
    const userMenuOptions = formatMenuOptions(rawOptions)

    yield put(getMenuOptionsSuccess(userMenuOptions))
  } catch (e) {
    yield put(getMenuOptionsFailure())
  }
}

function* watchGetUserMenuOptions() {
  yield takeLatest(USER_GET_MENU_OPTIONS, getUserMenuOptions)
}

export { watchGetUserMenuOptions }
