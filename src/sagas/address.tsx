import { call, put, takeLatest } from 'redux-saga/effects'
import {
  CreateAddressAction,
  createAddressesFailure,
  createAddressesSuccess,
} from '../actions/addresses'
import { addressApiHelper } from '../utils/api'
import { showNotification } from '../utils/general'
import { ADDRESSES_CREATE_ADDRESSES } from '../constants/actions'

function* createAddressSaga(payload: CreateAddressAction) {
  try {
    const { data: response } = yield call(() => {
      return addressApiHelper.createAddress(payload.Address)
    })

    const { message, data } = response
    yield put(createAddressesSuccess(data))
    showNotification('Operación Exitosa', message, 'success')
  } catch ({ response }) {
    const message = response ? response.data.message : 'Intentelo nuevamente'
    showNotification('Error', message, 'error')
    yield put(createAddressesFailure())
  }
}

function* watchCreateAddress() {
  yield takeLatest(ADDRESSES_CREATE_ADDRESSES, createAddressSaga)
}

export { watchCreateAddress }
