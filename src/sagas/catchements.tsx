import { call, put, takeLatest } from 'redux-saga/effects'
import {
  CATCHEMENTS_CREATE_PRODUCT_RANGE,
  CATCHEMENTS_GET_PRODUCT_RANGES,
  CATCHEMENTS_UPDATE_PRODUCT_RANGE,
} from '../constants/actions'
import {
  CreateProductRangeAction,
  createProductRangeFailure,
  createProductRangeSuccess,
  getProductRangesFailure,
  getProductRangesSuccess,
  updateProductRangeSuccess,
} from '../actions/catchements'
import { catchementsApiHelpers } from '../utils/api'
import { showNotification } from '../utils/general'

function* getProductRangesSaga() {
  try {
    const { data: response } = yield call(() => {
      return catchementsApiHelpers.getProductRanges()
    })

    const { data: productRanges } = response

    yield put(getProductRangesSuccess(productRanges))
  } catch (error) {
    yield put(getProductRangesFailure())
  }
}

function* watchGetProductRanges() {
  yield takeLatest(CATCHEMENTS_GET_PRODUCT_RANGES, getProductRangesSaga)
}

function* createProductRangeSaga(payload: CreateProductRangeAction) {
  try {
    const { data: response } = yield call(() => {
      return catchementsApiHelpers.createProductRange(payload.productRange)
    })

    const { message, data } = response

    yield put(createProductRangeSuccess(data))
    showNotification({
      title: 'Operación Exitosa',
      description: message,
      type: 'success'
    })
  
  } catch ({ response }) {
    const message = response ? response.data.message : 'Intentelo nuevamente'
    
    showNotification({
      title: 'Error',
      description: message,
      type: 'error'
    })
    yield put(createProductRangeFailure())
  }
}

function* watchCreateProductRange() {
  yield takeLatest(CATCHEMENTS_CREATE_PRODUCT_RANGE, createProductRangeSaga)
}

function* updateProductRangeSaga(payload: CreateProductRangeAction) {
  try {
    const { data: response } = yield call(() => {
      return catchementsApiHelpers.updateProductRange(payload.productRange)
    })

    const { message, data } = response

    yield put(updateProductRangeSuccess(data))
    showNotification({
      title: 'Operación Exitosa',
      description: message,
      type: 'success'
    })
  } catch ({ response }) {
    const message = response ? response.data.message : 'Intentelo nuevamente'

    showNotification({
      title: 'Error',
      description: message,
      type: 'error'
    })
    yield put(createProductRangeFailure())
  }
}

function* watchUpdateProductRangeSaga() {
  yield takeLatest(CATCHEMENTS_UPDATE_PRODUCT_RANGE, updateProductRangeSaga)
}

export {
  watchGetProductRanges,
  watchCreateProductRange,
  watchUpdateProductRangeSaga,
}
