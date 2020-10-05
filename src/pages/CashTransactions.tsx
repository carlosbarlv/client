import React from 'react'
import {
  CustomButton,
  CustomCol,
  CustomInput,
  CustomLayout,
  CustomRow,
  CustomTable,
  CustomText,
  CustomTitle,
} from '../components'
import { ColumnType } from 'antd/lib/table'

type CatCatchmentsTable = {
  key: string
  producto: string
  idCuenta: string
}

type PlacementsTable = {
  key: string
  producto: string
  idCuenta: string
}

const CashTransactions = (): React.ReactElement => {
  const columnsCatchments: ColumnType<CatCatchmentsTable>[] = [
    {
      title: 'Producto',
      dataIndex: 'producto',
    },
    {
      title: 'ID Cuenta',
      dataIndex: 'idCuenta',
    },
  ]

  const dataCatchments: CatCatchmentsTable[] = [
    {
      key: '1',
      producto: 'Aportaciones',
      idCuenta: '001-0023443',
    },
    {
      key: '2',
      producto: 'Cuenta Ahorros',
      idCuenta: '002-0067233',
    },
    {
      key: '3',
      producto: 'Orden de pago',
      idCuenta: '003-0031441',
    },
  ]

  const columnsPlacement: ColumnType<PlacementsTable>[] = [
    {
      title: 'Producto',
      dataIndex: 'producto',
    },
    {
      title: 'ID Cuenta',
      dataIndex: 'idCuenta',
    },
  ]

  const dataPlacements: PlacementsTable[] = [
    {
      key: '1',
      producto: 'Préstamo Corriente',
      idCuenta: '0024991',
    },
    {
      key: '2',
      producto: '',
      idCuenta: '',
    },
    {
      key: '3',
      producto: '',
      idCuenta: '',
    },
  ]

  const date = new Date()
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
      <CustomRow gutter={[32, 16]}>
        <CustomCol span={6}>
          <CustomTitle type="secondary" level={4}>
            Identificación del Socio
          </CustomTitle>
          <CustomInput placeholder="047-0091273-1" />
        </CustomCol>
        <CustomCol span={12}>
          <CustomTitle type="secondary" level={4}>
            Nombre
          </CustomTitle>
          <CustomInput placeholder="Alejandro Genao" />
        </CustomCol>
        <CustomCol span={6}>
          <CustomTitle type="secondary" level={4}>
            Transacciones de Caja
          </CustomTitle>
          <CustomText type="secondary" strong>
            {`${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${
              date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth
            }/${date.getFullYear()} 
              ${
                date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
              }:${
              date.getMinutes() < 10 ? '0' + date.getMinutes : date.getMinutes()
            } ${date.getHours() - 12 > 0 ? 'pm' : 'am'}`}
          </CustomText>
        </CustomCol>
      </CustomRow>

      <CustomRow gutter={[32, 0]} align="top">
        <CustomCol span={12}>
          <CustomTable
            title={() => (
              <CustomTitle type="secondary" level={3}>
                Captaciones
              </CustomTitle>
            )}
            columns={columnsCatchments}
            dataSource={dataCatchments}
            expandable={{
              expandedRowRender: () => (
                <CustomButton type="primary">Depósito</CustomButton>
              ),
            }}
            pagination={false}
            bordered
          />
        </CustomCol>
        <CustomCol span={12}>
          <CustomTable
            title={() => (
              <CustomTitle type="secondary" level={3}>
                Colocaciones
              </CustomTitle>
            )}
            columns={columnsPlacement}
            dataSource={dataPlacements}
            expandable={{
              expandedRowRender: () => (
                <CustomButton type="primary">Depósito</CustomButton>
              ),
            }}
            pagination={false}
            bordered
          />
        </CustomCol>
      </CustomRow>
    </CustomLayout>
  )
}

export default CashTransactions