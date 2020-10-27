import {
  GENERAL_GET_ACTIVITY_PARAMETERS,
  GENERAL_GET_ACTIVITY_PARAMETERS_FAILURE,
  GENERAL_GET_ACTIVITY_PARAMETERS_SUCCESS,
  GENERAL_GET_COINS,
  GENERAL_GET_COINS_FAILURE,
  GENERAL_GET_COINS_SUCCESS,
  GENERAL_GET_COUNTRIES,
  GENERAL_GET_COUNTRIES_FAILURE,
  GENERAL_GET_COUNTRIES_SUCCESS,
  GENERAL_GET_DENOMINATIONS,
  GENERAL_GET_DENOMINATIONS_FAILURE,
  GENERAL_GET_DENOMINATIONS_SUCCESS,
  GENERAL_GET_MUNICIPALITIES,
  GENERAL_GET_MUNICIPALITIES_FAILURE,
  GENERAL_GET_MUNICIPALITIES_SUCCESS,
  GENERAL_GET_NATIONALITIES,
  GENERAL_GET_NATIONALITIES_FAILURE,
  GENERAL_GET_NATIONALITIES_SUCCESS,
  GENERAL_GET_PARTNERS_CATEGORIES,
  GENERAL_GET_PARTNERS_CATEGORIES_FAILURE,
  GENERAL_GET_PARTNERS_CATEGORIES_SUCCESS,
  GENERAL_GET_PROVINCES,
  GENERAL_GET_PROVINCES_FAILURE,
  GENERAL_GET_PROVINCES_SUCCESS,
  GENERAL_GET_SECTORS,
  GENERAL_GET_SECTORS_FAILURE,
  GENERAL_GET_SECTORS_SECCESS,
} from '../constants/actions'
import {
  ActivityParameters,
  Coins,
  Denominations,
  GeneralType,
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

export type GeneralGetCountriesAction = {
  type: typeof GENERAL_GET_COUNTRIES
}

export type GeneralGetSectorsAction = {
  type: typeof GENERAL_GET_SECTORS
  condition: GeneralType
}

export type GeneralGetMunicipalitiesAction = {
  type: typeof GENERAL_GET_MUNICIPALITIES
}

export const getDenominations = (): GeneralGetDenominationsAction => {
  return {
    type: GENERAL_GET_DENOMINATIONS,
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

export const getCountries = (): GeneralGetCountriesAction => {
  return {
    type: GENERAL_GET_COUNTRIES,
  }
}

export const getSectors = (condition: GeneralType): GeneralGetSectorsAction => {
  return {
    type: GENERAL_GET_SECTORS,
    condition,
  }
}

export const getMunicipalities = (): GeneralGetMunicipalitiesAction => {
  return {
    type: GENERAL_GET_MUNICIPALITIES,
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

export type GeneralGetCountriesSuccessAction = {
  type: typeof GENERAL_GET_COUNTRIES_SUCCESS
  countries: GeneralType[]
}

export type GeneralGetSectorsSuccessAction = {
  type: typeof GENERAL_GET_SECTORS_SECCESS
  sectors: GeneralType[]
}

export type GeneralGetMunicipalitiesSuccessAction = {
  type: typeof GENERAL_GET_MUNICIPALITIES_SUCCESS
  municipalities: GeneralType[]
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

export const getCountriesSuccess = (
  countries: GeneralType[]
): GeneralGetCountriesSuccessAction => {
  return {
    type: GENERAL_GET_COUNTRIES_SUCCESS,
    countries,
  }
}

export const getSectorsSuccess = (
  sectors: GeneralType[]
): GeneralGetSectorsSuccessAction => {
  return {
    type: GENERAL_GET_SECTORS_SECCESS,
    sectors,
  }
}

export const getMunicipalitiesSuccess = (
  municipalities: GeneralType[]
): GeneralGetMunicipalitiesSuccessAction => {
  return {
    type: GENERAL_GET_MUNICIPALITIES_SUCCESS,
    municipalities,
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

export type GeneralGetCountriesFailureAction = {
  type: typeof GENERAL_GET_COUNTRIES_FAILURE
}

export type GeneralGetSectorsFailureAction = {
  type: typeof GENERAL_GET_SECTORS_FAILURE
}

export type GeneralGetMunicipalitiesFailureAction = {
  type: typeof GENERAL_GET_MUNICIPALITIES_FAILURE
}

export const getDenominationsFailure = (): GeneralGetDenominationsFailureAction => {
  return {
    type: GENERAL_GET_DENOMINATIONS_FAILURE,
  }
}

export type GeneralSetDenominationEmpty = {
  type: typeof GENERAL_GET_DENOMINATIONS_SUCCESS
  denominations: Denominations[]
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

export type GeneralGetProvincesAction = {
  type: typeof GENERAL_GET_PROVINCES
  countryId: string
}

export const getProvinces = (countryId: string): GeneralGetProvincesAction => {
  return {
    type: GENERAL_GET_PROVINCES,
    countryId,
  }
}

export type GeneralGetProvincesSuccessAction = {
  type: typeof GENERAL_GET_PROVINCES_SUCCESS
  provinces: GeneralType[]
}

export const getProvincesSuccess = (
  provinces: GeneralType[]
): GeneralGetProvincesSuccessAction => {
  return {
    type: GENERAL_GET_PROVINCES_SUCCESS,
    provinces,
  }
}

export type GeneralGetProvincesFailureAction = {
  type: typeof GENERAL_GET_PROVINCES_FAILURE
}

export const getProvincesFailure = (): GeneralGetProvincesFailureAction => {
  return {
    type: GENERAL_GET_PROVINCES_FAILURE,
  }
}

export const getCountriesFailure = (): GeneralGetCountriesFailureAction => {
  return {
    type: GENERAL_GET_COUNTRIES_FAILURE,
  }
}

export const getSectorsFailure = (): GeneralGetSectorsFailureAction => {
  return {
    type: GENERAL_GET_SECTORS_FAILURE,
  }
}

export const getMunicipalitiesFailure = (): GeneralGetMunicipalitiesFailureAction => {
  return {
    type: GENERAL_GET_MUNICIPALITIES_FAILURE,
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

export type GeneralProvincesAction =
  | GeneralGetProvincesAction
  | GeneralGetProvincesFailureAction
  | GeneralGetProvincesSuccessAction

export type GeneralDenominationsAction =
  | GeneralGetDenominationsAction
  | GeneralGetDenominationsFailureAction
  | GeneralGetDenominationsSuccessAction

export type GeneralCountriesAction =
  | GeneralGetCountriesAction
  | GeneralGetCountriesFailureAction
  | GeneralGetCountriesSuccessAction

export type GeneralSectorsAction =
  | GeneralGetSectorsAction
  | GeneralGetSectorsFailureAction
  | GeneralGetSectorsSuccessAction

export type GeneralMunicipalitiesAction =
  | GeneralGetMunicipalitiesAction
  | GeneralGetMunicipalitiesFailureAction
  | GeneralGetMunicipalitiesSuccessAction
