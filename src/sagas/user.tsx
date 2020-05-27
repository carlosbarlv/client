import Axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';
import { getMenuOptionsSuccess, getMenuOptionsFailure } from '../actions/user';
import { WEB_SERVICE_API_PERSONAL_MENU } from '../constants/routes';
import { USER_GET_MENU_OPTIONS } from '../constants/actions';

function* getUserMenuOptions({ username, businessId }: any) {
  try {
    const response = yield call(Axios.post, WEB_SERVICE_API_PERSONAL_MENU, {
      pidEmpresa: businessId,
      pusuario: username,
    });

    if (response.data.items && !response.data.items.length) {
      yield put(getMenuOptionsFailure());
    } else {
      const userMenuOptions = response.data.items.map((item: any) => item.ID);

      yield put(getMenuOptionsSuccess(userMenuOptions));
    }
  } catch (e) {
    yield put(getMenuOptionsFailure());
  }
}

function* watchGetUserMenuOptions() {
  yield takeLatest(USER_GET_MENU_OPTIONS, getUserMenuOptions);
}

export { watchGetUserMenuOptions };
