import Axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import {
  getBusinessInfoFailure,
  getBusinessInfoSuccess,
} from '../actions/business'
import { WEB_SERVICE_API_BUSINESS } from '../constants/routes'
import { USER_GET_MENU_OPTIONS } from '../constants/actions'
import { GetMenuOptionsAction } from '../actions/user'

function* getBusinessInfo(payload: GetMenuOptionsAction) {
  try {
    const response = yield call(Axios.post, WEB_SERVICE_API_BUSINESS, {
      pidEmpresa: payload.businessId,
    })

    if (response.data.items && !response.data.items.length) {
      yield put(getBusinessInfoFailure())
    } else {
      const [{ NOMBRE_EMPRESA: name, NOMBRE_CC: ccName }] = response.data.items

      yield put(getBusinessInfoSuccess(name, ccName))
    }
  } catch (e) {
    yield put(getBusinessInfoFailure())
  }
}

function* watchGetBusinessInfo() {
  yield takeLatest(USER_GET_MENU_OPTIONS, getBusinessInfo)
}

export { watchGetBusinessInfo }
