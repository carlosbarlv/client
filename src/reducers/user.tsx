import {
  USER_GET_MENU_OPTIONS,
  USER_GET_MENU_OPTIONS_FAILURE,
  USER_GET_MENU_OPTIONS_SUCESS,
} from '../constants/actions'

const initialState = {
  menuOptions: [],
}

const user = (state = initialState, action: any) => {
  const { menuOptions } = action

  switch (action.type) {
    case USER_GET_MENU_OPTIONS_SUCESS:
      return {
        ...state,
        menuOptions,
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
