import {
  PARTNERS_GET_PARTNERS,
  PARTNERS_GET_PARTNERS_FAILURE,
  PARTNERS_GET_PARTNERS_SUCCESS,
} from '../constants/actions'
import { PartnersActions } from '../actions/partners'
import { ResponseMetadata } from '../constants/types'

export type Partner = {
  IDPERSONA: string
  NOMBRE: string
  DOCUMENTOIDENTIDAD: string
  TELEFONO: string
  EMAIL: string
  CATEGORIA: string
  ESTADO: string
}

export type PartnersState = {
  partners: Partner[]
  partnersMetadata: ResponseMetadata
  isFetching: boolean
}

const initialState = {
  partners: [],
  partnersMetadata: {
    currentPage: 1,
    totalPages: 0,
    pageSize: 15,
    count: 0,
    totalRows: 0,
  },
  isFetching: false,
}

const partners = (
  state: PartnersState = initialState,
  action: PartnersActions
): PartnersState => {
  switch (action.type) {
    case PARTNERS_GET_PARTNERS: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case PARTNERS_GET_PARTNERS_SUCCESS: {
      return {
        ...state,
        partners: action.partners,
        partnersMetadata: action.partnersMeta,
        isFetching: false,
      }
    }
    case PARTNERS_GET_PARTNERS_FAILURE: {
      return {
        ...state,
        isFetching: false,
      }
    }
    default:
      return state
  }
}

export default partners
