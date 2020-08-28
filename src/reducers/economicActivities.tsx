import { ResponseMetadata } from '../constants/types'
import {
  PERSON_GET_ECONOMIC_ACTIVITY,
  PERSON_GET_ECONOMIC_ACTIVITY_FAILURE,
  PERSON_GET_ECONOMIC_ACTIVITY_SUCCESS,
} from '../constants/actions'
import { EconomicActivitiesActions } from '../actions/economicActivities'

export type EconomicActivity = {
  ID_ACTIVIDAD_ECONOMICA: string
  SECCION: string
  DIVISION: string
  GRUPO: string
  CLASE: string
  SUBCLASE: string
  CONCEPTO: string
  ESTADO: string
  FECHA_INSERCION: string
  USUARIO_INSERCION: string
  FECHA_ACTUALIZACION: string
  USUARIO_ACTUALIZACION: string
  ROW_POS: number
}

export type EconomicActivitiesState = {
  economicActivities: EconomicActivity[]
  economicActivityMetadata: ResponseMetadata
  isFetching: boolean
}

const initialState = {
  economicActivities: [],
  economicActivityMetadata: {
    currentPage: 1,
    totalPages: 0,
    pageSize: 15,
    count: 0,
    totalRows: 0,
  },
  isFetching: false,
}

const economicActivities = (
  state: EconomicActivitiesState = initialState,
  action: EconomicActivitiesActions
): EconomicActivitiesState => {
  switch (action.type) {
    case PERSON_GET_ECONOMIC_ACTIVITY: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case PERSON_GET_ECONOMIC_ACTIVITY_SUCCESS: {
      return {
        ...state,
        economicActivities: action.economicActivities,
        economicActivityMetadata: action.economicActivityMeta,
        isFetching: false,
      }
    }
    case PERSON_GET_ECONOMIC_ACTIVITY_FAILURE: {
      return {
        ...state,
        isFetching: false,
      }
    }
    default:
      return state
  }
}

export default economicActivities
