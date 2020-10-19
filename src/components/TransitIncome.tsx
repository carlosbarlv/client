import React, { ReactText, useState } from 'react'

import {
  CustomButton,
  CustomCol,
  CustomInputNumber,
  CustomTable,
  Heading4,
} from '.'
import { ColumnType } from 'antd/lib/table'
import CustomRow from './CustomRow'
import CustomSpace from './CustomSpace'
import IncomeDistributionModal from './IncomeDistributionModal'

type TransitIncomeTable = {
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
    operacion: 'Pago a Cuotas',
    moneda: 'RD$',
    monto: '22,000.00',
  },
  {
    key: '1',
    emisor: 'Caja',
    concepto: 'Aportacionese',
    idCuenta: '001-0023443',
    operacion: 'Deposito',
    moneda: 'RD$',
    monto: '1,000.00',
  },
  {
    key: '2',
    emisor: '',
    concepto: '',
    idCuenta: '',
    operacion: '',
    moneda: '',
    monto: '',
  },
]

const TransitIncome = (): React.ReactElement => {

  const [data, setData] = useState(dataIncome)

  const [ incomeDistributionIsVisible, setIncomeDistributionIsVisible, ] = useState(false)
  const showIncomeDistributionIsVisible = () => {
    setIncomeDistributionIsVisible(!incomeDistributionIsVisible)
  }

  const handleChange = (selectedRowKeys: ReactText[], selectedRows: TransitIncomeTable[]) => setData(selectedRows)

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
          pagination={false}
          footer={() => 
            <CustomRow>
                <CustomSpace align={'end'} >
                    <CustomSpace>
                      <CustomInputNumber placeholder={'0.00'} disabled />
                      <CustomButton 
                        style={{backgroundColor: '#2DC8F7', color: 'white'}}
                        onClick={showIncomeDistributionIsVisible}
                      >Aplicar</CustomButton>
                    </CustomSpace>
                </CustomSpace>
            </CustomRow>
          }
          bordered
        />
      </CustomCol>
      <CustomCol span={6}>
        <IncomeDistributionModal 
          visible={incomeDistributionIsVisible} 
          width={'80%'}
          hideModal={showIncomeDistributionIsVisible}
        />
      </CustomCol>
    </>
  )
}

export default TransitIncome
