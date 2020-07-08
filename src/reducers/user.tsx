import {
  USER_GET_MENU_OPTIONS,
  USER_GET_MENU_OPTIONS_FAILURE,
  USER_GET_MENU_OPTIONS_SUCESS,
} from '../constants/actions'
import { UserAction } from '../actions/user'

export type MenuOption = {
  LEVEL: number
  NAME: string
  ID: string
  PARENT: string
  // TODO: CHANGE TO NULLABLE<STRING>
  MODULO: string
  CHILDREN?: MenuOption[]
}

export type UserState = {
  menuOptions: MenuOption[]
}

const initialState = {
  menuOptions: [],
}

const user = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case USER_GET_MENU_OPTIONS_SUCESS: {
      const { menuOptions } = action

      return {
        ...state,
        menuOptions,
      }
    }
    case USER_GET_MENU_OPTIONS:
    case USER_GET_MENU_OPTIONS_FAILURE:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default user
