import React, { ReactText, useEffect, useState } from 'react'
import {
  CustomInput,
  CustomTable,
  CustomTitle,
} from '../components'
import { ColumnType } from 'antd/lib/table'
import CustomInputNumber from './CustomInputNumber'
import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '../reducers'
import { getDenominations } from '../actions/general'

type ReceivedTable = {
  key: string
  moneda:  string
  cant: string
  monto: string | undefined | ReactText | number
  referencia: string
  noReferencia: string
}

const EditableReceivedTable = (): React.ReactElement => {
  const dispatch = useDispatch()
  const denominations  = useSelector((state: StoreState) => state.general.denominations)
  useEffect(() => {
    dispatch(getDenominations())
  }, [dispatch])
  const dataReceived = denominations.map((obj, i) => {
    return({
      key: `${i}`,
      moneda: obj.DENOMINACION,
      cant: '0',
      monto: '0',
      referencia: '',
      noReferencia: ''
    })
  })
  const [data, setData] = useState(dataReceived)
  
  const handleChange = (name: string ,value: string | ReactText | undefined, index: number) => {
    const newData = [...data]
    newData[index] = {...newData[index], [name]: value }
    setData(newData)
    if(parseInt(newData[index].moneda) > 0){
      const monto = parseInt(newData[index].moneda.toString()) * parseInt(newData[index].cant)
      newData[index] = {...newData[index], [name]: value, monto: `${monto}` }
      setData(newData)
    }
  }

  const columsReceived: ColumnType<ReceivedTable>[] = [
    {
      title: 'Moneda',
      dataIndex: 'moneda',
      render: (text) => {
        return parseInt(text) > 0 ? `RD$${text}` : text
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
        if(parseInt(record.moneda) > 0){
          return text
        }
        return (
          <CustomInputNumber
          value={text}
          onChange={e => handleChange('monto' ,e , parseInt(record.key))}
        />
        )
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
        bordered 
      />
    </>
  )
}
export default EditableReceivedTable