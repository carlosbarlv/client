import {
  ADDRESSES_CREATE_ADDRESSES,
  ADDRESSES_CREATE_ADDRESSES_FAILURE,
  ADDRESSES_CREATE_ADDRESSES_SUCCESS,
} from '../constants/actions'
import { AddressAction } from '../actions/addresses'

export type AddressType = {
  APARTAMENTO?: string
  CALLE?: string
  CASA?: string
  EDIFICIO?: string
  ESTADO?: string
  ID_MUNICIPIO?: string
  ID_PAIS?: string
  ID_PROVINCIA?: string
  ID_SECTOR?: string
  MUNICIPIO?: string
  PAIS?: string
  PRINCIPAL?: boolean
  PROVINCIA?: string
  PROXIMO_A?: string
  SECTOR?: string
  TIPO_DIRECCION?: string
}

export type AddressState = {
  Address: AddressType
}

const initialState = {
  Address: {},
}

const Address = (
  state: AddressState = initialState,
  action: AddressAction
): AddressState => {
  switch (action.type) {
    case ADDRESSES_CREATE_ADDRESSES_SUCCESS: {
      return {
        ...state,
        Address: action.newAddress,
      }
    }
    case ADDRESSES_CREATE_ADDRESSES_FAILURE:
    case ADDRESSES_CREATE_ADDRESSES:
    default:
      return state
  }
}

export default Address
