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
import { ProductRange } from '../reducers/catchements'

type GetProductRangesAction = {
  type: typeof CATCHEMENTS_GET_PRODUCT_RANGES
}

export const getProductRanges = (): GetProductRangesAction => {
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

export const createProductRange = (
  productRange: ProductRange
): CreateProductRangeAction => {
  return {
    productRange,
    type: CATCHEMENTS_CREATE_PRODUCT_RANGE,
  }
}

export type CreateProductRangeAction = {
  type: typeof CATCHEMENTS_CREATE_PRODUCT_RANGE
  productRange: ProductRange
}

export const createProductRangeSuccess = (
  newProductRange: ProductRange
): CreateProductRangeSuccessAction => {
  return {
    type: CATCHEMENTS_CREATE_PRODUCT_RANGE_SUCCESS,
    newProductRange,
  }
}

export type CreateProductRangeSuccessAction = {
  type: typeof CATCHEMENTS_CREATE_PRODUCT_RANGE_SUCCESS
  newProductRange: ProductRange
}

export const createProductRangeFailure = (): CreateProductRangeFailureAction => {
  return {
    type: CATCHEMENTS_CREATE_PRODUCT_RANGE_FAILURE,
  }
}

export type CreateProductRangeFailureAction = {
  type: typeof CATCHEMENTS_CREATE_PRODUCT_RANGE_FAILURE
}

export const setProductRangeModalVisibility = (
  showProductRangeModal: boolean
): SetProductRangeModalVisibilityAction => {
  return {
    type: CATCHEMENTS_SET_PRODUCT_RANGE_MODAL_VISIBILITY,
    showProductRangeModal,
  }
}

export type SetProductRangeModalVisibilityAction = {
  type: typeof CATCHEMENTS_SET_PRODUCT_RANGE_MODAL_VISIBILITY
  showProductRangeModal: boolean
}

export const updateProductRange = (
  productRange: ProductRange
): UpdateProductRangeAction => {
  return {
    productRange,
    type: CATCHEMENTS_UPDATE_PRODUCT_RANGE,
  }
}

export type UpdateProductRangeAction = {
  type: typeof CATCHEMENTS_UPDATE_PRODUCT_RANGE
  productRange: ProductRange
}

export const updateProductRangeSuccess = (
  updatedProductRange: ProductRange
): UpdateProductRangeSuccessAction => {
  return {
    type: CATCHEMENTS_UPDATE_PRODUCT_RANGE_SUCCESS,
    updatedProductRange,
  }
}

export type UpdateProductRangeSuccessAction = {
  type: typeof CATCHEMENTS_UPDATE_PRODUCT_RANGE_SUCCESS
  updatedProductRange: ProductRange
}

export const updateProductRangeFailure = (): UpdateProductRangeFailureAction => {
  return {
    type: CATCHEMENTS_UPDATE_PRODUCT_RANGE_FAILURE,
  }
}

export type UpdateProductRangeFailureAction = {
  type: typeof CATCHEMENTS_UPDATE_PRODUCT_RANGE_FAILURE
}

export type CatchementsAction =
  | GetProductRangesAction
  | GetProductRangesSuccessAction
  | GetProductRangesSuccessAction
  | GetProductRangesFailureAction
  | CreateProductRangeAction
  | CreateProductRangeSuccessAction
  | CreateProductRangeFailureAction
  | SetProductRangeModalVisibilityAction
  | UpdateProductRangeAction
  | UpdateProductRangeSuccessAction
  | UpdateProductRangeFailureAction
