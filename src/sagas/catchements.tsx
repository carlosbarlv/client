import { call, put, takeLatest } from 'redux-saga/effects'
import { CATCHEMENTS_GET_PRODUCT_RANGES } from '../constants/actions'
import {
  getProductRangesFailure,
  getProductRangesSuccess,
} from '../actions/catchements'
import { catchementsApiHelpers } from '../utils/api'

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

export { watchGetProductRanges }
