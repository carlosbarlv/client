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
  DEFECTO?: number
  EDIFICIO?: string
  ESTADO?: string
  FECHA_ACTUALIZACION?: string
  FECHA_INSERCION?: string
  ID_CIUDAD?: string
  ID_EMPRESA?: string
  ID_ESTADO?: string
  ID_LISTA?: number
  ID_MUNICIPIO?: string
  ID_PAIS?: string
  ID_PERSONA?: string
  ID_PROVINCIA?: string
  ID_SECTOR?: string
  LINEA1?: string
  LINEA2?: string
  LINEA3?: string
  MUNICIPIO?: string
  PAIS?: string
  PRINCIPAL?: boolean
  PROVINCIA?: string
  PROXIMO_A?: string
  SECTOR?: string
  SECUENCIA?: number
  TIPO_DIRECCION?: string
  TR_ORIGEN?: string
  USUARIO_ACTUALIZACION?: string
  USUARIO_INSERCION?: string
  VALOR?: string
  ZIP_CODE?: string
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
