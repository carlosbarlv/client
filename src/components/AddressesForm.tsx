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

export type AddressesType = {
  APARTAMENTO?: string
  CALLE?: string
  CASA?: string
  EDIFICIO?: string
  ESTADO?: string
  ID_MUNICIPIO?: string
  ID_PAIS?: string
  ID_PROVINCIA?: string
  ID_SECTOR?: string
  MUNICIPIO?: string
  PAIS?: string
  PRINCIPAL?: boolean
  PROVINCIA?: string
  PROXIMO_A?: string
  SECTOR?: string
  TIPO_DIRECCION?: string
}

const Columns: ColumnType<AddressesType>[] = [
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
  const prevVisibleRef = useRef<boolean>()

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

const AddressesForm = (props: { saveData: Function }): React.ReactElement => {
  const { saveData } = props
  const [form] = Form.useForm()
  const [modalVisivilityState, setModalVisivilityState] = React.useState(false)

  useResetFormOnCloseModal(form, modalVisivilityState)

  const handleOnClick = async () => {
    try {
      await form.validateFields()
      setModalVisivilityState(false)
    } catch (error) {
      showNotification(
        'Faltan datos',
        'Por favor llenar los campos requeridos.',
        'error'
      )
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
              const direcciones = getFieldValue('direcciones') || []
              const originData = direcciones.map(
                (values: AddressesType, index: number) => {
                  return {
                    key: index,
                    tipo_direccion: values.TIPO_DIRECCION,
                    pais: values.PAIS,
                    calle: values.CALLE,
                    casa: values.CASA,
                  }
                }
              )

              if (direcciones.length !== 0) {
                saveData(direcciones, 'direcciones')
              }

              return (
                <CustomTable
                  bordered
                  columns={Columns}
                  dataSource={direcciones.length ? originData : undefined}
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
                htmlType={'submit'}
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

export default AddressesForm
