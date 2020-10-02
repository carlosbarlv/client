import React, { useState } from 'react'
import {
  CustomButton,
  CustomCol,
  CustomLayout,
  CustomRow,
  CustomSearch,
  CustomTable,
  CustomTitle,
} from '../components'
import { Square } from '../components/CustomForms'
import { PlusOutlined, RedoOutlined } from '@ant-design/icons'
import { ColumnType } from 'antd/lib/table'
import SelectPartnerModal from '../components/SelectPartnerModal'

type TransistSessionsTable = {
  aplicar: React.ReactNode
  concepto: string
  emisor: string
  fechaHora: string
  idSession: number
  key: string
  moneda: string
  monto: string
  titular: string
}

const TransistSessions = (): React.ReactElement => {
  const [showSelectPartnersModal, setShowSelectPartnersModal] = useState(false)

  const columns: ColumnType<TransistSessionsTable>[] = [
    {
      title: 'Emisor',
      dataIndex: 'emisor',
    },
    {
      title: 'Fecha-Hora',
      dataIndex: 'fechaHora',
    },
    {
      title: 'Concepto',
      dataIndex: 'concepto',
    },
    {
      title: 'ID session',
      dataIndex: 'idSession',
    },
    {
      title: 'Titular',
      dataIndex: 'titular',
    },
    {
      title: 'Moneda',
      dataIndex: 'moneda',
    },
    {
      title: 'Monto',
      dataIndex: 'monto',
    },
    {
      title: (
        <CustomButton
          type="ghost"
          style={{ marginLeft: '20px', border: 'none' }}
          shape={'circle'}
          icon={<RedoOutlined style={{ fontSize: '25px' }} rotate={270} />}
        />
      ),
      dataIndex: 'aplicar',
    },
  ]

  const data: TransistSessionsTable[] = [
    {
      key: '1',
      emisor: 'Servicio al Cliente',
      fechaHora: '24/08/2020 09:30 am',
      concepto: 'Nomina Empleado Vegamovil',
      idSession: 10222,
      titular: 'Vegamovil',
      moneda: 'RD$',
      monto: '1,250,000.00',
      aplicar: (
        <CustomButton style={{ backgroundColor: '#41D9FA', color: 'white' }}>
          Aplicar
        </CustomButton>
      ),
    },
    {
      key: '2',
      emisor: 'Legal',
      fechaHora: '24/08/2020 09:30 am',
      concepto: 'Pago Préstamo Corriente',
      idSession: 0o224333,
      titular: 'Jose Rodriguez',
      moneda: 'RD$',
      monto: '20,370.00',
      aplicar: (
        <CustomButton style={{ backgroundColor: '#41D9FA', color: 'white' }}>
          Aplicar
        </CustomButton>
      ),
    },
    {
      key: '3',
      emisor: 'Negocios',
      fechaHora: '24/08/2020 09:30 am',
      concepto: 'CREDIUATO',
      idSession: 102438,
      titular: 'Vegamovil',
      moneda: 'RD$',
      monto: '4,500,000.00',
      aplicar: (
        <CustomButton style={{ backgroundColor: '#41D9FA', color: 'white' }}>
          Aplicar
        </CustomButton>
      ),
    },
  ]

  const handleOnClickAddSession = (): void => {
    setShowSelectPartnersModal(!showSelectPartnersModal)
  }

  return (
    <CustomLayout
      style={{
        background: 'white',
        padding: '35px 20px',
        boxShadow:
          '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
        marginLeft: 20,
        marginRight: 20,
      }}
    >
      <CustomRow gutter={[16, 8]} justify="start">
        <CustomCol span={12}>
          <CustomTitle level={3}>Sesiones en Tránsito</CustomTitle>
        </CustomCol>
        <CustomCol span={10}>
          <CustomSearch size="large" />
        </CustomCol>
        <CustomCol span={2}>
          <CustomButton
            type="primary"
            shape={'circle'}
            size="large"
            icon={<PlusOutlined />}
            onClick={handleOnClickAddSession}
          />
        </CustomCol>
        <CustomCol span={23}>
          <SelectPartnerModal
            visible={showSelectPartnersModal}
            width={800}
            hideModal={handleOnClickAddSession}
          />
          <CustomTable columns={columns} dataSource={data} bordered />
        </CustomCol>
      </CustomRow>
      <CustomRow justify={'start'}>
        <Square />
        <span>Operacion rechazada</span>
      </CustomRow>
    </CustomLayout>
  )
}
export default TransistSessions
