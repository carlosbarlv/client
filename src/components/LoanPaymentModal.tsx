import { EyeOutlined } from '@ant-design/icons'
import React from 'react'
import {
  CustomButton,
  CustomCol,
  CustomForm,
  CustomFormItem,
  CustomInput,
  CustomInputNumber,
  CustomModal,
  CustomRadio,
  CustomRadioGroup,
  CustomRow,
  CustomSpace,
  CustomText,
  CustomTextArea,
  CustomTitle,
} from '.'

type PropsType = {
  visible: boolean
  width?: number | string
  onOkClick: () => void
  onCancelClick: () => void
  showPaymentDistribution: () => void
}

const LoanPaymentModal = ({visible, width, onOkClick, onCancelClick, showPaymentDistribution}: PropsType): React.ReactElement => {
  return (
    <CustomModal
      title={<CustomTitle level={4}>Pago a Préstamo</CustomTitle>}
      closable
      visible={visible}
      width={width}
      onCancel={onCancelClick}
      onOk={onOkClick}
    >
      <CustomForm  >
        <CustomRow gutter={[0, 32]}>
          <CustomCol span={12}>
            <CustomFormItem label={'Préstamo'}>
              <CustomInputNumber placeholder={'0024991'} readOnly />
            </CustomFormItem>
          </CustomCol>
          <CustomCol span={10} offset={2}>
            <CustomTitle level={4}>Monto Cuota: RD$14,455.00</CustomTitle>
            <CustomText >Próximo pago 22/08/2020</CustomText>
          </CustomCol>
          <CustomCol span={10} push={2}>
            <CustomRadioGroup size={'large'}>
                <CustomSpace direction={'vertical'} size={'middle'}>
                    <CustomRadio value={1}>1 Cuota Pendiente RD$14,455.00</CustomRadio>
                    <CustomRadio value={2}>Abomo a Capital</CustomRadio>
                    <CustomRadio value={3}>Adelanto de Cuotas</CustomRadio>
                    <CustomRadio value={4}>Saldo Total RD$223,754.08</CustomRadio>
                </CustomSpace>
            </CustomRadioGroup>
          </CustomCol>
          <CustomCol span={10} offset={4}>
              <CustomSpace direction={'vertical'}>
                <CustomSpace>
                    <CustomInputNumber size={'large'} placeholder={'1'} />
                    <CustomInput type={'number'} size={'large'} placeholder={'14,144.00'} />
                    <CustomButton 
                        size={'large'}
                        style={{backgroundColor: '#2DC8F7', color: 'white'}} 
                        icon={<EyeOutlined />} 
                        onClick={showPaymentDistribution}
                    />
                </CustomSpace>
                <CustomSpace style={{marginLeft: '40px', paddingLeft: '60px', paddingRight: '50px'}}>
                    <CustomInput type={'number'} size={'large'} placeholder={'0.00'} />
                </CustomSpace>
                <CustomSpace>
                    <CustomInputNumber size={'large'} placeholder={''} />
                    <CustomInput type={'number'} size={'large'} placeholder={''} />
                    <CustomButton
                        size={'large'}
                        style={{backgroundColor: '#2DC8F7', color: 'white'}} 
                        icon={<EyeOutlined />} 
                    />
                </CustomSpace>
              </CustomSpace>
          </CustomCol>
          <CustomCol span={22}>
              <CustomTextArea placeholder={'Pago a Cuota Pendiente'} rows={6} />
          </CustomCol>
        </CustomRow>
      </CustomForm>
    </CustomModal>
  )
}
export default LoanPaymentModal
