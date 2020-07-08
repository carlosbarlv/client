import React from 'react'
import { ColumnType } from 'antd/lib/table'
import { Button, Tooltip } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { RadioChangeEvent } from 'antd/lib/radio'
import {
  CustomCol,
  CustomRadio,
  CustomRadioGroup,
  CustomRow,
  CustomSearch,
  CustomTable,
  CustomText,
} from '../components'

type Person = {
  action?: React.ReactNode
  codigo: string | number
  nombre: string
  doc_identidad: string
  telefono: string
  email: string
  categoria: string
  key: string
}

const Action = (): React.ReactElement => {
  return (
    <Tooltip title={'Editar'}>
      <Button shape={'circle'} icon={<EditOutlined />} />
    </Tooltip>
  )
}

const columns: ColumnType<Person>[] = [
  {
    key: 'action',
    title: 'Acción',
    render: Action,
  },
  {
    key: 'codigo',
    title: 'Código',
    dataIndex: 'codigo',
  },
  {
    key: 'nombre',
    title: 'Nombre',
    dataIndex: 'nombre',
  },
  {
    key: 'doc_identidad',
    title: 'Cédula/RNC',
    dataIndex: 'doc_identidad',
  },
  {
    key: 'telefono',
    title: 'Teléfono',
    dataIndex: 'telefono',
  },
  {
    key: 'email',
    title: 'Email',
    dataIndex: 'email',
  },
  {
    key: 'categoria',
    title: 'Categoría',
    dataIndex: 'categoria',
  },
]

const data: Person[] = [
  {
    codigo: '1',
    nombre: 'Carlos',
    doc_identidad: '8',
    telefono: '849',
    email: '@',
    categoria: '1',
    key: '1',
  },
  {
    codigo: '2',
    nombre: 'Carlos2',
    doc_identidad: '82',
    telefono: '8492',
    email: '@2',
    categoria: '12',
    key: '12',
  },
]

const AddPersonTableTitle = (): React.ReactElement => {
  const [entryStateFilter, setEntryStateFilter] = React.useState('T')
  const handleStateFilterRadioChange = (e: RadioChangeEvent) => {
    setEntryStateFilter(e.target.value)
  }

  return (
    <CustomRow>
      <CustomCol xs={24} md={12}>
        <h2>Relación personas</h2>
      </CustomCol>
      <CustomCol xs={24} md={12}>
        <CustomRow justify={'end'}>
          <CustomSearch placeholder={'Buscar...'} />
          <CustomText>Ver: </CustomText>
          <CustomRadioGroup
            value={entryStateFilter}
            onChange={handleStateFilterRadioChange}
          >
            <CustomRadio value="T">Todos</CustomRadio>
            <CustomRadio value="A">Activos</CustomRadio>
            <CustomRadio value="I">Inactivos</CustomRadio>
          </CustomRadioGroup>
        </CustomRow>
      </CustomCol>
    </CustomRow>
  )
}

const Person = (): React.ReactElement => (
  <CustomTable
    title={AddPersonTableTitle}
    columns={columns}
    dataSource={data}
  />
)

export default Person
