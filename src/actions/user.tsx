import {
  USER_GET_MENU_OPTIONS,
  USER_GET_MENU_OPTIONS_FAILURE,
  USER_GET_MENU_OPTIONS_SUCESS,
} from '../constants/actions';

export const getMenuOptions = (username: string, businessId: string) => {
  return {
    type: USER_GET_MENU_OPTIONS,
    username,
    businessId,
  };
};

export const getMenuOptionsSuccess = (menuOptions: string[]) => {
  return {
    type: USER_GET_MENU_OPTIONS_SUCESS,
    menuOptions,
  };
};

export const getMenuOptionsFailure = () => {
  return {
    type: USER_GET_MENU_OPTIONS_FAILURE,
  };
};
