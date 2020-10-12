import React, { ReactText, useState } from 'react'
import {
  CustomInputNumber,
  CustomTable,
  CustomTitle,
} from '.'
import { ColumnType } from 'antd/lib/table'
// import CustomInputNumber from '../components/CustomInputNumber'
import CustomSelect from './CustomSelect'
import CustomOption from './CustomOption'
// import CustomInputNumber from './CustomInputNumber'


type DeliveredTable = {
    key: string
    moneda:  React.ReactElement | string
    cant: string 
    monto: string | undefined | ReactText | number
}

const dataDelivered: DeliveredTable[] = [
    {
      key: '0',
      moneda: 'RD$10',
      cant: '4',
      monto: '40'
    },
    {
      key: '1',
      moneda: 'RD$5',
      cant: '1',
      monto: '5'
    },
]


const EditableDeliveredTable = (): React.ReactElement => {
    const [isEditing, setIsEditing] = useState(false)
    const [data, setData] = useState(dataDelivered)

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

    const inputEditContent = (name: string , text: number, record: DeliveredTable) => {
        return (
          <>
          <CustomInputNumber 
            style={{display: `${isEditing ? 'block': 'none'}`}}
            value={text}
            onBlur={() => {
                setIsEditing(false)
            }}
            onChange={e => handleChange(name ,e, parseInt(record.key))}
           />
    
            <div style={{display: `${isEditing ? 'none': 'block'}`}} 
            onClick={() => {
              setIsEditing(true)
            }}>{text}</div>
          </>
        )
    }

  
  const columsDelivered: ColumnType<DeliveredTable>[] = [
    {
      title: 'Moneda',
      dataIndex: 'moneda',
      render: (text, record) => {
        return (
          <CustomSelect placeholder="Moneda" onChange={e => handleChange('moneda', e, parseInt(record.key))} >
            <CustomOption value="10">RD$10</CustomOption>
            <CustomOption value="5">RD$5</CustomOption>
          </CustomSelect>
        )
      },
    },
    {
      title: 'Cant',
      dataIndex: 'cant',
      render: (text, record ) =>  {
        return inputEditContent('cant', text, record)
      }
    },
    {
      title: 'Monto',
      dataIndex: 'monto',
    },
  ]

  return (
    <>
      <CustomTable 
        title={() => <CustomTitle level={3}>Recibido</CustomTitle>}
        columns={columsDelivered} 
        dataSource={data} 
        pagination={false} 
        bordered 
      />
    </>
  )
}
export default EditableDeliveredTable