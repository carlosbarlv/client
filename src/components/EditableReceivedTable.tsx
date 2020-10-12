import React, { ReactText, useState } from 'react'
import {
  CustomInput,
  CustomTable,
  CustomTitle,
} from '../components'
import { ColumnType } from 'antd/lib/table'

type ReceivedTable = {
  key: string
  moneda: React.ReactElement | string
  cant: string
  monto: string | undefined | ReactText | number
  referencia: string
  noReferencia: string
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

const EditableReceivedTable = (): React.ReactElement => {
  const [isEditing, setIsEditing] = useState(false)
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

  const inputEditContent = (name: string ,  type: string, text: string, record: ReceivedTable) => {
    return (
      <>
      <CustomInput type={type}
        style={{display: `${isEditing ? 'block': 'none'}`}}
        value={text}
        min="0"
        onBlur={() => {
            setIsEditing(false)
        }}
        onChange={e => handleChange(name ,e.target.value, parseInt(record.key))}
       />
        <div style={{display: `${isEditing ? 'none': 'block'}`}} 
        onClick={() => {
          setIsEditing(true)
        }}>{text}</div>
      </>
    )
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
        return inputEditContent('cant', 'number', text, record)
      }
    },
    {
      title: 'Monto',
      dataIndex: 'monto',
      render: (text, record) => {
        if(record.moneda === 'Cheque'){
          return inputEditContent('monto', 'number', text, record)
        }else{
          return text
        }
      }
    },
    {
      title: 'Referencia',
      dataIndex: 'referencia',
      render: (text, record) => {
        return inputEditContent('referencia' , 'text', text, record)
      },
    },
    {
      title: 'No. Referencia',
      dataIndex: 'noReferencia',
      render: (text, record) => {
        return inputEditContent('noReferencia',  'text', text, record)
      }
    },
  ]

  return (
    <>
      <CustomTable 
        title={() => <CustomTitle level={3}>Recibido</CustomTitle>}
        columns={columsReceived} 
        dataSource={data} 
        pagination={false} 
        bordered 
      />
    </>
  )
}
export default EditableReceivedTable