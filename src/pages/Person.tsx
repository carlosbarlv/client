import React, { useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '../reducers'
import { getPaginatedPartners } from '../actions/partners'
import { getTablePagination } from '../utils/general'

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
    dataIndex: 'IDPERSONA',
  },
  {
    key: 'nombre',
    title: 'Nombre',
    dataIndex: 'NOMBRE',
  },
  {
    key: 'doc_identidad',
    title: 'Cédula/RNC',
    dataIndex: 'DOCUMENTOIDENTIDAD',
  },
  {
    key: 'telefono',
    title: 'Teléfono',
    dataIndex: 'TELEFONO',
  },
  {
    key: 'email',
    title: 'Email',
    dataIndex: 'EMAIL',
  },
  {
    key: 'categoria',
    title: 'Categoría',
    dataIndex: 'CATEGORIA',
  },
]

const Person = (): React.ReactElement => {
  const [entryStateFilter, setEntryStateFilter] = React.useState('A')
  const dispatch = useDispatch()
  const { partners, isFetching, partnersMetadata } = useSelector(
    (state: StoreState) => state.partners
  )
  const { currentPage, pageSize } = partnersMetadata

  useEffect(() => {
    dispatch(getPaginatedPartners('A', currentPage, pageSize))
  }, [dispatch, currentPage, pageSize])

  const title = () => {
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
              onChange={(e: RadioChangeEvent) => {
                setEntryStateFilter(e.target.value)
              }}
            >
              <CustomRadio value="">Todos</CustomRadio>
              <CustomRadio value="A">Activos</CustomRadio>
              <CustomRadio value="I">Inactivos</CustomRadio>
            </CustomRadioGroup>
          </CustomRow>
        </CustomCol>
      </CustomRow>
    )
  }

  return (
    <CustomTable
      title={title}
      rowKey={(row) => row.IDPERSONA}
      columns={columns}
      dataSource={partners}
      pagination={{
        ...getTablePagination(partnersMetadata),
        defaultPageSize: 15,
        showSizeChanger: true,
      }}
      size={'small'}
      loading={isFetching}
      onChange={(pagination) => {
        dispatch(
          getPaginatedPartners(
            entryStateFilter,
            pagination.current,
            pagination.pageSize
          )
        )
      }}
    />
  )
}

export default Person
