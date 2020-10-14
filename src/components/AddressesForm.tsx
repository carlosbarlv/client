import React from 'react'
import { Form } from 'antd'
import { ColumnType } from 'antd/lib/table'
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

const AddressesForm = (props: { saveData: Function }): React.ReactElement => {
  const { saveData } = props
  const [form] = Form.useForm()
  const [modalVisivilityState, setModalVisivilityState] = React.useState(false)

  const handleOnClick = async (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.preventDefault()
    try {
      await form.validateFields()
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

              if (direcciones.length !== 0) {
                saveData(direcciones)
              }

              return direcciones.length ? (
                <ul>
                  {direcciones.map(
                    (dir: AddressType, index: string | undefined | number) => (
                      <li key={index}>
                        {dir.TIPO_DIRECCION} -- {dir.PAIS}
                      </li>
                    )
                  )}
                </ul>
              ) : (
                <CustomTable bordered columns={Columns} pagination={false} />
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
        centered={true}
        closable={true}
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
