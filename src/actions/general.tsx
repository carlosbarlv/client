import {
  GENERAL_GET_NATIONALITIES,
  GENERAL_GET_NATIONALITIES_FAILURE,
  GENERAL_GET_NATIONALITIES_SUCCESS,
} from '../constants/actions'

type GeneralGetNationalitiesAction = {
  type: typeof GENERAL_GET_NATIONALITIES
}

export const getNationalities = (): GeneralGetNationalitiesAction => {
  return {
    type: GENERAL_GET_NATIONALITIES,
  }
}

type GeneralGetNationalitiesSuccessAction = {
  type: typeof GENERAL_GET_NATIONALITIES_SUCCESS
  nationalities: string[]
}

export const getNationalitiesSuccess = (
  nationalities: string[]
): GeneralGetNationalitiesSuccessAction => {
  return {
    type: GENERAL_GET_NATIONALITIES_SUCCESS,
    nationalities,
  }
}

type GeneralGetNationalitiesFailureAction = {
  type: typeof GENERAL_GET_NATIONALITIES_FAILURE
}

export const getNationalitiesFailure = (): GeneralGetNationalitiesFailureAction => {
  return {
    type: GENERAL_GET_NATIONALITIES_FAILURE,
  }
}

export type GeneralNationalitiesAction =
  | GeneralGetNationalitiesAction
  | GeneralGetNationalitiesSuccessAction
  | GeneralGetNationalitiesFailureAction
