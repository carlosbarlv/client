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

type PropsType = {
  visible: boolean
  width?: number | string
  hideModal: () => void
}

const ContribuitonsDepositModal = ({visible, width, hideModal}: PropsType): React.ReactElement => {
  return (
    <CustomModal
      title={<CustomTitle level={4}>Depósito de Aportaciones</CustomTitle>}
      visible={visible}
      width={width}
      onCancel={hideModal}
      onOk={hideModal}
    >
      <CustomForm labelCol={{ md: 4 }}>
        <CustomRow gutter={[32, 0]}>
          <CustomCol span={24}>
            <CustomFormItem label={'Cuenta'}>
              <CustomInput value={'001-0023443'} contentEditable={false} />
            </CustomFormItem>
          </CustomCol>
          <CustomCol span={24}>
            <CustomFormItem label={'Título'}>
              <CustomInput value={'Alejandro Genao'} contentEditable={false} />
            </CustomFormItem>
          </CustomCol>
          <CustomCol span={24}>
            <CustomFormItem label={'Monto'}>
              <CustomInputNumber />
            </CustomFormItem>
          </CustomCol>
          <CustomCol span={24}>
            <CustomFormItem label={'Comentario'}>
              <CustomTextArea />
            </CustomFormItem>
          </CustomCol>
        </CustomRow>
      </CustomForm>
    </CustomModal>
  )
}
export default ContribuitonsDepositModal
