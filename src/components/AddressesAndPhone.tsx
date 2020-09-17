import React from 'react'
import {
  Addresses,
  CustomButton,
  CustomCol,
  CustomForm,
  CustomFormContainer,
  CustomFormItem,
  CustomLayout,
  CustomRow,
  Phone,
  SocialNetworks,
} from '.'
import { formItemLayout } from '../themes'
import { validateMessages } from '../constants/general'

const AddressesAndPhone: React.FunctionComponent = () => {
  return (
    <CustomRow justify={'center'}>
      <CustomCol xs={24} xl={18}>
        <CustomLayout
          style={{
            background: 'white',
            padding: '35px 20px',
            boxShadow:
              '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
          }}
        >
          <CustomForm {...formItemLayout} validateMessages={validateMessages}>
            <CustomFormContainer>
              <Addresses />
              <CustomRow justify={'space-between'}>
                <Phone />
                <SocialNetworks />
              </CustomRow>
              <CustomFormItem style={{ marginTop: '20px' }}>
                <CustomButton htmlType={'submit'} type={'primary'}>
                  Guardar
                </CustomButton>
              </CustomFormItem>
            </CustomFormContainer>
          </CustomForm>
        </CustomLayout>
      </CustomCol>
    </CustomRow>
  )
}

export default AddressesAndPhone
