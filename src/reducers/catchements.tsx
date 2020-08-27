import {
  CATCHEMENTS_CREATE_PRODUCT_RANGE,
  CATCHEMENTS_CREATE_PRODUCT_RANGE_FAILURE,
  CATCHEMENTS_CREATE_PRODUCT_RANGE_SUCCESS,
  CATCHEMENTS_GET_PRODUCT_RANGES,
  CATCHEMENTS_GET_PRODUCT_RANGES_FAILURE,
  CATCHEMENTS_GET_PRODUCT_RANGES_SUCCESS,
  CATCHEMENTS_SET_PRODUCT_RANGE_MODAL_VISIBILITY,
  CATCHEMENTS_UPDATE_PRODUCT_RANGE,
  CATCHEMENTS_UPDATE_PRODUCT_RANGE_FAILURE,
  CATCHEMENTS_UPDATE_PRODUCT_RANGE_SUCCESS,
} from '../constants/actions'
import { CatchementsAction } from '../actions/catchements'
import { updateObjectArray } from '../utils/general'

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
  sendingProductRangeData: boolean
  showProductRangeModal: boolean
}

const initialState = {
  productRanges: [],
  fetchingProductRanges: false,
  sendingProductRangeData: false,
  showProductRangeModal: false,
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
    case CATCHEMENTS_CREATE_PRODUCT_RANGE:
      return {
        ...state,
        sendingProductRangeData: true,
      }
    case CATCHEMENTS_CREATE_PRODUCT_RANGE_SUCCESS: {
      const { newProductRange } = action

      return {
        ...state,
        sendingProductRangeData: false,
        showProductRangeModal: false,
        productRanges: [...state.productRanges, newProductRange],
      }
    }
    case CATCHEMENTS_CREATE_PRODUCT_RANGE_FAILURE:
      return {
        ...state,
        sendingProductRangeData: false,
      }
    case CATCHEMENTS_UPDATE_PRODUCT_RANGE:
      return {
        ...state,
        sendingProductRangeData: true,
      }
    case CATCHEMENTS_UPDATE_PRODUCT_RANGE_SUCCESS: {
      const { updatedProductRange } = action
      const updatedProductRangeList = updateObjectArray(
        state.productRanges,
        updatedProductRange,
        'ID_RANGO'
      )

      return {
        ...state,
        sendingProductRangeData: false,
        showProductRangeModal: false,
        productRanges: updatedProductRangeList,
      }
    }
    case CATCHEMENTS_UPDATE_PRODUCT_RANGE_FAILURE:
      return {
        ...state,
        sendingProductRangeData: false,
      }
    case CATCHEMENTS_SET_PRODUCT_RANGE_MODAL_VISIBILITY:
      return {
        ...state,
        showProductRangeModal: action.showProductRangeModal,
      }
    default:
      return state
  }
}

export default catchements
