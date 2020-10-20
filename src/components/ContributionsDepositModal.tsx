import React from 'react'
import {
  CustomCol,
  CustomForm,
  CustomFormItem,
  CustomInput,
  CustomInputNumber,
  CustomModal,
  CustomRow,
  CustomTextArea,
  CustomTitle,
} from '.'
import { labelColFullWidth } from '../themes'

type PropsType = {
  visible: boolean
  width?: number | string
  onOkClick: () => void
  onCancelClick: () => void
}

const ContribuitonsDepositModal = ({visible, width, onOkClick, onCancelClick}: PropsType): React.ReactElement => {
  return (
    <CustomModal
      title={<CustomTitle level={4}>Depósito de Aportaciones</CustomTitle>}
      visible={visible}
      width={width}
      onCancel={onCancelClick}
      onOk={onOkClick}
    >
      <CustomForm {...labelColFullWidth}>
        <CustomRow gutter={[32, 0]}>
          <CustomCol span={24}>
            <CustomFormItem label={'Cuenta'}>
              <CustomInput value={'001-0023443'} readOnly />
            </CustomFormItem>
            <CustomFormItem label={'Título'}>
              <CustomInput value={'Alejandro Genao'} readOnly />
            </CustomFormItem>
            <CustomFormItem label={'Monto'}>
              <CustomInputNumber placeholder={'0.00'} />
            </CustomFormItem>
            <CustomFormItem label={'Comentario'}>
              <CustomTextArea rows={7} placeholder={'Deja algún comentario...'} />
            </CustomFormItem>
          </CustomCol>
        </CustomRow>
      </CustomForm>
    </CustomModal>
  )
}
export default ContribuitonsDepositModal
