import { put, takeLatest } from 'redux-saga/effects'
import {
  getBusinessInfoFailure,
  getBusinessInfoSuccess,
} from '../actions/business'
import { USER_GET_MENU_OPTIONS } from '../constants/actions'
import { GetMenuOptionsAction } from '../actions/user'

function* getBusinessInfoSaga(payload: GetMenuOptionsAction) {
  try {
    // TODO: Add code when backend logic is avaialable
    yield put(
      getBusinessInfoSuccess(
        'NOMBRE DE LA EMPRESA',
        `CENTRO DE COSTO: ${payload.businessId}`
      )
    )
  } catch (error) {
    yield put(getBusinessInfoFailure())
  }
}

function* watchGetBusinessInfo() {
  yield takeLatest(USER_GET_MENU_OPTIONS, getBusinessInfoSaga)
}

export { watchGetBusinessInfo }
