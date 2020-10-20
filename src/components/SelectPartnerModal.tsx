import React from 'react'
import {
  CustomCol,
  CustomModal,
  CustomRow,
  CustomSearch,
  CustomTable,
  CustomTitle,
} from '.'
import { ColumnType } from 'antd/lib/table'

type PropsType = {
  visible: boolean
  width?: number | string
  hideModal: () => void
}
type SelectPartnerTable = {
  key: string
  nombre: string
  cedulaOrRNC: string
  cuenta: string
  telefono: string
  email: string
}

const SelectPartnerModal = ({visible, width, hideModal}: PropsType): React.ReactElement => {
  const columns: ColumnType<SelectPartnerTable>[] = [
    {
      title: 'Nombre',
      dataIndex: 'nombre',
    },
    {
      title: 'Cedula/RNC',
      dataIndex: 'cedulaOrRNC',
    },
    {
      title: 'No. Cuenta',
      dataIndex: 'cuenta',
    },
    {
      title: 'Teléfono',
      dataIndex: 'telefono',
    },
    {
      title: 'eMail',
      dataIndex: 'email',
    },
  ]
  const data: SelectPartnerTable[] = [
    {
      key: '1',
      nombre: 'Alejandro Genao',
      cedulaOrRNC: '001-0027881-1',
      cuenta: '00018748748',
      telefono: '809-573-9912',
      email: 'Agenao@gmail.com',
    },
    {
      key: '2',
      nombre: 'Alberto Rosario',
      cedulaOrRNC: '047-0001789-0',
      cuenta: '002544541',
      telefono: '829-547-8123',
      email: 'ypolanco@hotmail.com',
    },
  ]

  return (
    <CustomModal
      title={<CustomTitle level={4}>Seleccionar Socio</CustomTitle>}
      visible={visible}
      width={width}
      onCancel={() => hideModal()}
      onOk={() => hideModal()}
    >
      <CustomRow gutter={[16, 8]}>
        <CustomCol span={10} offset={14}>
          <CustomSearch size={'large'} />
        </CustomCol>
        <CustomCol span={24}>
          <CustomTable columns={columns} dataSource={data} bordered />
        </CustomCol>
      </CustomRow>
    </CustomModal>
  )
}
export default SelectPartnerModal
