import {
  PHYSICAL_PERSON_CREATE_PERSON,
  PHYSICAL_PERSON_CREATE_PERSON_FAILURE,
  PHYSICAL_PERSON_CREATE_PERSON_SUCCESS,
  PHYSICAL_PERSON_GET_FOR_UPDATE_PERSON,
} from '../constants/actions'
import { PhysicalPersonType } from '../reducers/physicalPerson'

type GetPhysicalPersonForUpdateAction = {
  type: typeof PHYSICAL_PERSON_GET_FOR_UPDATE_PERSON
}

export const getPhysicalPersonForUpdate = (): GetPhysicalPersonForUpdateAction => {
  return {
    type: PHYSICAL_PERSON_GET_FOR_UPDATE_PERSON,
  }
}

export type CreatePhysicalPersonAction = {
  type: typeof PHYSICAL_PERSON_CREATE_PERSON
  physicalPerson: PhysicalPersonType
}

export const createPhysicalPerson = (
  physicalPerson: PhysicalPersonType
): CreatePhysicalPersonAction => {
  return {
    physicalPerson,
    type: PHYSICAL_PERSON_CREATE_PERSON,
  }
}

export type CreatePhysicalPersonSuccessAction = {
  type: typeof PHYSICAL_PERSON_CREATE_PERSON_SUCCESS
  newPhysicalPerson: PhysicalPersonType
}

export const createPhysicalPersonSuccess = (
  newPhysicalPerson: PhysicalPersonType
): CreatePhysicalPersonSuccessAction => {
  return {
    type: PHYSICAL_PERSON_CREATE_PERSON_SUCCESS,
    newPhysicalPerson,
  }
}

export type CreatePhysicalPersonFailureAction = {
  type: typeof PHYSICAL_PERSON_CREATE_PERSON_FAILURE
}

export const createPhysicalPersonFailure = (): CreatePhysicalPersonFailureAction => {
  return {
    type: PHYSICAL_PERSON_CREATE_PERSON_FAILURE,
  }
}

export type PhysicalPersonAction =
  | CreatePhysicalPersonAction
  | CreatePhysicalPersonFailureAction
  | CreatePhysicalPersonSuccessAction
