import React from 'react'
import { ColumnType } from 'antd/lib/table'
import {
  CustomButton,
  CustomCol,
  CustomDivider,
  CustomRow,
  CustomTable,
  CustomTitle,
} from '.'
import { PlusOutlined } from '@ant-design/icons'

type NumberPhone = {
  tipo: 'string'
  telefono: 'string | number'
  numero: 'string | number'
  extencion: 'number'
}

const columns: ColumnType<NumberPhone>[] = [
  {
    key: 'tipo',
    title: 'Tipo',
    dataIndex: 'TIPO',
  },
  {
    key: 'telefono',
    title: 'Teléfono',
    dataIndex: 'TELEFONO',
  },
  {
    key: 'numero',
    title: 'Número',
    dataIndex: 'NUMERO',
  },
  {
    key: 'extencion',
    title: 'Extención',
    dataIndex: 'EXTENCION',
  },
]

const Phone: React.FunctionComponent = () => {
  return (
    <CustomCol xs={24} xl={11}>
      <CustomDivider orientation={'left'}>
        <CustomTitle level={4}> Teléfonos </CustomTitle>
      </CustomDivider>
      <CustomRow justify={'end'} style={{ marginBottom: 10 }}>
        <CustomButton icon={<PlusOutlined />} type={'primary'}>
          Agregar teléfono
        </CustomButton>
      </CustomRow>
      <CustomTable columns={columns} pagination={false} bordered></CustomTable>
    </CustomCol>
  )
}

export default Phone
