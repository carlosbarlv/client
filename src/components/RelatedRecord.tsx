import React from 'react'
import {
  Addresses,
  CustomForm,
  CustomFormContainer,
  CustomRow,
  Phone,
  PoliticallyExposedPerson,
  SocialNetworks,
} from '../components'
import { RelatedRecordGeneralData } from '.'
import { formItemLayout } from '../themes'
import { validateMessages } from '../constants/general'

const RelatedRecord: React.FunctionComponent = () => {
  return (
    <CustomForm {...formItemLayout} validateMessages={validateMessages}>
      <CustomFormContainer>
        <RelatedRecordGeneralData />
        <Addresses />
        <PoliticallyExposedPerson />
        <CustomRow justify={'space-between'} align={'top'}>
          <Phone />
          <SocialNetworks />
        </CustomRow>
      </CustomFormContainer>
    </CustomForm>
  )
}

export default RelatedRecord
