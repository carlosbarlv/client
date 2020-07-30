import axios, { AxiosResponse } from 'axios'
import { getSessionInfo, getSessionToken } from './session'
import {
  WEB_SERVICE_API_GENERAL_GET_NACIONALITIES,
  WEB_SERVICE_API_GET_PERSONAS,
  WEB_SERVICE_API_LOGIN,
  WEB_SERVICE_API_PERSONAL_MENU,
} from '../constants/routes'

type RequestHeaders = {
  headers: {
    'Content-Type': string
    Authorization: string
  }
}

const getResponseParams = (): RequestHeaders => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: getSessionToken(),
    },
  }
}

const getDefaultData = () => {
  const { businessId } = getSessionInfo()

  return {
    businessId,
  }
}

function postRequest<T>(url: string, data: object): Promise<AxiosResponse<T>> {
  const config = getResponseParams()
  const defaultData = getDefaultData()

  const result = axios.post(url, { ...defaultData, ...data }, config)

  return result
}

function getRequest<T>(url: string): Promise<AxiosResponse<T>> {
  const config = getResponseParams()

  return axios.get(url, config)
}

function unauthorizedPostRequest<T>(
  url: string,
  data: T
): Promise<AxiosResponse<T>> {
  const config = getResponseParams()

  return axios.post(url, data, config)
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

const getPaginatedUrl = (url: string, page = 1, size = 1): string => {
  return `${url}?page=${page}&size=${size}`
}

export type GetPersonaListPayload = {
  status?: string
}

const getPersonaList = (
  data: GetPersonaListPayload,
  pageNumber = 1,
  pageSize = 10
): Promise<AxiosResponse<GetPersonaListPayload>> => {
  return postRequest(
    getPaginatedUrl(WEB_SERVICE_API_GET_PERSONAS, pageNumber, pageSize),
    data
  )
}

export const partnersApiHelpers = {
  getPersonaList,
}

const getNationalities = (): Promise<AxiosResponse<GetPersonaListPayload>> => {
  return getRequest(WEB_SERVICE_API_GENERAL_GET_NACIONALITIES)
}

export const nationalitiesApiHelpers = {
  getNationalities,
}
