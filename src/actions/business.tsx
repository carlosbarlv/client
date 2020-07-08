import {
  BUSINESS_GET_INFO,
  BUSINESS_GET_INFO_FAILURE,
  BUSINESS_GET_INFO_SUCESS,
} from '../constants/actions'

type GetBusinessInfo = {
  type: typeof BUSINESS_GET_INFO
  businessId: string
}

export const getBusinessInfo = (businessId: string): GetBusinessInfo => {
  return {
    type: BUSINESS_GET_INFO,
    businessId,
  }
}

type GetBusinessInfoSuccess = {
  type: typeof BUSINESS_GET_INFO_SUCESS
  name: string
  ccName: string
}

export const getBusinessInfoSuccess = (
  name: string,
  ccName: string
): GetBusinessInfoSuccess => {
  return {
    type: BUSINESS_GET_INFO_SUCESS,
    name,
    ccName,
  }
}

type GetBusinessInfoFailure = {
  type: typeof BUSINESS_GET_INFO_FAILURE
}

export const getBusinessInfoFailure = (): GetBusinessInfoFailure => {
  return {
    type: BUSINESS_GET_INFO_FAILURE,
  }
}

export type BusinessAction =
  | GetBusinessInfo
  | GetBusinessInfoSuccess
  | GetBusinessInfoFailure
