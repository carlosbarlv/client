import Axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';
import {
  getBusinessInfoSuccess,
  getBusinessInfoFailure,
} from '../actions/business';
import { WEB_SERVICE_API_BUSINESS } from '../constants/routes';
import { USER_GET_MENU_OPTIONS } from '../constants/actions';

function* getBusinessInfo({ businessId }: any) {
  try {
    const response = yield call(Axios.post, WEB_SERVICE_API_BUSINESS, {
      pidEmpresa: businessId,
    });

    if (response.data.items && !response.data.items.length) {
      yield put(getBusinessInfoFailure());
    } else {
      const {
        NOMBRE_EMPRESA: name,
        NOMBRE_CC: ccName,
      } = response.data.items[0];

      yield put(getBusinessInfoSuccess(name, ccName));
    }
  } catch (e) {
    yield put(getBusinessInfoFailure());
  }
}

function* watchGetBusinessInfo() {
  yield takeLatest(USER_GET_MENU_OPTIONS, getBusinessInfo);
}

export { watchGetBusinessInfo };
