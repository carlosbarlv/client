import { call, put, takeLatest } from 'redux-saga/effects'
import {
  CreatePhysicalPersonAction,
  createPhysicalPersonFailure,
  createPhysicalPersonSuccess,
} from '../actions/physicalPerson'
import { personApiHelper } from '../utils/api'
import { showNotification } from '../utils/general'
import { PHYSICAL_PERSON_CREATE_PERSON } from '../constants/actions'

function* createPersonSaga(payload: CreatePhysicalPersonAction) {
  try {
    const { data: response } = yield call(() => {
      return personApiHelper.createPerson(payload.physicalPerson)
    })

    const { message, data } = response
    yield put(createPhysicalPersonSuccess(data))
    showNotification('Operación Exitosa', message, 'success')
  } catch ({ response }) {
    const message = response ? response.data.message : 'Intentelo nuevamente'
    showNotification('Error', message, 'error')
    yield put(createPhysicalPersonFailure())
  }
}

function* watchCreatePerson() {
  yield takeLatest(PHYSICAL_PERSON_CREATE_PERSON, createPersonSaga)
}

export { watchCreatePerson }
