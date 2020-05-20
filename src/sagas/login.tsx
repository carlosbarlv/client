import Axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';
import {
  authenticateUserSuccess,
  authenticateUserFailure,
} from '../actions/login';
import { createSession } from '../utils/session';
import { WEB_SERVICE_API_LOGIN } from '../constants/routes';

function* authenticateUser({ username, password }: any) {
  try {
    // This should be in a separate file
    const response = yield call(
      Axios.post,
      // eslint-disable-next-line no-undef
      WEB_SERVICE_API_LOGIN,
      {
        pusuario: username,
        ppassword: password,
      }
    );

    if (response.data.items && !response.data.items.length) {
      // eslint-disable-next-line no-console
      console.log('Failure');
      yield put(authenticateUserFailure());
    } else {
      // eslint-disable-next-line no-console
      console.log('Success');
      const user = JSON.stringify(response.data.items[0]);

      createSession(user);
      yield put(authenticateUserSuccess());
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error');
    yield put(authenticateUserFailure());
  }
}

function* watchAuthenticateUser() {
  yield takeLatest('LOGIN_AUTHENTICATE', authenticateUser);
}

export { watchAuthenticateUser };
