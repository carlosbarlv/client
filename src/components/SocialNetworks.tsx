import React from 'react'
import { ColumnType } from 'antd/lib/table'
import { CustomCol, CustomDivider, CustomTable, CustomTitle } from '.'

type Emails = {
  tipo: 'string'
  email_social: 'string'
  email_web: 'string'
  key: 'string'
}

const columns: ColumnType<Emails>[] = [
  {
    key: 'tipo',
    title: 'Tipo',
    dataIndex: 'TIPO',
  },
  {
    key: 'email_social',
    title: 'Email / Redes sociales',
    dataIndex: 'EMAILSOCIAL',
  },
  {
    key: 'email_web',
    title: 'Email / Dirección web',
    dataIndex: 'EMAILWEB',
  },
]

const SocialNetworks: React.FunctionComponent = () => {
  return (
    <CustomCol xs={24} xl={12}>
      <CustomDivider orientation={'left'}>
        <CustomTitle level={4}> Emails / Redes sociales </CustomTitle>
      </CustomDivider>
      <CustomTable columns={columns} pagination={false} bordered></CustomTable>
    </CustomCol>
  )
}

export default SocialNetworks
