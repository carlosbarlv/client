import { call, put, takeLatest } from 'redux-saga/effects'
import {
  activityParametersApiHelpers,
  coinsApiHelpers,
  countriesApiHelper,
  denominationsApiHelper,
  municipalitiesApiHelper,
  nationalitiesApiHelpers,
  partnersCategoriesApiHelpers,
  provincesApiHelper,
  sectorsApiHelper,
} from '../utils/api'
import {
  GENERAL_GET_ACTIVITY_PARAMETERS,
  GENERAL_GET_COINS,
  GENERAL_GET_COUNTRIES,
  GENERAL_GET_DENOMINATIONS,
  GENERAL_GET_MUNICIPALITIES,
  GENERAL_GET_NATIONALITIES,
  GENERAL_GET_PARTNERS_CATEGORIES,
  GENERAL_GET_PROVINCES,
  GENERAL_GET_SECTORS,
} from '../constants/actions'
import {
  GeneralGetActivityParametersAction,
  GeneralGetMunicipalitiesAction,
  GeneralGetPartnersCategoriesAction,
  GeneralGetProvincesAction,
  GeneralGetSectorsAction,
  getActivityParametersFailure,
  getActivityParametersSuccess,
  getCoinsFailure,
  getCoinsSuccess,
  getCountriesFailure,
  getCountriesSuccess,
  getDenominationsFailure,
  getDenominationsSuccess,
  getMunicipalitiesFailure,
  getMunicipalitiesSuccess,
  getNationalitiesFailure,
  getNationalitiesSuccess,
  getPartnersCategoriesFailure,
  getPartnersCategoriesSuccess,
  getProvincesFailure,
  getProvincesSuccess,
  getSectorsFailure,
  getSectorsSuccess,
} from '../actions/general'

function* getNationalitiesSaga() {
  try {
    const response = yield call(() =>
      nationalitiesApiHelpers.getNationalities()
    )

    const { data: nationalities } = response.data

    yield put(getNationalitiesSuccess(nationalities))
  } catch (error) {
    yield put(getNationalitiesFailure())
  }
}

function* watchGetNationalities() {
  yield takeLatest(GENERAL_GET_NATIONALITIES, getNationalitiesSaga)
}

function* getPartnersCategoriesSaga(
  payload: GeneralGetPartnersCategoriesAction
) {
  try {
    const response = yield call(() =>
      partnersCategoriesApiHelpers.getPartnersCategories(payload.listId)
    )

    const { data: partnersCategories } = response.data

    yield put(getPartnersCategoriesSuccess(partnersCategories))
  } catch (error) {
    yield put(getPartnersCategoriesFailure())
  }
}

function* watchGetPartnersCategories() {
  yield takeLatest(GENERAL_GET_PARTNERS_CATEGORIES, getPartnersCategoriesSaga)
}

function* getCoinsSaga() {
  try {
    const response = yield call(() => coinsApiHelpers.getCoins())

    const { data: coins } = response.data

    yield put(getCoinsSuccess(coins))
  } catch (error) {
    yield put(getCoinsFailure())
  }
}

function* watchGetCoins() {
  yield takeLatest(GENERAL_GET_COINS, getCoinsSaga)
}

function* getActivityParameters(payload: GeneralGetActivityParametersAction) {
  try {
    const response = yield call(() =>
      activityParametersApiHelpers.getActivityParameters(payload.activityId)
    )

    const { data: activityParameters } = response.data

    yield put(getActivityParametersSuccess(activityParameters))
  } catch (error) {
    yield put(getActivityParametersFailure())
  }
}

function* watchGetActivityParameters() {
  yield takeLatest(GENERAL_GET_ACTIVITY_PARAMETERS, getActivityParameters)
}

function* getProvincesSaga(payload: GeneralGetProvincesAction) {
  try {
    const response = yield call(() => {
      return provincesApiHelper.getProvinces(payload.countryId)
    })

    const { data: provinces } = response.data

    yield put(getProvincesSuccess(provinces))
  } catch (error) {
    yield put(getProvincesFailure())
  }
}

function* watchGetProvince() {
  yield takeLatest(GENERAL_GET_PROVINCES, getProvincesSaga)
}

function* getDenominationsSaga() {
  try {
    const { data: response } = yield call(() => {
      return denominationsApiHelper.getDenominations()
    })
    yield put(getDenominationsSuccess(response.data))
  } catch (error) {
    yield put(getDenominationsFailure())
  }
}

function* watchGetDenominations() {
  yield takeLatest(GENERAL_GET_DENOMINATIONS, getDenominationsSaga)
}

function* getCountriesSaga() {
  try {
    const response = yield call(() => {
      return countriesApiHelper.getCountries()
    })

    const { data: countries } = response.data

    yield put(getCountriesSuccess(countries))
  } catch (error) {
    yield put(getCountriesFailure())
  }
}

function* watchGetCountries() {
  yield takeLatest(GENERAL_GET_COUNTRIES, getCountriesSaga)
}

function* getSectorsSaga(payload: GeneralGetSectorsAction) {
  try {
    const response = yield call(() => {
      return sectorsApiHelper.getSectors(payload.condition)
    })

    const { data } = response.data

    yield put(getSectorsSuccess(data))
  } catch (error) {
    yield put(getSectorsFailure())
  }
}

function* watchGetSectors() {
  yield takeLatest(GENERAL_GET_SECTORS, getSectorsSaga)
}

function* getMunicipalitiesSaga(payload: GeneralGetMunicipalitiesAction) {
  try {
    const response = yield call(() => {
      return municipalitiesApiHelper.getMunicipalities(payload.condition)
    })

    const { data } = response.data
    yield put(getMunicipalitiesSuccess(data))
  } catch (error) {
    yield put(getMunicipalitiesFailure())
  }
}

function* watchGetMunicipalities() {
  yield takeLatest(GENERAL_GET_MUNICIPALITIES, getMunicipalitiesSaga)
}

export {
  watchGetNationalities,
  watchGetPartnersCategories,
  watchGetCoins,
  watchGetActivityParameters,
  watchGetProvince,
  watchGetCountries,
  watchGetSectors,
  watchGetDenominations,
  watchGetMunicipalities,
}
