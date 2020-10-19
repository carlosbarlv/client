import {
  GENERAL_GET_ACTIVITY_PARAMETERS,
  GENERAL_GET_ACTIVITY_PARAMETERS_FAILURE,
  GENERAL_GET_ACTIVITY_PARAMETERS_SUCCESS,
  GENERAL_GET_COINS,
  GENERAL_GET_COINS_FAILURE,
  GENERAL_GET_COINS_SUCCESS,
  GENERAL_GET_DENOMINATIONS,
  GENERAL_GET_DENOMINATIONS_FAILURE,
  GENERAL_GET_DENOMINATIONS_SUCCESS,
  GENERAL_GET_NATIONALITIES,
  GENERAL_GET_NATIONALITIES_FAILURE,
  GENERAL_GET_NATIONALITIES_SUCCESS,
  GENERAL_GET_PARTNERS_CATEGORIES,
  GENERAL_GET_PARTNERS_CATEGORIES_FAILURE,
  GENERAL_GET_PARTNERS_CATEGORIES_SUCCESS,
} from '../constants/actions'
import {
  ActivityParameters,
  Coins,
  Denominations,
  PartnersCategories,
} from '../reducers/general'

type GeneralGetNationalitiesAction = {
  type: typeof GENERAL_GET_NATIONALITIES
}

export type GeneralGetPartnersCategoriesAction = {
  type: typeof GENERAL_GET_PARTNERS_CATEGORIES
  listId: string
}

type GeneralGetCoinsAction = {
  type: typeof GENERAL_GET_COINS
}

export type GeneralGetActivityParametersAction = {
  type: typeof GENERAL_GET_ACTIVITY_PARAMETERS
  activityId: string
}

export type GeneralGetDenominationsAction = {
  type: typeof GENERAL_GET_DENOMINATIONS
}

export const getDenominations = (): GeneralGetDenominationsAction => {
  return {
    type: GENERAL_GET_DENOMINATIONS
  }
}
export const getNationalities = (): GeneralGetNationalitiesAction => {
  return {
    type: GENERAL_GET_NATIONALITIES,
  }
}

export const getPartnersCategories = (
  listId: string
): GeneralGetPartnersCategoriesAction => {
  return {
    type: GENERAL_GET_PARTNERS_CATEGORIES,
    listId,
  }
}

export const getCoins = (): GeneralGetCoinsAction => {
  return {
    type: GENERAL_GET_COINS,
  }
}

export const getActivityParameters = (
  activityId: string
): GeneralGetActivityParametersAction => {
  return {
    type: GENERAL_GET_ACTIVITY_PARAMETERS,
    activityId,
  }
}

type GeneralGetNationalitiesSuccessAction = {
  type: typeof GENERAL_GET_NATIONALITIES_SUCCESS
  nationalities: string[]
}

type GeneralGetPartnersCategoriesSuccessAction = {
  type: typeof GENERAL_GET_PARTNERS_CATEGORIES_SUCCESS
  partnersCategories: PartnersCategories[]
}

type GeneralGetCoinsSuccessAction = {
  type: typeof GENERAL_GET_COINS_SUCCESS
  coins: Coins[]
}

type GeneralGetActivityParametersSuccessAction = {
  type: typeof GENERAL_GET_ACTIVITY_PARAMETERS_SUCCESS
  activityParameters: ActivityParameters
}

export type GeneralGetDenominationsSuccessAction = {
  type: typeof GENERAL_GET_DENOMINATIONS_SUCCESS
  denominations: Denominations[]
}

export const getDenominationsSuccess = (
  denominations: Denominations[]
): GeneralGetDenominationsSuccessAction => {
  return {
    type: GENERAL_GET_DENOMINATIONS_SUCCESS,
    denominations,
  }
}

export const getNationalitiesSuccess = (
  nationalities: string[]
): GeneralGetNationalitiesSuccessAction => {
  return {
    type: GENERAL_GET_NATIONALITIES_SUCCESS,
    nationalities,
  }
}

export const getPartnersCategoriesSuccess = (
  partnersCategories: PartnersCategories[]
): GeneralGetPartnersCategoriesSuccessAction => {
  return {
    type: GENERAL_GET_PARTNERS_CATEGORIES_SUCCESS,
    partnersCategories,
  }
}

export const getCoinsSuccess = (
  coins: Coins[]
): GeneralGetCoinsSuccessAction => {
  return {
    type: GENERAL_GET_COINS_SUCCESS,
    coins,
  }
}

export const getActivityParametersSuccess = (
  activityParameters: ActivityParameters
): GeneralGetActivityParametersSuccessAction => {
  return {
    type: GENERAL_GET_ACTIVITY_PARAMETERS_SUCCESS,
    activityParameters,
  }
}

type GeneralGetNationalitiesFailureAction = {
  type: typeof GENERAL_GET_NATIONALITIES_FAILURE
}

type GeneralGetPartnersCategoriesFailureAction = {
  type: typeof GENERAL_GET_PARTNERS_CATEGORIES_FAILURE
}

type GeneralGetCoinsFailureAction = {
  type: typeof GENERAL_GET_COINS_FAILURE
}

type GeneralGetActivityParametersFailureAction = {
  type: typeof GENERAL_GET_ACTIVITY_PARAMETERS_FAILURE
}

export type GeneralGetDenominationsFailureAction = {
  type: typeof GENERAL_GET_DENOMINATIONS_FAILURE
}

export const getDenominationsFailure = (): GeneralGetDenominationsFailureAction => {
  return {
    type: GENERAL_GET_DENOMINATIONS_FAILURE
  }
}

export const getNationalitiesFailure = (): GeneralGetNationalitiesFailureAction => {
  return {
    type: GENERAL_GET_NATIONALITIES_FAILURE,
  }
}

export const getPartnersCategoriesFailure = (): GeneralGetPartnersCategoriesFailureAction => {
  return {
    type: GENERAL_GET_PARTNERS_CATEGORIES_FAILURE,
  }
}

export const getCoinsFailure = (): GeneralGetCoinsFailureAction => {
  return {
    type: GENERAL_GET_COINS_FAILURE,
  }
}

export const getActivityParametersFailure = (): GeneralGetActivityParametersFailureAction => {
  return {
    type: GENERAL_GET_ACTIVITY_PARAMETERS_FAILURE,
  }
}

export type GeneralNationalitiesAction =
  | GeneralGetNationalitiesAction
  | GeneralGetNationalitiesSuccessAction
  | GeneralGetNationalitiesFailureAction

export type GeneralPartnersCategoriesAction =
  | GeneralGetPartnersCategoriesAction
  | GeneralGetPartnersCategoriesSuccessAction
  | GeneralGetPartnersCategoriesFailureAction

export type GeneralCoinsAction =
  | GeneralGetCoinsAction
  | GeneralGetCoinsSuccessAction
  | GeneralGetCoinsFailureAction

export type GeneralActivityParametersAction =
  | GeneralGetActivityParametersAction
  | GeneralGetActivityParametersFailureAction
  | GeneralGetActivityParametersSuccessAction

export type GeneralDenominationsAction = 
  | GeneralGetDenominationsAction
  | GeneralGetDenominationsFailureAction
  | GeneralGetDenominationsSuccessAction
