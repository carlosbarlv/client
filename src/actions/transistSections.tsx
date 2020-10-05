import {
  TRANSIST_SESSIONS_GET_TRANSIST_SESSIONS,
  TRANSIST_SESSIONS_GET_TRANSIST_SESSIONS_FAILURE,
  TRANSIST_SESSIONS_GET_TRANSIST_SESSIONS_SUCCESS,
} from '../constants/actions'
import { TransistSessions } from '../reducers/transistSections'

export type GetTransistSessionsAction = {
  type: typeof TRANSIST_SESSIONS_GET_TRANSIST_SESSIONS
}
export const getTransistSessions = (): GetTransistSessionsAction => {
  return {
    type: TRANSIST_SESSIONS_GET_TRANSIST_SESSIONS,
  }
}

export type GetTransistSessionsSuccessAction = {
  type: typeof TRANSIST_SESSIONS_GET_TRANSIST_SESSIONS_SUCCESS
  sessions: TransistSessions[]
}
export const getTransistSessionsSuccess = (
  sessions: TransistSessions[]
): GetTransistSessionsSuccessAction => {
  return {
    type: TRANSIST_SESSIONS_GET_TRANSIST_SESSIONS_SUCCESS,
    sessions,
  }
}

export type GetTransistSessionsFailureAction = {
  type: typeof TRANSIST_SESSIONS_GET_TRANSIST_SESSIONS_FAILURE
}
export const getTransistSessionsFailure = (): GetTransistSessionsFailureAction => {
  return {
    type: TRANSIST_SESSIONS_GET_TRANSIST_SESSIONS_FAILURE,
  }
}

export type TransistSectionsAction =
  | GetTransistSessionsAction
  | GetTransistSessionsSuccessAction
  | GetTransistSessionsFailureAction
