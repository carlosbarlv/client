import {
  USER_GET_MENU_OPTIONS,
  USER_GET_MENU_OPTIONS_FAILURE,
  USER_GET_MENU_OPTIONS_SUCESS,
} from '../constants/actions'
import { MenuOption } from '../reducers/user'

export type GetMenuOptionsAction = {
  type: typeof USER_GET_MENU_OPTIONS
  username: string
  businessId: string
}

export const getMenuOptions = (
  username: string,
  businessId: string
): GetMenuOptionsAction => {
  return {
    type: USER_GET_MENU_OPTIONS,
    username,
    businessId,
  }
}

type GetMenuOptionsSuccessAction = {
  type: typeof USER_GET_MENU_OPTIONS_SUCESS
  menuOptions: MenuOption[]
}

export const getMenuOptionsSuccess = (
  menuOptions: MenuOption[]
): GetMenuOptionsSuccessAction => {
  return {
    type: USER_GET_MENU_OPTIONS_SUCESS,
    menuOptions,
  }
}

type GetMenuOptionsFailureAction = {
  type: typeof USER_GET_MENU_OPTIONS_FAILURE
}

export const getMenuOptionsFailure = (): GetMenuOptionsFailureAction => {
  return {
    type: USER_GET_MENU_OPTIONS_FAILURE,
  }
}

export type UserAction =
  | GetMenuOptionsAction
  | GetMenuOptionsSuccessAction
  | GetMenuOptionsFailureAction
