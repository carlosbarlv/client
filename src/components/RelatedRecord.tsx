import React from 'react'
import { FormInstance } from 'antd/lib/form'
import {
  AddressesAndPhone,
  CustomButton,
  CustomForm,
  CustomFormContainer,
  CustomFormItem,
  PoliticallyExposedPerson,
} from '../components'
import { SaveOutlined } from '@ant-design/icons'
import { RelatedRecordGeneralData } from '.'
import { formItemLayout } from '../themes'
import { validateMessages } from '../constants/general'
import { showNotification } from '../utils/general'

const RelatedRecord = (props: {
  onFinish: () => void
  form: FormInstance
}): React.ReactElement => {
  const { form, onFinish } = props

  const handleOnFinish = async () => {
    try {
      await form.validateFields()
      onFinish()
    } catch (error) {
      showNotification({
        title: 'Faltan datos',
        description: 'Por favor llenar los campos requeridos.',
        type: 'error',
      })
    }
  }

  return (
    <CustomForm
      {...formItemLayout}
      form={form}
      name={'legalPerson'}
      validateMessages={validateMessages}
    >
      <CustomFormContainer>
        <RelatedRecordGeneralData />
        <AddressesAndPhone />
        <PoliticallyExposedPerson />

        <CustomFormItem>
          <CustomButton
            icon={<SaveOutlined />}
            type={'primary'}
            onClick={handleOnFinish}
          >
            Guardar
          </CustomButton>
        </CustomFormItem>
      </CustomFormContainer>
    </CustomForm>
  )
}

export default RelatedRecord
