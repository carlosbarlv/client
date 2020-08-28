import {
  GENERAL_GET_COINS,
  GENERAL_GET_COINS_FAILURE,
  GENERAL_GET_COINS_SUCCESS,
  GENERAL_GET_NATIONALITIES,
  GENERAL_GET_NATIONALITIES_FAILURE,
  GENERAL_GET_NATIONALITIES_SUCCESS,
  GENERAL_GET_PARTNERS_CATEGORIES,
  GENERAL_GET_PARTNERS_CATEGORIES_FAILURE,
  GENERAL_GET_PARTNERS_CATEGORIES_SUCCESS,
} from '../constants/actions'
import {
  GeneralCoinsAction,
  GeneralNationalitiesAction,
  GeneralPartnersCategoriesAction,
} from '../actions/general'

export type PartnersCategories = {
  desc: string
  value: string
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

export type GeneralState = {
  nationalities: string[]
  partnersCategories: PartnersCategories[]
  coins: Coins[]
}

const initialState = {
  nationalities: [],
  partnersCategories: [],
  coins: [],
}

const general = (
  state: GeneralState = initialState,
  action:
    | GeneralNationalitiesAction
    | GeneralPartnersCategoriesAction
    | GeneralCoinsAction
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
    case GENERAL_GET_NATIONALITIES:
    case GENERAL_GET_PARTNERS_CATEGORIES:
    case GENERAL_GET_COINS:
    case GENERAL_GET_NATIONALITIES_FAILURE:
    case GENERAL_GET_PARTNERS_CATEGORIES_FAILURE:
    case GENERAL_GET_COINS_FAILURE:
    default:
      return state
  }
}

export default general
