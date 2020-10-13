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
  checked: boolean
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
    checked: false
  },
  {
    key: '1',
    emisor: 'Caja',
    concepto: 'Aportacionese',
    idCuenta: '001-0023443',
    operacion: 'Deposito',
    moneda: 'RD$',
    monto: '1,000.00',
    checked: false
  },
  {
    key: '2',
    emisor: '',
    concepto: '',
    idCuenta: '',
    operacion: '',
    moneda: '',
    monto: '',
    checked: false
  },
]

const TransitIncome = (): React.ReactElement => {

  const [data, setData] = useState(dataIncome)
  const [checkedAll, setCheckedAll] = useState(false)

  const [ incomeDistributionIsVisible, setIncomeDistributionIsVisible, ] = useState(false)
  const showIncomeDistributionIsVisible = () => {
    setIncomeDistributionIsVisible(!incomeDistributionIsVisible)
  }

  const handleChange = (index: number) => {
    const newData = [...data]
    newData[index].checked = !newData[index].checked
    const isCheckeedAll = newData.some(elem => elem.checked === false)
    setCheckedAll(!isCheckeedAll)
    setData(newData)
  }

  const checkAll = () => {
    const newData = data     
    const isCheckeedAllFirst = newData.some(elem => elem.checked === false)

    if(isCheckeedAllFirst){
      for (let i = 0; i < newData.length; i++) {
        newData[i].checked = true
      }
    }else{
      for (let i = 0; i < newData.length; i++) {
        newData[i].checked = !newData[i].checked
      }
    }
    const isCheckeedAllBefore = newData.some(elem => elem.checked === false)
    setCheckedAll(!isCheckeedAllBefore)
    setData(newData)
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
      title: <CustomCheckBox checked={checkedAll} onChange={() => checkAll()} />,
      dataIndex: 'checkbox',
      render: (text, record) => {
        return <CustomCheckBox checked={record.checked} onChange={() => handleChange( parseInt(record.key))} />
      },
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

