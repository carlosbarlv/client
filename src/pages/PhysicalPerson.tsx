import React from 'react'
import {
  CustomButton,
  CustomCol,
  CustomDivider,
  CustomForm,
  CustomFormItem,
  CustomInput,
  CustomLayout,
  CustomRow,
  CustomTitle,
} from '../components'
import GeneralData from '../components/GeneralData'
import styled from 'styled-components'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
}

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
              <CustomDivider orientation={'left'}>
                <CustomTitle level={4}>Datos Generales</CustomTitle>
              </CustomDivider>
              <CustomRow justify={'start'}>
                <CustomCol xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <CustomFormItem label={'Código'} name={'codigo'}>
                    <CustomInput disabled placeholder={'Código persona'} />
                  </CustomFormItem>
                </CustomCol>
              </CustomRow>
              <GeneralData />
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
