import React from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { ColumnType } from 'antd/lib/table'
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
    dataIndex: 'nombre',
  },
  {
    key: 'doc_identidad',
    title: 'Doc. Identidad',
    dataIndex: 'doc_identidad',
  },
]

export type RelatedPersonType = {
  ANIO_TIEMPO_EMPRESA?: string
  APELLIDOS?: string
  APODO?: string
  DOCUMENTO_IDENTIDAD?: string
  ESTADO_CIVIL?: string
  FECHA_NAC?: string
  MESES_TIEMPO_EMPRESA?: string
  NACIONALIDAD?: string
  NOMBRES?: string
  NO_PASAPORTE?: string
  POSICION?: string
  SEXO?: string
}

const LegalRepresentatives = (props: {
  onModalFormChange: Function
}): React.ReactElement => {
  const { onModalFormChange } = props
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

          if (relacionados.length !== 0) {
            onModalFormChange(relacionados)
          }

          return relacionados.length ? (
            <ul>
              {relacionados.map(
                (
                  user: RelatedPersonType,
                  index: string | number | undefined
                ) => (
                  <li key={index}>
                    <span>{user.NOMBRES}</span>
                    <span>{user.DOCUMENTO_IDENTIDAD}</span>
                  </li>
                )
              )}
            </ul>
          ) : (
            <CustomTable bordered columns={columns} pagination={false} />
          )
        }}
      </CustomFormItem>

      <CustomModal
        centered
        title={<CustomTitle level={3}>Registro de relacionados</CustomTitle>}
        visible={modalVisibilityState}
        width={'85%'}
        footer={null}
        closable={true}
        onCancel={() => setModalVisibilityState(false)}
        style={{
          marginTop: 20,
        }}
      >
        <RelatedRecord onFinish={handleOnFinish} />
      </CustomModal>
    </>
  )
}

export default LegalRepresentatives
