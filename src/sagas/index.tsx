import { watchAuthenticateUser } from './login';
import { watchGetUserMenuOptions } from './user';
import { watchGetBusinessInfo } from './business';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    watchAuthenticateUser(),
    watchGetBusinessInfo(),
    watchGetUserMenuOptions(),
  ]);
}
