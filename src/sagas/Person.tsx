import { call, put, takeLatest } from 'redux-saga/effects'
import {
  CreateLegalPersonAction,
  createLegalPersonFailure,
  createLegalPersonSuccess,
  CreatePhysicalPersonAction,
  createPhysicalPersonFailure,
  createPhysicalPersonSuccess,
} from '../actions/Person'
import { legalPersonApiHelper, physicalPersonApiHelper } from '../utils/api'
import { showNotification } from '../utils/general'
import {
  LEGAL_PERSON_CREATE_PERSON,
  PHYSICAL_PERSON_CREATE_PERSON,
} from '../constants/actions'

function* createPhysicalPersonSaga(payload: CreatePhysicalPersonAction) {
  try {
    const { data: response } = yield call(() => {
      return physicalPersonApiHelper.createPhysicalPerson(payload.Person)
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

function* watchCreatePhysicalPerson() {
  yield takeLatest(PHYSICAL_PERSON_CREATE_PERSON, createPhysicalPersonSaga)
}

function* createLegalPersonSaga(payload: CreateLegalPersonAction) {
  try {
    const { data: response } = yield call(() => {
      return legalPersonApiHelper.createLegalPerson(payload.Person)
    })

    const { message, data } = response
    yield put(createLegalPersonSuccess(data))
    showNotification('Operación Exitosa', message, 'success')
  } catch ({ response }) {
    const message = response ? response.data.message : 'Intentelo nuevamente'
    showNotification('Error', message, 'error')
    yield put(createLegalPersonFailure())
  }
}

function* watchCreateLegalPerson() {
  yield takeLatest(LEGAL_PERSON_CREATE_PERSON, createLegalPersonSaga)
}

export { watchCreatePhysicalPerson, watchCreateLegalPerson }
