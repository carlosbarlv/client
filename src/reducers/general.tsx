import {
  GENERAL_GET_NATIONALITIES,
  GENERAL_GET_NATIONALITIES_FAILURE,
  GENERAL_GET_NATIONALITIES_SUCCESS,
} from '../constants/actions'
import { GeneralNationalitiesAction } from '../actions/general'

export type GeneralState = {
  nationalities: string[]
}

const initialState = {
  nationalities: [],
}

const general = (
  state: GeneralState = initialState,
  action: GeneralNationalitiesAction
): GeneralState => {
  switch (action.type) {
    case GENERAL_GET_NATIONALITIES_SUCCESS: {
      return {
        ...state,
        nationalities: action.nationalities,
      }
    }
    case GENERAL_GET_NATIONALITIES:
    case GENERAL_GET_NATIONALITIES_FAILURE:
    default:
      return state
  }
}

export default general
