import {
  BUSINESS_GET_INFO,
  BUSINESS_GET_INFO_FAILURE,
  BUSINESS_GET_INFO_SUCESS,
} from '../constants/actions'
import { BusinessAction } from '../actions/business'

export type BusinessState = {
  ccName: string
  name: string
}

const initialState = {
  ccName: '',
  name: '',
}

const business = (
  state: BusinessState = initialState,
  action: BusinessAction
): BusinessState => {
  switch (action.type) {
    case BUSINESS_GET_INFO_SUCESS: {
      const { name = '', ccName = '' } = action

      return {
        ...state,
        ccName,
        name,
      }
    }
    case BUSINESS_GET_INFO:
    case BUSINESS_GET_INFO_FAILURE:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default business
