import {
  LOGIN_AUTHENTICATE,
  LOGIN_AUTHENTICATE_FAILURE,
  LOGIN_AUTHENTICATE_SUCCESS,
  LOGIN_AUTHENTICATE_HIDE_ERROR,
} from '../constants/actions';

export const authenticateUser = (username: string, password: string) => {
  return {
    type: LOGIN_AUTHENTICATE,
    username,
    password,
  };
};

export const authenticateUserSuccess = () => {
  return {
    type: LOGIN_AUTHENTICATE_SUCCESS,
  };
};

export const authenticateUserFailure = () => {
  return {
    type: LOGIN_AUTHENTICATE_FAILURE,
  };
};

export const authenticateUserHideError = () => {
  return {
    type: LOGIN_AUTHENTICATE_HIDE_ERROR,
  };
};
