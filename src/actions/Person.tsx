import {
  LEGAL_PERSON_CREATE_PERSON,
  LEGAL_PERSON_CREATE_PERSON_FAILURE,
  LEGAL_PERSON_CREATE_PERSON_SUCCESS,
  PHYSICAL_PERSON_CREATE_PERSON,
  PHYSICAL_PERSON_CREATE_PERSON_FAILURE,
  PHYSICAL_PERSON_CREATE_PERSON_SUCCESS,
  PHYSICAL_PERSON_GET_FOR_UPDATE_PERSON,
} from '../constants/actions'
import { PersonType } from '../reducers/Person'

type GetPersonForUpdateAction = {
  type: typeof PHYSICAL_PERSON_GET_FOR_UPDATE_PERSON
}

export const getPersonForUpdate = (): GetPersonForUpdateAction => {
  return {
    type: PHYSICAL_PERSON_GET_FOR_UPDATE_PERSON,
  }
}

export type CreatePhysicalPersonAction = {
  type: typeof PHYSICAL_PERSON_CREATE_PERSON
  Person: PersonType
}

export const createPhysicalPerson = (
  Person: PersonType
): CreatePhysicalPersonAction => {
  return {
    Person,
    type: PHYSICAL_PERSON_CREATE_PERSON,
  }
}

export type CreatePhysicalPersonSuccessAction = {
  type: typeof PHYSICAL_PERSON_CREATE_PERSON_SUCCESS
  newPerson: PersonType
}

export const createPhysicalPersonSuccess = (
  newPerson: PersonType
): CreatePhysicalPersonSuccessAction => {
  return {
    type: PHYSICAL_PERSON_CREATE_PERSON_SUCCESS,
    newPerson,
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

export type CreateLegalPersonAction = {
  type: typeof LEGAL_PERSON_CREATE_PERSON
  Person: PersonType
}

export const createLegalPerson = (
  Person: PersonType
): CreateLegalPersonAction => {
  return {
    Person,
    type: LEGAL_PERSON_CREATE_PERSON,
  }
}

export type CreateLegalPersonSuccessAction = {
  type: typeof LEGAL_PERSON_CREATE_PERSON_SUCCESS
  newPerson: PersonType
}

export const createLegalPersonSuccess = (
  newPerson: PersonType
): CreateLegalPersonSuccessAction => {
  return {
    type: LEGAL_PERSON_CREATE_PERSON_SUCCESS,
    newPerson,
  }
}

export type CreateLegalPersonFailureAction = {
  type: typeof LEGAL_PERSON_CREATE_PERSON_FAILURE
}

export const createLegalPersonFailure = (): CreateLegalPersonFailureAction => {
  return {
    type: LEGAL_PERSON_CREATE_PERSON_FAILURE,
  }
}

export type PersonAction =
  | CreatePhysicalPersonAction
  | CreatePhysicalPersonFailureAction
  | CreatePhysicalPersonSuccessAction
  | CreateLegalPersonAction
  | CreateLegalPersonFailureAction
  | CreateLegalPersonSuccessAction
