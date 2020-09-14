import React from 'react'
import { ColumnType } from 'antd/lib/table'
import { CustomDivider, CustomTable, CustomTitle } from '.'

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
  return (
    <>
      <CustomDivider orientation={'left'}>
        <CustomTitle level={4}>Representantes Legales</CustomTitle>
      </CustomDivider>
      <CustomTable columns={columns} pagination={false} bordered></CustomTable>
    </>
  )
}

export default LegalRepresentatives
