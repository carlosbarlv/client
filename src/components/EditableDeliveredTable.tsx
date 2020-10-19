import React, { ReactText, useEffect, useState } from 'react'
import {
  CustomInputNumber,
  CustomTable,
  CustomTitle,
} from '.'
import { ColumnType } from 'antd/lib/table'
import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '../reducers'
import { getDenominations } from '../actions/general'

type DeliveredTable = {
    key: string
    moneda:  string
    cant: string 
    monto: string | undefined | ReactText | number
}

const EditableDeliveredTable = (): React.ReactElement => {
  const dispatch = useDispatch()
  const denominations  = useSelector((state: StoreState) => state.general.denominations)

  useEffect(() => {
    dispatch(getDenominations())
  }, [dispatch])

  const dataDelivered = denominations.map((obj, i) => {
    return({
      key: `${i}`,
      moneda: obj.DENOMINACION,
      cant: '0',
      monto: '0',
      referencia: '',
      noReferencia: ''
    })
  })

const EditableDeliveredTable = ({denominations}: PropsType): React.ReactElement => {
  const [data, setData] = useState(dataDelivered)

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

  const columsDelivered: ColumnType<DeliveredTable>[] = [
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
            onChange={e => handleChange('cant' ,e, parseInt(record.key))}
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
  ]
  
  const deliveredTitle = () => <CustomTitle level={3}>Entregado</CustomTitle>

  return (
    <>
      <CustomTable 
        title={deliveredTitle}
        columns={columsDelivered} 
        dataSource={data} 
        bordered 
      />
    </>
  )
}
export default EditableDeliveredTable