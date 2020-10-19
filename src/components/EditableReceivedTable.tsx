import React, { ReactText, useState } from 'react'
import {
  CustomInput,
  CustomTable,
  CustomTitle,
} from '../components'
import { ColumnType } from 'antd/lib/table'
import CustomInputNumber from './CustomInputNumber'
import { Denominations } from '../reducers/general'

type ReceivedTable = {
  key: string
  moneda: React.ReactElement | string
  cant: string
  monto: string | undefined | ReactText | number
  referencia: string
  noReferencia: string
}

type PropaType = {
  denominations: Denominations[]
}

const dataReceived: ReceivedTable[] = [
  {
    key: '0',
    moneda: 'Cheque',
    cant: '0',
    monto: '0',
    referencia: 'grgrt',
    noReferencia: ''
  },
  {
    key: '1',
    moneda: '100',
    cant: '0',
    monto: '0',

    referencia: 'rergtr',
    noReferencia: '468484-84'
  },
  {
    key: '2',
    moneda: '200',
    cant: '0',
    monto: '0',

    referencia: '545555',
    noReferencia: '456484-415'
  },
]

const EditableReceivedTable = ({denominations}: PropaType): React.ReactElement => {
  const [data, setData] = useState(dataReceived)
  
  const handleChange = (name: string ,value: string | ReactText | undefined, index: number) => {
    const newData = [...data]
    newData[index] = {...newData[index], [name]: value }
    setData(newData)

    if(newData[index].moneda !== 'Cheque'){
      const monto = parseInt(newData[index].moneda.toString()) * parseInt(newData[index].cant)
      newData[index] = {...newData[index], [name]: value, monto }
      setData(newData)
    }
  }

  const columsReceived: ColumnType<ReceivedTable>[] = [
    {
      title: 'Moneda',
      dataIndex: 'moneda',
      render: (text) => {
        return text !== 'Cheque' ? `RD$${text}` : text
      },
    },
    {
      title: 'Cant',
      dataIndex: 'cant',
      render: (text, record ) =>  {
        return (
          <CustomInputNumber
            value={text}
            onChange={e => handleChange('cant' ,e , parseInt(record.key))}
          />
        )
      }
    },
    {
      title: 'Monto',
      dataIndex: 'monto',
      render: (text, record) => {
        if(record.moneda === 'Cheque'){
          return (
            <CustomInputNumber
            value={text}
            onChange={e => handleChange('monto' ,e , parseInt(record.key))}
          />
          )
        }
        return text
      }
    },
    {
      title: 'Referencia',
      dataIndex: 'referencia',
      render: (text, record) => {
        return (
          <CustomInput 
            value={text}
            onChange={e => handleChange('referencia' ,e.target.value, parseInt(record.key))}
          />
        )
      },
    },
    {
      title: 'No. Referencia',
      dataIndex: 'noReferencia',
      render: (text, record) => {
        return (
          <CustomInput 
            value={text}
            onChange={e => handleChange('noReferencia' ,e.target.value, parseInt(record.key))}
          />
        )
      }
    },
  ]

  const receivedTitle = () => <CustomTitle level={3}>Recibido</CustomTitle>

  return (
    <>
      <CustomTable 
        title={receivedTitle}
        columns={columsReceived} 
        dataSource={data} 
        pagination={false} 
        bordered 
      />
    </>
  )
}
export default EditableReceivedTable