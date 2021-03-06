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
  GENERAL_GET_MUNICIPALITIES,
  GENERAL_GET_MUNICIPALITIES_FAILURE,
  GENERAL_GET_MUNICIPALITIES_SUCCESS,
  GENERAL_GET_NATIONALITIES,
  GENERAL_GET_NATIONALITIES_FAILURE,
  GENERAL_GET_NATIONALITIES_SUCCESS,
  GENERAL_GET_PARTNERS_CATEGORIES,
  GENERAL_GET_PARTNERS_CATEGORIES_FAILURE,
  GENERAL_GET_PARTNERS_CATEGORIES_SUCCESS,
  GENERAL_GET_PROVINCES,
  GENERAL_GET_PROVINCES_FAILURE,
  GENERAL_GET_PROVINCES_SUCCESS,
  GENERAL_GET_SECTORS,
  GENERAL_GET_SECTORS_FAILURE,
  GENERAL_GET_SECTORS_SECCESS,
  SET_GENERAL_STORE_DATA,
} from '../constants/actions'
import {
  GeneralActivityParametersAction,
  GeneralCoinsAction,
  GeneralCountriesAction,
  GeneralDenominationsAction,
  GeneralMunicipalitiesAction,
  GeneralNationalitiesAction,
  GeneralPartnersCategoriesAction,
  GeneralProvincesAction,
  GeneralSectorsAction,
  SetGeneralStoreDataAction,
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
  DENOMINACION: string | number
  CANTIDAD: number
  DESCRIPCION: string
  FECHA_INSERCION: null | Date
  FECHA_ACTUALIZACION: Date
  USUARIO_INSERCION: null
  USUARIO_ACTUALIZACION: string
  ESTADO: string
  TIPO: string
  TR_ORIGEN: null
  ID_MONEDA: string
  CANTIDAD_DIGITADA?: number
  MONTO?: number
  REFERENCIA?: string
  NUMERO_REFERENCIA?: string
  ENTREGADO?: string
}

export type GeneralType = {
  desc?: string
  value?: string
  condition?: {
    ID_PROVINCIA?: string
    ID_MUNICIPIO?: string
  }
}

export type GeneralState = {
  nationalities: string[]
  partnersCategories: PartnersCategories[]
  coins: Coins[]
  activityParameters: ActivityParameters
  provinces: GeneralType[]
  denominations: Denominations[]
  generalStore: {
    denominationsStore: {
      received: Denominations[] | [],
      delivered: Denominations[] | []
    }
  }
  countries: GeneralType[]
  sectors: GeneralType[]
  municipalities: GeneralType[]
}

const initialState = {
  nationalities: [],
  partnersCategories: [],
  coins: [],
  activityParameters: { '': '' },
  provinces: [],
  denominations: [],
  generalStore: {
    denominationsStore: {
      received: [],
      delivered: [],
    },
  },
  countries: [],
  sectors: [],
  municipalities: [],
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
    | GeneralSectorsAction
    | GeneralMunicipalitiesAction
    | SetGeneralStoreDataAction
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
    case GENERAL_GET_SECTORS_SECCESS: {
      return {
        ...state,
        sectors: action.sectors,
      }
    }
    case GENERAL_GET_MUNICIPALITIES_SUCCESS: {
      return {
        ...state,
        municipalities: action.municipalities,
      }
    }
    case SET_GENERAL_STORE_DATA:
      return {
        ...state,
        generalStore: action.generalStore,
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
    case GENERAL_GET_SECTORS:
    case GENERAL_GET_SECTORS_FAILURE:
    case GENERAL_GET_MUNICIPALITIES:
    case GENERAL_GET_MUNICIPALITIES_FAILURE:
    default:
      return state
  }
}

export default general
