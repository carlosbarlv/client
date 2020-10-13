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
  width?: number
  hideModal: () => void
}

const ContribuitonsDepositModal = (props: PropsType): React.ReactElement => {
  return (
    <CustomModal
      title={<CustomTitle level={4}>Depósito de Aportaciones</CustomTitle>}
      visible={props.visible}
      width={800}
      onCancel={props.hideModal}
      onOk={props.hideModal}
    >
      <CustomForm labelCol={{ md: 4 }}>
        <CustomRow gutter={[32, 0]}>
          <CustomCol span={24}>
            <CustomFormItem label="Cuenta">
              <CustomInput value="001-0023443" readOnly={false} />
            </CustomFormItem>
          </CustomCol>
          <CustomCol span={24}>
            <CustomFormItem label="Título">
              <CustomInput value="Alejandro Genao" readOnly={false} />
            </CustomFormItem>
          </CustomCol>
          <CustomCol span={24}>
            <CustomFormItem label="Monto">
              <CustomInputNumber />
            </CustomFormItem>
          </CustomCol>
          <CustomCol span={24}>
            <CustomFormItem label="Comentario">
              <CustomTextArea />
            </CustomFormItem>
          </CustomCol>
        </CustomRow>
      </CustomForm>
    </CustomModal>
  )
}
export default ContribuitonsDepositModal
