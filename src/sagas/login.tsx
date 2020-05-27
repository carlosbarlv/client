import Axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';
import {
  authenticateUserSuccess,
  authenticateUserFailure,
} from '../actions/login';
import { createSession } from '../utils/session';
import { WEB_SERVICE_API_LOGIN } from '../constants/routes';
import { LOGIN_AUTHENTICATE } from '../constants/actions';

function* authenticateUser({ username, password }: any) {
  try {
    // This should be in a separate file
    const response = yield call(Axios.post, WEB_SERVICE_API_LOGIN, {
      pusuario: username,
      ppassword: password,
    });

    if (response.data.items && !response.data.items.length) {
      yield put(authenticateUserFailure());
    } else {
      const userInfo = response.data.items[0];

      createSession(userInfo);
      yield put(authenticateUserSuccess());
    }
  } catch (error) {
    yield put(authenticateUserFailure());
  }
}

function* watchAuthenticateUser() {
  yield takeLatest(LOGIN_AUTHENTICATE, authenticateUser);
}

export { watchAuthenticateUser };
