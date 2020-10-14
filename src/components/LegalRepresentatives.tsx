import React from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { ColumnType } from 'antd/lib/table'
// import { FormInstance } from 'antd/lib/form'
import { Form } from 'antd'
import { PersonType } from '../reducers/Person'
import { AddressesType } from './AddressesForm'
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

export type PepsType = {
  desCargo?: string
  descEntidad?: string
  entidadPep?: string
  ENTIDAD_PEP?: string
  fechaFinal?: string
  fechaInicio?: string
  ID_CARGO?: string
  PEP?: string
}

export type RelatedPersonType = {
  ANIO_TIEMPO_EMPRESA?: string
  APELLIDOS?: string
  APODO?: string
  DIRECCIONES?: AddressesType[]
  DOCUMENTO_IDENTIDAD?: string
  ESTADO_CIVIL?: string
  FECHA_NAC?: string
  MESES_TIEMPO_EMPRESA?: string
  NACIONALIDAD?: string
  NOMBRES?: string
  NO_PASAPORTE?: string
  PEP: PepsType
  POSICION?: string
  SEXO?: string
  TIPO_DOCUMENTO?: string
}

const LegalRepresentatives = (props: {
  onModalFormChange: Function
}): React.ReactElement => {
  const { onModalFormChange } = props
  const [form] = Form.useForm()
  const [modalVisibilityState, setModalVisibilityState] = React.useState(false)

  const handleOnFinish = () => {
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
            (values: RelatedPersonType, index: number) => {
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

          if (relacionados.length !== 0) {
            onModalFormChange(relacionados, 'relacionados')
          }

          return (
            <CustomTable
              bordered
              columns={columns}
              dataSource={relacionados.length ? originData : undefined}
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
