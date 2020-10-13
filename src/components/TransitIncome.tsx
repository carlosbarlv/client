import React, { useState } from 'react'

import {
  CustomButton,
  CustomCheckBox,
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


const TransitIncome = (): React.ReactElement => {
    const [ incomeDistributionIsVisible, setIncomeDistributionIsVisible, ] = useState(true)
    const showIncomeDistributionIsVisible = () => {
        setIncomeDistributionIsVisible(!incomeDistributionIsVisible)
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

