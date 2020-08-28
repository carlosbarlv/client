import {
  PERSON_GET_ECONOMIC_ACTIVITY,
  PERSON_GET_ECONOMIC_ACTIVITY_FAILURE,
  PERSON_GET_ECONOMIC_ACTIVITY_SUCCESS,
} from '../constants/actions'
import { EconomicActivity } from '../reducers/economicActivities'
import { ResponseMetadata } from '../constants/types'

export type GetEconomicActivityAction = {
  type: typeof PERSON_GET_ECONOMIC_ACTIVITY
}

export const getEconomicActivity = (): GetEconomicActivityAction => {
  return {
    type: PERSON_GET_ECONOMIC_ACTIVITY,
  }
}

type GetEconomicActivitySuccessAction = {
  type: typeof PERSON_GET_ECONOMIC_ACTIVITY_SUCCESS
  economicActivities: EconomicActivity[]
  economicActivityMeta: ResponseMetadata
}

export const getPaginatedEconomicActivitySuccess = (
  economicActivities: EconomicActivity[],
  economicActivityMeta: ResponseMetadata
): GetEconomicActivitySuccessAction => {
  return {
    type: PERSON_GET_ECONOMIC_ACTIVITY_SUCCESS,
    economicActivities,
    economicActivityMeta,
  }
}

type GetEconomicActivityFailureAction = {
  type: typeof PERSON_GET_ECONOMIC_ACTIVITY_FAILURE
}

export const getPaginatedEconomicActivityFailure = (): GetEconomicActivityFailureAction => {
  return {
    type: PERSON_GET_ECONOMIC_ACTIVITY_FAILURE,
  }
}

export type EconomicActivitiesActions =
  | GetEconomicActivityAction
  | GetEconomicActivitySuccessAction
  | GetEconomicActivityFailureAction
