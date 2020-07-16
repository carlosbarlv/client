import { call, put, takeLatest } from 'redux-saga/effects'
import {
  GetPaginatedPartnersAction,
  getPaginatedPartnersFailure,
  getPaginatedPartnersSuccess,
} from '../actions/partners'
import { partnersApiHelpers } from '../utils/api'
import { PARTNERS_GET_PARTNERS } from '../constants/actions'

function* getPaginatedPartnersSaga({
  status,
  pageNumber,
  pageSize,
}: GetPaginatedPartnersAction) {
  try {
    const { data: response } = yield call(() => {
      return partnersApiHelpers.getPersonaList(
        {
          status,
        },
        pageNumber,
        pageSize
      )
    })

    const { pagination } = response.meta

    yield put(getPaginatedPartnersSuccess(response.data, pagination))
  } catch (error) {
    yield put(getPaginatedPartnersFailure())
  }
}

function* watchGetPaginatedPartners() {
  yield takeLatest(PARTNERS_GET_PARTNERS, getPaginatedPartnersSaga)
}

export { watchGetPaginatedPartners }
