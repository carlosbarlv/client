import React, { ReactText, useState } from 'react'

import {
  CustomButton,
  CustomCol,
  CustomInput,
  CustomTable,
  Heading4,
} from '.'
import { ColumnType } from 'antd/lib/table'
import CustomRow from './CustomRow'
import CustomSpace from './CustomSpace'
import IncomeDistributionModal from './IncomeDistributionModal'
import { numberFormat, showNotification } from '../utils/general'

export type TransitIncomeTable = {
  key: string
  emisor: string
  concepto: string
  idCuenta: string
  operacion: string
  moneda: string
  monto: string
}
const dataIncome: TransitIncomeTable[] = [
  {
    key: '0',
    emisor: 'Legal',
    concepto: 'Prestamo Corriente',
    idCuenta: '0024991',
    operacion: 'Pago newAmount Cuotas',
    moneda: 'RD$',
    monto: numberFormat(1000),
  },
  {
    key: '1',
    emisor: 'Caja',
    concepto: 'Aportacionese',
    idCuenta: '001-0023443',
    operacion: 'Deposito',
    moneda: 'RD$',
    monto: numberFormat(1000),
  },
  {
    key: '2',
    emisor: '',
    concepto: '',
    idCuenta: '',
    operacion: '',
    moneda: '',
    monto: numberFormat(500),
  },
]

const TransitIncome = (): React.ReactElement => {
  const [data, setData] = useState(dataIncome)
  const [totalAmount, setTotalAmount] = useState(0)
  const [ incomeDistributionIsVisible, setIncomeDistributionIsVisible, ] = useState(false)
  const showIncomeDistributionIsVisible = () => {
    setIncomeDistributionIsVisible(!incomeDistributionIsVisible)
  }

  const handleChange = async(selectedRowKeys: ReactText[], selectedRows: TransitIncomeTable[]) => {
    let newAmount = 0
    selectedRows.forEach(elem => newAmount += parseFloat(elem.monto.replace(',', '')))
    setData(selectedRows)
    setTotalAmount(newAmount)
  }

  const handleAplicar = () => {
    totalAmount > 0 ? showIncomeDistributionIsVisible(): showNotification({
      title: 'Faltan Datos',
      description: 'Seleccionar al menos un ingreso!',
      type: 'warning'
    })
  }
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
  ]

  return (
    <>
      <CustomCol span={18}>
          <CustomSpace align="center" style={{backgroundColor: "#2DC8F7", width: "100%", padding: 10, }}>
              <Heading4 style={{color: 'white', fontWeight: 'bold'}} >
                Ingresos en Tránsito
              </Heading4>
          </CustomSpace>
        <CustomTable
          columns={columsIncome}
          dataSource={dataIncome}
          rowSelection={{
            type: 'checkbox',
            onChange: (selectedRowKeys, selectedRows) => handleChange(selectedRowKeys, selectedRows)
          }}
          scroll={{ y: 240 }}
          pagination={false}
          footer={() => 
            <CustomRow>
                  <CustomCol sm={24} md={10} lg={5}>
                    <CustomSpace>
                      <CustomInput value={numberFormat(totalAmount)}  readOnly />
                      <CustomButton 
                        style={{backgroundColor: '#2DC8F7', color: 'white'}}
                        onClick={handleAplicar}
                      >Aplicar</CustomButton>
                    </CustomSpace>
                  </CustomCol>
            </CustomRow>
          }
          bordered
        />
      </CustomCol>
      <CustomCol span={6}>
        <IncomeDistributionModal 
          visible={incomeDistributionIsVisible} 
          dataInfo={data}
          totalAmount={totalAmount}
          width={'80%'}
          hideModal={showIncomeDistributionIsVisible}
        />
      </CustomCol>
    </>
  )
}

export default TransitIncome
