import React from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { ColumnType } from 'antd/lib/table'
import {
  CustomButton,
  CustomDivider,
  CustomModal,
  CustomRow,
  CustomTable,
  CustomTitle,
  RelatedRecord,
} from '.'

type Representatives = {
  codigo: string | number
  nombre: string
  doc_identida: string
  key: string
}

const columns: ColumnType<Representatives>[] = [
  {
    key: 'codigo',
    title: 'Código',
    dataIndex: 'CODIGO',
  },
  {
    key: 'nombre',
    title: 'Nombre representante',
    dataIndex: 'NOMBRE',
  },
  {
    key: 'doc_identidad',
    title: 'Doc. Identidad',
    dataIndex: 'DOCUMENTOIDENTIDAD',
  },
]

const LegalRepresentatives = (): React.ReactElement => {
  const [
    relatedRecordModalVisibilityState,
    setRelatedRecordModalVisibilityState,
  ] = React.useState(false)

  return (
    <>
      <CustomDivider orientation={'left'}>
        <CustomTitle level={4}>Representantes Legales</CustomTitle>
      </CustomDivider>

      <CustomRow justify={'end'} style={{ marginBottom: 20 }}>
        <CustomButton
          icon={<PlusOutlined />}
          type={'primary'}
          onClick={() => setRelatedRecordModalVisibilityState(true)}
        >
          Agregar representante
        </CustomButton>
      </CustomRow>

      <CustomTable columns={columns} pagination={false} bordered />

      <CustomModal
        centered
        title={<CustomTitle level={4}>Registro de relacionados</CustomTitle>}
        visible={relatedRecordModalVisibilityState}
        width={'85%'}
        footer={null}
        closable={true}
        onCancel={() => setRelatedRecordModalVisibilityState(false)}
        style={{
          marginTop: 20,
        }}
      >
        <RelatedRecord />
      </CustomModal>
    </>
  )
}

export default LegalRepresentatives
