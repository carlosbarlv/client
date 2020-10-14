import React, { ReactText, useState } from 'react'
import {
  CustomInputNumber,
  CustomTable,
  CustomTitle,
} from '.'
import { ColumnType } from 'antd/lib/table'

type DeliveredTable = {
    key: string
    moneda:  React.ReactElement | string
    cant: string 
    monto: string | undefined | ReactText | number
}

const dataDelivered: DeliveredTable[] = [
    {
      key: '0',
      moneda: '10',
      cant: '0',
      monto: '0'
    },
    {
      key: '1',
      moneda: '5',
      cant: '0',
      monto: '0'

    },
]

const EditableDeliveredTable = (): React.ReactElement => {
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

    
  const columsDelivered: ColumnType<DeliveredTable>[] = [
    {
      title: 'Moneda',
      dataIndex: 'moneda',
      render: (text) => {
        return `RD$${text}`
      },
    },
    {
      title: 'Cant',
      dataIndex: 'cant',
      render: (text, record ) =>  {
        return (
          <CustomInputNumber 
            value={text}
            onChange={e => handleChange('cant' ,e, parseInt(record.key))}
          />
        )
      }
    },
    {
      title: 'Monto',
      dataIndex: 'monto',
    },
  ]
  
  const deliveredTitle = () => <CustomTitle level={3}>Entregado</CustomTitle>

  return (
    <>
      <CustomTable 
        title={deliveredTitle}
        columns={columsDelivered} 
        dataSource={data} 
        pagination={false} 
        bordered 
      />
    </>
  )
}
export default EditableDeliveredTable