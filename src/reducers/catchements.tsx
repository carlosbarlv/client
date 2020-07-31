import {
  CATCHEMENTS_GET_PRODUCT_RANGES,
  CATCHEMENTS_GET_PRODUCT_RANGES_FAILURE,
  CATCHEMENTS_GET_PRODUCT_RANGES_SUCCESS,
} from '../constants/actions'
import { CatchementsAction } from '../actions/catchements'

export type ProductRange = {
  ID_EMPRESA: string
  ID_RANGO: number
  DESCRIPCION: string
  ESTADO: string
  ID_MONEDA: string
  ID_LIST_FREC_PLAZO: number
  FRECUENCIA_PLAZO: number
  MONTO_MAXIMO: number
  MONTO_MINIMO: number
  PLAZO_MAXIMO: number
  PLAZO_MINIMO: number
  TASA_MAXIMA: number
  TASA_MINIMA: number
  TASA_DEFECTO: number
  USUARIO_INSERCION: string
  FECHA_INSERCION: string
  USUARIO_ACTUALIZACION: string
  FECHA_ACTUALIZACION: string
}

export type CatchementsState = {
  productRanges: ProductRange[]
  fetchingProductRanges: boolean
}

const initialState = {
  productRanges: [],
  fetchingProductRanges: false,
}

const catchements = (
  state: CatchementsState = initialState,
  action: CatchementsAction
): CatchementsState => {
  switch (action.type) {
    case CATCHEMENTS_GET_PRODUCT_RANGES:
      return {
        ...state,
        fetchingProductRanges: true,
      }
    case CATCHEMENTS_GET_PRODUCT_RANGES_SUCCESS: {
      const { productRanges } = action

      return {
        ...state,
        fetchingProductRanges: false,
        productRanges,
      }
    }
    case CATCHEMENTS_GET_PRODUCT_RANGES_FAILURE:
      return {
        ...state,
        fetchingProductRanges: false,
      }
    default:
      return state
  }
}

export default catchements
