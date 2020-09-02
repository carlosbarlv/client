import React from 'react'
import { ColumnType } from 'antd/lib/table'
import {
  CustomDivider,
  CustomRow,
  CustomTable,
  CustomTitle,
} from '../components'

type Representatives = {
  codigo: string | number
  nombre: string
  doc_identida: string
  key: string
}

const columns: ColumnType<Representatives>[] = [
  {
    key: 'codigo',
    title: 'Codigo',
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
    <CustomRow justify={'start'}>
      <CustomDivider orientation={'left'}>
        <CustomTitle level={4}>Representantes Legales</CustomTitle>
      </CustomDivider>
      <CustomTable
        columns={columns}
        pagination={false}
        bordered
        sticky
      ></CustomTable>
    </CustomRow>
  )
}

export default LegalRepresentatives
