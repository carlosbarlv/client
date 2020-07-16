import {
  PARTNERS_GET_PARTNERS,
  PARTNERS_GET_PARTNERS_FAILURE,
  PARTNERS_GET_PARTNERS_SUCCESS,
} from '../constants/actions'
import { Partner } from '../reducers/partners'
import { ResponseMetadata } from '../constants/types'

export type GetPaginatedPartnersAction = {
  type: typeof PARTNERS_GET_PARTNERS
  status: string
  pageNumber: number
  pageSize: number
}

export const getPaginatedPartners = (
  status: string,
  pageNumber = 1,
  pageSize = 10
): GetPaginatedPartnersAction => {
  return {
    type: PARTNERS_GET_PARTNERS,
    pageNumber,
    status,
    pageSize,
  }
}

type GetPaginatedPartnersSuccessAction = {
  type: typeof PARTNERS_GET_PARTNERS_SUCCESS
  partners: Partner[]
  partnersMeta: ResponseMetadata
}

export const getPaginatedPartnersSuccess = (
  partners: Partner[],
  partnersMeta: ResponseMetadata
): GetPaginatedPartnersSuccessAction => {
  return {
    type: PARTNERS_GET_PARTNERS_SUCCESS,
    partners,
    partnersMeta,
  }
}

type GetPaginatedPartnersFailureAction = {
  type: typeof PARTNERS_GET_PARTNERS_FAILURE
}

export const getPaginatedPartnersFailure = (): GetPaginatedPartnersFailureAction => {
  return {
    type: PARTNERS_GET_PARTNERS_FAILURE,
  }
}

export type PartnersActions =
  | GetPaginatedPartnersAction
  | GetPaginatedPartnersSuccessAction
  | GetPaginatedPartnersFailureAction
