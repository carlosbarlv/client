import React, { ReactText, useState } from 'react'
import {
  CustomInput,
  CustomTable,
  CustomTitle,
} from '../components'
import { ColumnType } from 'antd/lib/table'
// import CustomInputNumber from '../components/CustomInputNumber'
import CustomSelect from '../components/CustomSelect'
import CustomOption from '../components/CustomOption'


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
    moneda: '100',
    cant: '5',
    monto: '500.00',
    referencia: 'grgrt',
    noReferencia: ''
  },
  {
    key: '1',
    moneda: '100',
    cant: '1',
    monto: '15,000.00',
    referencia: 'rergtr',
    noReferencia: '468484-84'
  },
  {
    key: '2',
    moneda: '200',
    cant: '1',
    monto: '',
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

    if(name === 'cant' || name === 'moneda'){
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
      render: (text, record) => {
        return (
          <CustomSelect placeholder="Moneda" onChange={e => handleChange('moneda', e, parseInt(record.key))} >
            <CustomOption value="100">RD$100</CustomOption>
            <CustomOption value="200">RD$200</CustomOption>
          </CustomSelect>
        )
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