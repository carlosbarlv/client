import {
  LOGIN_AUTHENTICATE,
  LOGIN_AUTHENTICATE_FAILURE,
  LOGIN_AUTHENTICATE_HIDE_ERROR,
  LOGIN_AUTHENTICATE_SUCCESS,
} from '../constants/actions'

export type AuthenticateUserAction = {
  type: typeof LOGIN_AUTHENTICATE
  username: string
  password: string
}

export const authenticateUser = (
  username: string,
  password: string
): AuthenticateUserAction => {
  return {
    type: LOGIN_AUTHENTICATE,
    username,
    password,
  }
}

type AuthenticateUserSuccessAction = {
  type: typeof LOGIN_AUTHENTICATE_SUCCESS
}

export const authenticateUserSuccess = (): AuthenticateUserSuccessAction => {
  return {
    type: LOGIN_AUTHENTICATE_SUCCESS,
  }
}

type AuthenticateUserFailureAction = {
  type: typeof LOGIN_AUTHENTICATE_FAILURE
}

export const authenticateUserFailure = (): AuthenticateUserFailureAction => {
  return {
    type: LOGIN_AUTHENTICATE_FAILURE,
  }
}

type AuthenticateUserHideErrorAction = {
  type: typeof LOGIN_AUTHENTICATE_HIDE_ERROR
}

export const authenticateUserHideError = (): AuthenticateUserHideErrorAction => {
  return {
    type: LOGIN_AUTHENTICATE_HIDE_ERROR,
  }
}

export type LoginAction =
  | AuthenticateUserHideErrorAction
  | AuthenticateUserAction
  | AuthenticateUserSuccessAction
  | AuthenticateUserFailureAction
