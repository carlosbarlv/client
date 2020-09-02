import {
  GENERAL_GET_COINS,
  GENERAL_GET_COINS_FAILURE,
  GENERAL_GET_COINS_SUCCESS,
  GENERAL_GET_NATIONALITIES,
  GENERAL_GET_NATIONALITIES_FAILURE,
  GENERAL_GET_NATIONALITIES_SUCCESS,
  GENERAL_GET_PARTNERS_CATEGORIES,
  GENERAL_GET_PARTNERS_CATEGORIES_FAILURE,
  GENERAL_GET_PARTNERS_CATEGORIES_SUCCESS,
} from '../constants/actions'
import { Coins, PartnersCategories } from '../reducers/general'

type GeneralGetNationalitiesAction = {
  type: typeof GENERAL_GET_NATIONALITIES
}

type GeneralGetPartnersCategoriesAction = {
  type: typeof GENERAL_GET_PARTNERS_CATEGORIES
}

type GeneralGetCoinsAction = {
  type: typeof GENERAL_GET_COINS
}

export const getNationalities = (): GeneralGetNationalitiesAction => {
  return {
    type: GENERAL_GET_NATIONALITIES,
  }
}

export const getPartnersCategories = (): GeneralGetPartnersCategoriesAction => {
  return {
    type: GENERAL_GET_PARTNERS_CATEGORIES,
  }
}

export const getCoins = (): GeneralGetCoinsAction => {
  return {
    type: GENERAL_GET_COINS,
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

type GeneralGetNationalitiesFailureAction = {
  type: typeof GENERAL_GET_NATIONALITIES_FAILURE
}

type GeneralGetPartnersCategoriesFailureAction = {
  type: typeof GENERAL_GET_PARTNERS_CATEGORIES_FAILURE
}

type GeneralGetCoinsFailureAction = {
  type: typeof GENERAL_GET_COINS_FAILURE
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