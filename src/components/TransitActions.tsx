import React from 'react'
import {
  CustomButton,
  CustomCheckBox,
  CustomCol,
  CustomInputNumber,
  CustomTable,
  CustomTitle,
} from '.'
import { ColumnType } from 'antd/lib/table'
import CustomRow from './CustomRow'
import CustomSpace from './CustomSpace'

type TransitIncomeTable = {
  key: string
  emisor: string
  concepto: string
  idCuenta: string
  operacion: string
  moneda: string
  monto: string
}

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

const TransitActions = (): React.ReactElement => {
  const columsIncome: ColumnType<TransitIncomeTable>[] = [
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
      title: <CustomCheckBox />,
      dataIndex: 'checkbox',
      render: () => {
        return <CustomCheckBox />
      },
    },
  ]

  const dataIncome: TransitIncomeTable[] = [
    {
      key: '1',
      emisor: 'Legal',
      concepto: 'Prestamo Corriente',
      idCuenta: '0024991',
      operacion: 'Pago a Cuotas',
      moneda: 'RD$',
      monto: '22,000.00',
    },
    {
      key: '2',
      emisor: 'Caja',
      concepto: 'Aportacionese',
      idCuenta: '001-0023443',
      operacion: 'Deposito',
      moneda: 'RD$',
      monto: '1,000.00',
    },
    {
      key: '3',
      emisor: '',
      concepto: '',
      idCuenta: '',
      operacion: '',
      moneda: '',
      monto: '',
    },
  ]

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
      <CustomCol span={18}>
        <CustomTable
          title={() => (
            <CustomSpace align="center" style={{backgroundColor: "#2DC8F7", width: "100%", padding: 10 }}>
              <CustomTitle  level={4}>
                Ingresos en Tránsito
              </CustomTitle>
            </CustomSpace>
          )}
          columns={columsIncome}
          dataSource={dataIncome}
          pagination={false}
          footer={() => 
            <CustomRow>
                <CustomSpace align="end" >
                    <CustomSpace>
                      <CustomInputNumber placeholder="0.00" disabled />
                      <CustomButton style={{backgroundColor: '#2DC8F7', color: 'white'}}>Aplicar</CustomButton>
                    </CustomSpace>
                </CustomSpace>
            </CustomRow>
          }
          bordered
        />
      </CustomCol>
      <CustomCol span={6}>
        
      </CustomCol>
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

export default TransitActions
