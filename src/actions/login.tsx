import {
  LOGIN_AUTHENTICATE,
  LOGIN_AUTHENTICATE_FAILURE,
  LOGIN_AUTHENTICATE_SUCCESS,
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
