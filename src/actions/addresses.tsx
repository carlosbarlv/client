import {
  ADDRESSES_CREATE_ADDRESSES,
  ADDRESSES_CREATE_ADDRESSES_FAILURE,
  ADDRESSES_CREATE_ADDRESSES_SUCCESS,
} from '../constants/actions'
import { AddressType } from '../reducers/addresses'

export type CreateAddressAction = {
  type: typeof ADDRESSES_CREATE_ADDRESSES
  Address: AddressType
}

export const createAddresses = (
  Address: AddressType
): CreateAddressAction => {
  return {
    Address,
    type: ADDRESSES_CREATE_ADDRESSES,
  }
}

export type CreateAddressSuccessAction = {
  type: typeof ADDRESSES_CREATE_ADDRESSES_SUCCESS
  newAddress: AddressType
}

export const createAddressesSuccess = (
  newAddress: AddressType
): CreateAddressSuccessAction => {
  return {
    type: ADDRESSES_CREATE_ADDRESSES_SUCCESS,
    newAddress,
  }
}

export type CreateAddressFailureAction = {
  type: typeof ADDRESSES_CREATE_ADDRESSES_FAILURE
}

export const createAddressesFailure = (): CreateAddressFailureAction => {
  return {
    type: ADDRESSES_CREATE_ADDRESSES_FAILURE,
  }
}

export type AddressAction =
  | CreateAddressAction
  | CreateAddressFailureAction
  | CreateAddressSuccessAction
