import React from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { ColumnType } from 'antd/lib/table'
import { Form } from 'antd'
import { PersonType } from '../reducers/Person'
import {
  CustomButton,
  CustomDivider,
  CustomFormItem,
  CustomModal,
  CustomRow,
  CustomTable,
  CustomTitle,
  RelatedRecord,
} from '.'

const columns: ColumnType<PersonType>[] = [
  {
    key: 'codigo',
    title: 'Código',
    dataIndex: 'codigo',
  },
  {
    key: 'nombre',
    title: 'Nombre representante',
    dataIndex: 'nombres',
  },
  {
    key: 'doc_identidad',
    title: 'Doc. Identidad',
    dataIndex: 'doc_identidad',
  },
]

const LegalRepresentatives = (props: {
  saveData: Function
  onModalFormChange: Function
}): React.ReactElement => {
  const { onModalFormChange, saveData } = props
  const [form] = Form.useForm()
  const [modalVisibilityState, setModalVisibilityState] = React.useState(false)

  const handleOnFinish = () => {
    const dataFields = form.getFieldsValue()

    onModalFormChange(dataFields, 'RELACIONADOS')
    saveData()
    setModalVisibilityState(false)
  }

  return (
    <>
      <CustomDivider orientation={'left'}>
        <CustomTitle level={4}>Representantes Legales</CustomTitle>
      </CustomDivider>

      <CustomRow justify={'end'} style={{ marginBottom: 20 }}>
        <CustomButton
          icon={<PlusOutlined />}
          type={'primary'}
          onClick={() => setModalVisibilityState(true)}
        >
          Agregar representante
        </CustomButton>
      </CustomRow>

      <CustomFormItem
        shouldUpdate={(prevValues, curValues) =>
          prevValues.relacionados !== curValues.relacionados
        }
      >
        {({ getFieldValue }) => {
          const relacionados = getFieldValue('relacionados') || []
          const originData = relacionados.map(
            (values: PersonType, index: number) => {
              return {
                key: index,
                codigo: index,
                nombres: values.NOMBRES,
                doc_identidad:
                  values.DOCUMENTO_IDENTIDAD !== undefined
                    ? values.DOCUMENTO_IDENTIDAD
                    : values.NO_PASAPORTE,
              }
            }
          )

          return (
            <CustomTable
              bordered
              columns={columns}
              dataSource={originData}
              pagination={false}
            />
          )
        }}
      </CustomFormItem>

      <CustomModal
        centered
        title={<CustomTitle level={3}>Registro de relacionados</CustomTitle>}
        visible={modalVisibilityState}
        width={'85%'}
        footer={null}
        closable
        onCancel={() => setModalVisibilityState(false)}
        style={{
          marginTop: 20,
        }}
      >
        <RelatedRecord form={form} onFinish={handleOnFinish} />
      </CustomModal>
    </>
  )
}

export default LegalRepresentatives
