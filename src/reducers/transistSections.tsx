import { TransistSectionsAction } from '../actions/transistSections'
import {
  TRANSIST_SESSIONS_GET_TRANSIST_SESSIONS,
  TRANSIST_SESSIONS_GET_TRANSIST_SESSIONS_FAILURE,
  TRANSIST_SESSIONS_GET_TRANSIST_SESSIONS_SUCCESS,
} from '../constants/actions'

export type TransistSessions = {
  CONCEPTO_ANULACION: string
  DOCUMENTO_IDENTIDAD: string
  ESTADO_SESION: string
  ESTADO: string
  FECHA_ACTUALIZACION: Date
  FECHA_ANULACION: Date
  FECHA_APLICACION: Date
  FECHA_INSERCION: Date
  FECHA_SESION: Date
  ID_APERTURA_TURNO: string
  ID_AREA_EMISOR: string
  ID_BANCO: string
  ID_CENTRO_COSTO: string
  ID_CLIENTE: string
  ID_CUENTA: string
  ID_LIST_ESTADO_SESSION: string
  ID_PERSONAL_ASIGNADO: string
  ID_PERSONAL_CAJERO: string
  ID_PERSONAL_EMISOR: string
  ID_SUCURSAL: string
  NO_DOCUMENTO_BANC: string
  NOMBRE_CLIENTE: string
  NOTA: string
  SECINTERNA: number
  TIPO_TRANS_BANC: string
  USUARIO_ACTUALIZACION: string
  USUARIO_INSERCION: string
  ID_EMPRESA: string
}

export type TransistSessionsState = {
  sessions: TransistSessions[]
}

const initialState = {
  sessions: [],
}

const sessions = (
  state: TransistSessionsState = initialState,
  action: TransistSectionsAction
): TransistSessionsState => {
  switch (action.type) {
    case TRANSIST_SESSIONS_GET_TRANSIST_SESSIONS:
      return {
        ...state,
      }
    case TRANSIST_SESSIONS_GET_TRANSIST_SESSIONS_SUCCESS:
      return {
        ...state,
        sessions: action.sessions,
      }
    case TRANSIST_SESSIONS_GET_TRANSIST_SESSIONS_FAILURE:
      return {
        ...state,
      }

    default:
      return state
  }
}
export default sessions
