import {
  BUSINESS_GET_INFO,
  BUSINESS_GET_INFO_FAILURE,
  BUSINESS_GET_INFO_SUCESS,
} from '../constants/actions';

export const getBusinessInfo = (businessId: string) => {
  return {
    type: BUSINESS_GET_INFO,
    businessId,
  };
};

export const getBusinessInfoSuccess = (name: string, ccName: string) => {
  return {
    type: BUSINESS_GET_INFO_SUCESS,
    name,
    ccName,
  };
};

export const getBusinessInfoFailure = () => {
  return {
    type: BUSINESS_GET_INFO_FAILURE,
  };
};
