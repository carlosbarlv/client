import {
  GENERAL_GET_ACTIVITY_PARAMETERS,
  GENERAL_GET_ACTIVITY_PARAMETERS_FAILURE,
  GENERAL_GET_ACTIVITY_PARAMETERS_SUCCESS,
  GENERAL_GET_COINS,
  GENERAL_GET_COINS_FAILURE,
  GENERAL_GET_COINS_SUCCESS,
  GENERAL_GET_COUNTRIES,
  GENERAL_GET_COUNTRIES_FAILURE,
  GENERAL_GET_COUNTRIES_SUCCESS,
  GENERAL_GET_DENOMINATIONS,
  GENERAL_GET_DENOMINATIONS_FAILURE,
  GENERAL_GET_DENOMINATIONS_SUCCESS,
  GENERAL_GET_NATIONALITIES,
  GENERAL_GET_NATIONALITIES_FAILURE,
  GENERAL_GET_NATIONALITIES_SUCCESS,
  GENERAL_GET_PARTNERS_CATEGORIES,
  GENERAL_GET_PARTNERS_CATEGORIES_FAILURE,
  GENERAL_GET_PARTNERS_CATEGORIES_SUCCESS,
  GENERAL_GET_PROVINCES,
  GENERAL_GET_PROVINCES_FAILURE,
  GENERAL_GET_PROVINCES_SUCCESS,
} from '../constants/actions'
import {
  GeneralActivityParametersAction,
  GeneralCoinsAction,
  GeneralCountriesAction,
  GeneralDenominationsAction,
  GeneralNationalitiesAction,
  GeneralPartnersCategoriesAction,
  GeneralProvincesAction,
} from '../actions/general'

export type PartnersCategories = {
  desc: string
  value: string
}

export type ActivityParameters = {
  [key: string]: string
}

export type CountrType = {
  countriId: string
}

export type Coins = {
  ID_EMPRESA: string
  ID_MONEDA: string
  DESCRIPCION: string
  USUARIO_INSERCION: string
  FECHA_INSERCION: Date
  ESTADO: string
  TASA_COMPRA: number
  TASA_VENTA: number
  TASA_TRANS: number
  FECHA_ACTUALIZACION: Date | null
  USUARIO_ACTUALIZACION: string | null
  DESCRIPCION_SING: string
  TR_ORIGEN: number | null
  SIMBOLO: string
  DIGITO_MONEDA: string | null
}

export type Denominations = {
  DENOMINACION: string
  CANTIDAD: number
  DESCRIPCION: string
  FECHA_INSERCION: null | Date
  FECHA_ACTUALIZACION: Date
  USUARIO_INSERCION: null
  USUARIO_ACTUALIZACION: string
  ESTADO: string
  TIPO: string
  TR_ORIGEN: null
}

export type GeneralType = {
  desc: string
  value: string
}

export type GeneralState = {
  nationalities: string[]
  partnersCategories: PartnersCategories[]
  coins: Coins[]
  activityParameters: ActivityParameters
  provinces: GeneralType[]
  denominations: Denominations[]
  countries: GeneralType[]
}

const initialState = {
  nationalities: [],
  partnersCategories: [],
  coins: [],
  activityParameters: { '': '' },
  provinces: [],
  denominations: [],
  countries: [],
}

const general = (
  state: GeneralState = initialState,
  action:
    | GeneralNationalitiesAction
    | GeneralPartnersCategoriesAction
    | GeneralCoinsAction
    | GeneralActivityParametersAction
    | GeneralProvincesAction
    | GeneralDenominationsAction
    | GeneralCountriesAction
): GeneralState => {
  switch (action.type) {
    case GENERAL_GET_NATIONALITIES_SUCCESS: {
      return {
        ...state,
        nationalities: action.nationalities,
      }
    }
    case GENERAL_GET_PARTNERS_CATEGORIES_SUCCESS: {
      return {
        ...state,
        partnersCategories: action.partnersCategories,
      }
    }
    case GENERAL_GET_COINS_SUCCESS: {
      return {
        ...state,
        coins: action.coins,
      }
    }
    case GENERAL_GET_DENOMINATIONS_SUCCESS: {
      return {
        ...state,
        denominations: action.denominations,
      }
    }
    case GENERAL_GET_ACTIVITY_PARAMETERS_SUCCESS: {
      return {
        ...state,
        activityParameters: action.activityParameters,
      }
    }
    case GENERAL_GET_PROVINCES_SUCCESS: {
      return {
        ...state,
        provinces: action.provinces,
      }
    }
    case GENERAL_GET_COUNTRIES_SUCCESS: {
      return {
        ...state,
        countries: action.countries,
      }
    }
    case GENERAL_GET_PROVINCES:
    case GENERAL_GET_PROVINCES_FAILURE:
    case GENERAL_GET_ACTIVITY_PARAMETERS:
    case GENERAL_GET_NATIONALITIES:
    case GENERAL_GET_PARTNERS_CATEGORIES:
    case GENERAL_GET_COINS:
    case GENERAL_GET_NATIONALITIES_FAILURE:
    case GENERAL_GET_PARTNERS_CATEGORIES_FAILURE:
    case GENERAL_GET_COINS_FAILURE:
    case GENERAL_GET_ACTIVITY_PARAMETERS_FAILURE:
    case GENERAL_GET_DENOMINATIONS_FAILURE:
    case GENERAL_GET_DENOMINATIONS:
    case GENERAL_GET_COUNTRIES:
    case GENERAL_GET_COUNTRIES_FAILURE:
    default:
      return state
  }
}

export default general
