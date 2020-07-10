import axios, { AxiosResponse } from 'axios'
import { getSessionInfo } from './session'
import {
  WEB_SERVICE_API_LOGIN,
  WEB_SERVICE_API_PERSONAL_MENU,
} from '../constants/routes'

type RequestHeaders = {
  headers: {
    'Content-Type': string
    authorization: string
  }
}

const getResponseParams = (): RequestHeaders => {
  const { token } = getSessionInfo()

  return {
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
  }
}

function postRequest<T>(url: string, data: object): Promise<AxiosResponse<T>> {
  const config = getResponseParams()

  const result = axios.post(url, data, config)

  return result
}

function unauthorizedPostRequest<T>(
  url: string,
  data: T
): Promise<AxiosResponse<T>> {
  const result = axios.post(url, data)

  return result
}

type authenticateUserPayload = {
  username: string
  password: string
}

const authenticateUser = (
  data: authenticateUserPayload
): Promise<AxiosResponse<authenticateUserPayload>> => {
  return unauthorizedPostRequest<authenticateUserPayload>(
    WEB_SERVICE_API_LOGIN,
    data
  )
}

type FetchUserMenuOptionsPayload = {
  username: string
  businessId: string
}

const getUserMenuOptions = (
  data: FetchUserMenuOptionsPayload
): Promise<AxiosResponse<FetchUserMenuOptionsPayload>> => {
  return postRequest(WEB_SERVICE_API_PERSONAL_MENU, data)
}

export const userApiHelpers = {
  authenticateUser,
  getUserMenuOptions,
}
