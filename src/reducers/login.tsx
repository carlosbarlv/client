import {
  LOGIN_AUTHENTICATE,
  LOGIN_AUTHENTICATE_FAILURE,
  LOGIN_AUTHENTICATE_SUCCESS,
} from '../constants/actions';

const initialState = {
  isLoggedIn: false,
  isSubmitted: false,
};

const login = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_AUTHENTICATE:
      return {
        ...state,
        isSubmitted: true,
      };
    case LOGIN_AUTHENTICATE_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        isSubmitted: false,
      };
    case LOGIN_AUTHENTICATE_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        isSubmitted: false,
      };
    default:
      return state;
  }
};

export default login;
