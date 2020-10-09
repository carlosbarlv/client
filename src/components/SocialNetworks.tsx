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

type Emails = {
  tipo: 'string'
  descripcion: 'string'
}

const columns: ColumnType<Emails>[] = [
  {
    key: 'tipo',
    title: 'Tipo',
    dataIndex: 'TIPO',
  },
  {
    key: 'descripcion',
    title: 'Descripción',
    dataIndex: 'DESCRIPCION',
  },
]

const SocialNetworks: React.FunctionComponent = () => {
  return (
    <CustomCol xs={24} xl={11}>
      <CustomDivider orientation={'left'}>
        <CustomTitle level={4}> Emails / Redes sociales </CustomTitle>
      </CustomDivider>
      <CustomRow justify={'end'} style={{ marginBottom: 10 }}>
        <CustomButton icon={<PlusOutlined />} type={'primary'}>
          Agregar email/red social
        </CustomButton>
      </CustomRow>
      <CustomTable columns={columns} pagination={false} bordered></CustomTable>
    </CustomCol>
  )
}

export default SocialNetworks
