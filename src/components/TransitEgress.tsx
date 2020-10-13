import React from 'react'
import {
  CustomButton,
  CustomCol,
  CustomTable,
  CustomTitle,
} from '.'
import { ColumnType } from 'antd/lib/table'
import CustomSpace from './CustomSpace'

type TransitEgressTable = {
  key: string
  emisor: string
  concepto: string
  idCuenta: string
  operacion: string
  beneficiario: string
  moneda: string
  monto: string
}

const TransitEgress = (): React.ReactElement => {

  const columsEgress: ColumnType<TransitEgressTable>[] = [
    {
      title: 'Emisor',
      dataIndex: 'emisor',
    },
    {
      title: 'Concepto',
      dataIndex: 'concepto',
    },
    {
      title: 'ID Cuenta',
      dataIndex: 'idCuenta',
    },
    {
      title: 'Operacion',
      dataIndex: 'operacion',
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
      title: '',
      dataIndex: 'checkbox',
      render: () => {
        return (
          <CustomButton style={{ backgroundColor: '#F24B4B', color: 'white' }}>
            Aplicar
          </CustomButton>
        )
      },
    },
  ]

  const dataEgress: TransitEgressTable[] = [
    {
      key: '1',
      emisor: 'Caja',
      concepto: 'Orden Pago',
      idCuenta: '033-00031441',
      operacion: 'Orden Pago',
      beneficiario: 'Rodrigo Santoro',
      moneda: 'RD$',
      monto: '2,000.00',
    },
    {
      key: '2',
      emisor: 'Serv. Cliente',
      concepto: 'Orden Pago',
      idCuenta: '003-00678773',
      operacion: 'Orden Pago',
      beneficiario: 'Rodrigo Santoro',
      moneda: 'RD$',
      monto: '1,500.000',
    },
  ]

  return (
    <>
      <CustomCol span={6}></CustomCol>
        <CustomCol span={22} pull={2}>
            <CustomTable
            title={() => (
                <CustomSpace style={{backgroundColor: "#F24B4B", width: "100%", padding: 10 }}>
                <CustomTitle level={4}>
                    Egresos en Tránsito
                </CustomTitle>
                </CustomSpace>
            )}
            columns={columsEgress}
            dataSource={dataEgress}
            pagination={false}
            bordered
            />
      </CustomCol>
    </>
  )
}

export default TransitEgress

