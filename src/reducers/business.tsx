import {
  BUSINESS_GET_INFO,
  BUSINESS_GET_INFO_FAILURE,
  BUSINESS_GET_INFO_SUCESS,
} from '../constants/actions';

const initialState = {
  ccName: '',
  name: '',
};

const business = (state = initialState, action: any) => {
  const { name = '', ccName = '' } = action;

  switch (action.type) {
    case BUSINESS_GET_INFO_SUCESS:
      return {
        ...state,
        ccName,
        name,
      };
    case BUSINESS_GET_INFO:
    case BUSINESS_GET_INFO_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default business;
