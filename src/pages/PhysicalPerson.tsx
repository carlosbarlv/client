import React from 'react'
import {
  CustomButton,
  CustomCol,
  CustomForm,
  CustomFormItem,
  CustomLayout,
  CustomRow,
} from '../components'
import GeneralData from '../components/GeneralData'
import styled from 'styled-components'
import IncomeInformation from '../components/IncomeInformation'
import { PlusOutlined } from '@ant-design/icons'
import PoliticallyExposedPerson from '../components/PoliticallyExposedPerson'
import { formItemLayout } from '../themes'

const FormContainer = styled.div`
  padding-left: 10px;
  padding-right: 20px;
`

const PhysicalPerson = (): React.ReactElement => {
  const validateMessages = {
    required: `$\{label} es requerido.`,
    types: {
      email: `$\{label} no es un email válido.`,
      number: `$\{label} no es un número válido.`,
      regexp: `$\{label} formato no válido.`,
    },
    pattern: {
      mismatch: `$\{label} formato no válido.`,
    },
    number: {
      len: `"$\{label}" debe tener exactamente "$\{len}" caracteres.`,
    },
    string: {
      len: `"$\{label}" debe tener exactamente "$\{len}" caracteres.`,
    },
  }

  return (
    <CustomRow justify={'center'}>
      <CustomCol
        {...{
          xs: 24,
          sm: 24,
          md: 24,
          xl: 18,
        }}
      >
        <CustomLayout
          style={{
            background: 'white',
            padding: '35px 20px',
            boxShadow:
              '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <CustomForm {...formItemLayout} validateMessages={validateMessages}>
            <FormContainer>
              <GeneralData />
              <CustomRow justify={'end'}>
                <CustomButton icon={<PlusOutlined />} type={'primary'}>
                  Agregar Relacionado
                </CustomButton>
              </CustomRow>
              <IncomeInformation />
              <PoliticallyExposedPerson />
              <CustomFormItem>
                <CustomButton htmlType={'submit'} type={'primary'}>
                  Guardar
                </CustomButton>
              </CustomFormItem>
            </FormContainer>
          </CustomForm>
        </CustomLayout>
      </CustomCol>
    </CustomRow>
  )
}
export default PhysicalPerson
