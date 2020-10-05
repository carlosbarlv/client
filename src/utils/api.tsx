import axios, { AxiosResponse } from 'axios'
import { getSessionInfo, getSessionToken } from './session'
import {
  WEB_SERVICE_API_CREATE_UPDATE_PERSON,
  WEB_SERVICE_API_CREATE_UPDATE_PRODUCT_RANGES,
  WEB_SERVICE_API_GENERAL_GET_LIST_PARAMETERS,
  WEB_SERVICE_API_GENERAL_GET_NACIONALITIES,
  WEB_SERVICE_API_GET_ACTIVITY_PARAMETERS,
  WEB_SERVICE_API_GET_COINS,
  WEB_SERVICE_API_GET_ECONOMIC_ACTIVITY,
  WEB_SERVICE_API_GET_PERSONAS,
  WEB_SERVICE_API_GET_PRODUCT_RANGES,
  WEB_SERVICE_API_GET_TRANSIST_SESSIONS,
  WEB_SERVICE_API_LOGIN,
  WEB_SERVICE_API_PERSONAL_MENU,
} from '../constants/routes'
import { ProductRange } from '../reducers/catchements'
import { PhysicalPersonType } from '../reducers/physicalPerson'

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

function postRequest<T>(url: string, data: object): Promise<AxiosResponse<T>> {
  const config = getResponseParams()
  const result = axios.post(url, data, config)

  return result
}

function putRequest<T>(url: string, data: object): Promise<AxiosResponse<T>> {
  const config = getResponseParams()
  const result = axios.put(url, data, config)

  return result
}

function unauthorizedPostRequest<T>(
  url: string,
  data: T
): Promise<AxiosResponse<T>> {
  const config = getResponseParams()

  return axios.post(url, data, config)
}

function getRequest<T>(url: string): Promise<AxiosResponse<T>> {
  const config = getResponseParams()

  return axios.get(url, config)
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
  bussinesId?: number
}

const getPersonaList = (
  data: GetPersonaListPayload,
  pageNumber = 1,
  pageSize = 10
): Promise<AxiosResponse<GetPersonaListPayload>> => {
  const { businessId } = getSessionInfo()
  return postRequest(
    getPaginatedUrl(WEB_SERVICE_API_GET_PERSONAS, pageNumber, pageSize),
    Object.assign(data, { businessId })
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

const getProductRanges = (): Promise<AxiosResponse> => {
  const { businessId } = getSessionInfo()

  return getRequest(`${WEB_SERVICE_API_GET_PRODUCT_RANGES}/${businessId}`)
}

const createProductRange = (
  rangoProducto: ProductRange
): Promise<AxiosResponse> => {
  const { businessId } = getSessionInfo()

  return postRequest(WEB_SERVICE_API_CREATE_UPDATE_PRODUCT_RANGES, {
    ...rangoProducto,
    ID_EMPRESA: businessId,
  })
}

const updateProductRange = (
  rangoProducto: ProductRange
): Promise<AxiosResponse> => {
  const { businessId } = getSessionInfo()

  return putRequest(WEB_SERVICE_API_CREATE_UPDATE_PRODUCT_RANGES, {
    ...rangoProducto,
    ID_EMPRESA: businessId,
  })
}

export const catchementsApiHelpers = {
  getProductRanges,
  createProductRange,
  updateProductRange,
}

const getPartnersCategories = (listId: string): Promise<AxiosResponse> => {
  const { businessId } = getSessionInfo()

  return getRequest(
    `${WEB_SERVICE_API_GENERAL_GET_LIST_PARAMETERS}/${businessId}/${listId}`
  )
}

export const partnersCategoriesApiHelpers = {
  getPartnersCategories,
}

const getEconomicActivities = (): Promise<AxiosResponse> => {
  return getRequest(`${WEB_SERVICE_API_GET_ECONOMIC_ACTIVITY}`)
}

const postGetEconomicActivities = (keyword: string): Promise<AxiosResponse> => {
  return postRequest(`${WEB_SERVICE_API_GET_ECONOMIC_ACTIVITY}?size=8`, [
    {
      field: 'CONCEPTO',
      dataType: 'VARCHAR2',
      operator: 'LIKE',
      condition: `${keyword}`,
    },
  ])
}

export const economicActivitiesApiHelpers = {
  getEconomicActivities,
  postGetEconomicActivities,
}

const getCoins = (): Promise<AxiosResponse> => {
  const { businessId } = getSessionInfo()

  return getRequest(`${WEB_SERVICE_API_GET_COINS}/${businessId}`)
}

export const coinsApiHelpers = {
  getCoins,
}

const getActivityParameters = (activityId: string): Promise<AxiosResponse> => {
  const { businessId } = getSessionInfo()

  return postRequest(`${WEB_SERVICE_API_GET_ACTIVITY_PARAMETERS}`, {
    businessId,
    activityId,
  })
}

export const activityParametersApiHelpers = {
  getActivityParameters,
}

const createPerson = (person: PhysicalPersonType) =>
  postRequest(`${WEB_SERVICE_API_CREATE_UPDATE_PERSON}`, person)

export const personApiHelper = {
  createPerson,
}

const getTransistSessions = (): Promise<AxiosResponse> => {
  const { businessId } = getSessionInfo()

  return postRequest(WEB_SERVICE_API_GET_TRANSIST_SESSIONS, {
    condition: {
      ID_EMPRESA: businessId,
    },
  })
}

export const transistSessionsApiHelper = {
  getTransistSessions,
}
