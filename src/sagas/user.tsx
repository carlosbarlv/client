import Axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import {
  GetMenuOptionsAction,
  getMenuOptionsFailure,
  getMenuOptionsSuccess,
} from '../actions/user'
import { WEB_SERVICE_API_PERSONAL_MENU } from '../constants/routes'
import { USER_GET_MENU_OPTIONS } from '../constants/actions'

function* getUserMenuOptions({ username, businessId }: GetMenuOptionsAction) {
  try {
    const response = yield call(
      Axios.post,
      WEB_SERVICE_API_PERSONAL_MENU,
      {
        businessId,
        username,
      },
      {
        headers: {
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRSQU5TQUNDSU9OQUwiLCJidXNpbmVzc0lkIjoiMyIsImlhdCI6MTU5NDIzNzI2MiwiZXhwIjoxNTk0MzIzNjYyfQ.BgAvl-nvtsMAS_MJci6fDt3ip64Mj-krvbDdLlHeFVU',
        },
      }
    )

    const { data: menuOptions } = response.data

    yield put(getMenuOptionsSuccess(menuOptions))
  } catch (e) {
    yield put(getMenuOptionsFailure())
  }
}

function* watchGetUserMenuOptions() {
  yield takeLatest(USER_GET_MENU_OPTIONS, getUserMenuOptions)
}

export { watchGetUserMenuOptions }
