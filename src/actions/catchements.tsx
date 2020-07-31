import {
  CATCHEMENTS_GET_PRODUCT_RANGES,
  CATCHEMENTS_GET_PRODUCT_RANGES_FAILURE,
  CATCHEMENTS_GET_PRODUCT_RANGES_SUCCESS,
} from '../constants/actions'
import { ProductRange } from '../reducers/catchements'

type GetProductRanges = {
  type: typeof CATCHEMENTS_GET_PRODUCT_RANGES
}

export const getProductRanges = (): GetProductRanges => {
  return {
    type: CATCHEMENTS_GET_PRODUCT_RANGES,
  }
}

export const getProductRangesSuccess = (
  productRanges: ProductRange[]
): GetProductRangesSuccessAction => {
  return {
    type: CATCHEMENTS_GET_PRODUCT_RANGES_SUCCESS,
    productRanges,
  }
}

export type GetProductRangesSuccessAction = {
  type: typeof CATCHEMENTS_GET_PRODUCT_RANGES_SUCCESS
  productRanges: ProductRange[]
}

export const getProductRangesFailure = (): GetProductRangesFailureAction => {
  return {
    type: CATCHEMENTS_GET_PRODUCT_RANGES_FAILURE,
  }
}

export type GetProductRangesFailureAction = {
  type: typeof CATCHEMENTS_GET_PRODUCT_RANGES_FAILURE
}

export type CatchementsAction =
  | GetProductRanges
  | GetProductRangesSuccessAction
  | GetProductRangesFailureAction
