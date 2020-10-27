import React, { useEffect } from 'react'
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
import { Denominations } from '../reducers/general'

type PropsType = {
  getTotalReceived: (monto: number) => void
  doRefresh: boolean
}

const EditableReceivedTable = ({getTotalReceived, doRefresh}: PropsType): React.ReactElement => {
  const dispatch = useDispatch()
  const denominations = useSelector((state: StoreState) => state.general.denominations).map(obj => ({...obj}) )
  const [denominationsStateReceived, setDenominationsStateReceived] = React.useState(
    denominations
  )

  useEffect(() => {
    denominations.map(elem => elem.CANTIDAD_DIGITADA = 0)
    setDenominationsStateReceived(denominations)
  }, [doRefresh])

  useEffect(() => {
    dispatch(getDenominations())
  }, [dispatch])
  
  const handleOnChange = (
    value: string | number | undefined,
    record: Denominations,
    type: 'amount' | 'quantity' | 'reference' | 'noReference'
  ) => {
    const newData = [...denominationsStateReceived]
    const recordIndex = newData.map((value) => value.DENOMINACION).indexOf(record.DENOMINACION)

    switch (type) {
      case 'quantity':
        newData[recordIndex].CANTIDAD_DIGITADA = value as number
        break;
      case 'amount':
        newData[recordIndex].MONTO = value as number
        break;
      case 'reference':
        newData[recordIndex].REFERENCIA = value as string
        break;
      case 'noReference':
        newData[recordIndex].NUMERO_REFERENCIA = value as string
        break;
    }
    if (type === 'quantity' && record.TIPO === 'MON') {
      newData[recordIndex].MONTO = (value as number) * (record.DENOMINACION as number)
    } 
    setDenominationsStateReceived(newData)
    getTotalReceived(
      denominationsStateReceived.reduce((a, b) => {
        return a + (b['MONTO'] || 0)
      }, 0)
    )
  }

  const columsReceived: ColumnType<Denominations>[] = [
    {
      title: 'Moneda',
      render: (value: Denominations) => (
        <span>
          {value.TIPO === 'MON'
            ? `${value.ID_MONEDA}$${value.DENOMINACION}`
            : value.DESCRIPCION}
        </span>
      ),
    },
    {
      title: 'Cantidad',
      dataIndex: 'CANTIDAD',
      render: (value: number, record: Denominations) => (
        <CustomInputNumber
          max={record.TIPO !== 'MON' ? 1 : Infinity}
          defaultValue={0}
          value={record.CANTIDAD_DIGITADA}
          onChange={(inputValue: number | string | undefined) =>
            handleOnChange(inputValue, record, 'quantity')
          }
        />
      ),
    },
    {
      title: 'Monto',

      dataIndex: 'MONTO',
      align: 'right',
      render: (value: number, record: Denominations) => (
        <CustomInputNumber
          onChange={(inputValue: string | number | undefined) =>
            handleOnChange(inputValue, record, 'amount')
          }
          readOnly={record.TIPO === 'MON'}
          value={value}
        />
      ),
    },
    {
      title: 'Referencia',
      dataIndex: 'REFERENCIA',
      render: (value: string, record: Denominations) => {
        return (
          <CustomInput 
            value={value}
            onChange={(e) =>
              handleOnChange(e.target.value, record, 'reference')
            }
          />
        )
      },
    },
    {
      title: 'No. Referencia',
      dataIndex: 'NUMERO_REFERENCIA',
      render: (value: string, record: Denominations) => {
        return (
          <CustomInput 
            value={value}
            onChange={(e) => 
              handleOnChange(e.target.value, record, 'noReference')
            }
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
        dataSource={denominationsStateReceived} 
        rowKey={(record: Denominations) => record.DENOMINACION}
        bordered 
      />
    </>
  )
}
export default EditableReceivedTable