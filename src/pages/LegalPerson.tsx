import React from 'react'
import { PlusOutlined } from '@ant-design/icons'
import {
  Addresses,
  CustomButton,
  CustomCol,
  CustomForm,
  CustomFormContainer,
  CustomFormItem,
  CustomLayout,
  CustomModal,
  CustomRow,
  CustomTitle,
  GeneralData,
  LegalRepresentatives,
  Phone,
  PoliticallyExposedPerson,
  RelatedRecord,
  SocialNetworks,
} from '../components'
import { formItemLayout } from '../themes'
import { validateMessages } from '../constants/general'

const LegalPerson = (): React.ReactElement => {
  const [visible, setVisible] = React.useState(false)

  return (
    <>
      <CustomRow justify={'center'}>
        <CustomCol xs={24} xl={18}>
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
              <CustomFormContainer>
                <GeneralData />
                <CustomRow justify={'end'}>
                  <CustomButton
                    icon={<PlusOutlined />}
                    type={'primary'}
                    onClick={() => setVisible(true)}
                  >
                    Agregar representante
                  </CustomButton>
                </CustomRow>
                <LegalRepresentatives />
                <CustomRow justify={'start'}>
                  <CustomFormItem style={{ marginTop: '20px' }}>
                    <CustomButton htmlType={'submit'} type={'primary'}>
                      Guardar
                    </CustomButton>
                  </CustomFormItem>
                </CustomRow>
              </CustomFormContainer>
            </CustomForm>
          </CustomLayout>
        </CustomCol>
      </CustomRow>

      <CustomModal
        centered
        title={<CustomTitle level={4}>Registro de relacionados</CustomTitle>}
        visible={visible}
        width={'90%'}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        okText={'Agregar'}
        style={{
          marginTop: 20,
        }}
      >
        <CustomRow justify={'center'}>
          <CustomCol xs={24}>
            <CustomLayout
              style={{
                background: 'white',
                marginLeft: 20,
                marginRight: 20,
              }}
            >
              <CustomForm
                {...formItemLayout}
                validateMessages={validateMessages}
              >
                <CustomFormContainer>
                  <RelatedRecord />
                  <Addresses />
                  <PoliticallyExposedPerson />
                  <CustomRow justify={'space-between'} align={'top'}>
                    <Phone />
                    <SocialNetworks />
                  </CustomRow>
                </CustomFormContainer>
              </CustomForm>
            </CustomLayout>
          </CustomCol>
        </CustomRow>
      </CustomModal>
    </>
  )
}

export default LegalPerson
