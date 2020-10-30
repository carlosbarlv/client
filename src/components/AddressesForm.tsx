import React, { useEffect, useRef } from 'react'
import { Form } from 'antd'
import { ColumnType } from 'antd/lib/table'
import { FormInstance } from 'antd/lib/form'
import { PlusOutlined, SaveOutlined } from '@ant-design/icons'
import {
  Addresses,
  CustomButton,
  CustomCol,
  CustomDivider,
  CustomForm,
  CustomFormContainer,
  CustomFormItem,
  CustomModal,
  CustomRow,
  CustomTable,
  CustomTitle,
  Phone,
  SocialNetworks,
} from '.'
import { formItemLayout } from '../themes'
import { validateMessages } from '../constants/general'
import { showNotification } from '../utils/general'
import { AddressType } from '../reducers/addresses'

const Columns: ColumnType<AddressType>[] = [
  {
    key: 'TIPO_DIRECCION',
    title: 'Tipo Dirección',
    dataIndex: 'TIPO_DIRECCION',
  },
  {
    key: 'PAIS',
    title: 'Pais',
    dataIndex: 'PAIS',
  },
  {
    key: 'CASA',
    title: 'Casa',
    dataIndex: 'CASA',
  },
  {
    key: 'CALLE',
    title: 'Calle',
    dataIndex: 'CALLE',
  },
]

const useResetFormOnCloseModal = (
  form: FormInstance,
  modalVisivilityState: boolean
) => {
  const prevVisibleRef = useRef<boolean>(modalVisivilityState)

  useEffect(() => {
    prevVisibleRef.current = modalVisivilityState
  }, [modalVisivilityState])

  const prevVisible = prevVisibleRef.current

  useEffect(() => {
    if (!modalVisivilityState && prevVisible) {
      form.resetFields()
    }
  }, [modalVisivilityState, form, prevVisible])
}

const AddressesForm = (props: {
  saveData: Function
  onModalFormChange: Function
}): React.ReactElement => {
  const { onModalFormChange, saveData } = props
  const [form] = Form.useForm()
  const [modalVisivilityState, setModalVisivilityState] = React.useState(false)

  useResetFormOnCloseModal(form, modalVisivilityState)

  const handleOnClick = () => {
    const dataFields = form.getFieldsValue()
    try {
      form.validateFields()
      onModalFormChange(dataFields, 'DIRECCIONES')
      saveData()
      form.submit()
      setModalVisivilityState(false)
    } catch (error) {
      showNotification({
        title: 'Faltan datos',
        description: 'Por favor llenar los campos requeridos.',
        type: 'error',
      })
    }
  }

  return (
    <>
      <CustomDivider orientation={'left'}>
        <CustomTitle level={4}>Direcciones</CustomTitle>
      </CustomDivider>

      <CustomRow justify={'end'}>
        <CustomFormItem>
          <CustomButton
            icon={<PlusOutlined />}
            onClick={() => setModalVisivilityState(true)}
            type={'primary'}
          >
            Agregar direcciones
          </CustomButton>
        </CustomFormItem>
        <CustomCol xs={24}>
          <CustomFormItem
            shouldUpdate={(prevValues, curValues) =>
              prevValues.direcciones !== curValues.direcciones
            }
          >
            {({ getFieldValue }) => {
              const address = getFieldValue('address') || []
              const originData = address.map(
                (values: AddressType, index: number) => {
                  return {
                    key: index,
                    tipo_direccion: values.TIPO_DIRECCION,
                    pais: values.PAIS,
                    calle: values.CALLE,
                    casa: values.CASA,
                  }
                }
              )

              return (
                <CustomTable
                  bordered
                  columns={Columns}
                  dataSource={originData}
                  pagination={false}
                />
              )
            }}
          </CustomFormItem>
        </CustomCol>
      </CustomRow>

      <CustomRow justify={'space-between'}>
        <Phone />
        <SocialNetworks />
      </CustomRow>

      <CustomModal
        centered
        closable
        footer={null}
        onCancel={() => setModalVisivilityState(false)}
        style={{ marginTop: '20px' }}
        title={<CustomTitle level={3}>Registro de Direcciones</CustomTitle>}
        visible={modalVisivilityState}
        width={'85%'}
      >
        <CustomForm
          {...formItemLayout}
          form={form}
          name={'addressesForm'}
          validateMessages={validateMessages}
        >
          <CustomFormContainer>
            <Addresses />

            <CustomFormItem>
              <CustomButton
                icon={<SaveOutlined />}
                onClick={handleOnClick}
                type={'primary'}
              >
                Guardar
              </CustomButton>
            </CustomFormItem>
          </CustomFormContainer>
        </CustomForm>
      </CustomModal>
    </>
  )
}

export { useResetFormOnCloseModal }
export default AddressesForm
