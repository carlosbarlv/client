import React, { useEffect } from 'react'
import { CustomInputNumber, CustomTable, CustomTitle } from '.'
import { ColumnType } from 'antd/lib/table'
import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '../reducers'
import { getDenominations } from '../actions/general'
import { Denominations } from '../reducers/general'

type DeliveredPropsType = {
  getTotalDelivered: (monto: number) => void
  doRefresh: boolean
}

const EditableDeliveredTable = ({
  getTotalDelivered,
  doRefresh
}: DeliveredPropsType): React.ReactElement => {
  const dispatch = useDispatch()
  const denominations = useSelector((state: StoreState) => state.general.denominations).map(obj => ({...obj}) )
  const [denominationsState, setDenominationsState] = React.useState(
    denominations
  )

  useEffect(() => {
    denominations.map(elem => elem.CANTIDAD_DIGITADA = 0)
    setDenominationsState(denominations)
  }, [doRefresh])
  
  useEffect(() => {
    dispatch(getDenominations())
  }, [dispatch])

  const deliveredTitle = () => <CustomTitle level={3}>Entregado</CustomTitle>

  const handleOnChange = (
    value: string | number | undefined,
    record: Denominations,
    type: 'amount' | 'quantity'
  ) => {
    const newData = [...denominationsState]
    const recordIndex = newData.map((value) => value.DENOMINACION).indexOf(record.DENOMINACION)

    if(type === 'quantity'){
      newData[recordIndex].CANTIDAD_DIGITADA = value as number
    }
    if (type === 'quantity' && record.TIPO === 'MON') {
      newData[recordIndex].MONTO = (value as number) * (record.DENOMINACION as number)
    } 
    if (type === 'amount') {
      newData[recordIndex].MONTO = value as number
    }
    setDenominationsState(newData)
    getTotalDelivered(
      denominationsState.reduce((a, b) => {
        return a + (b['MONTO'] || 0)
      }, 0)
    )
  }

  const columnas: ColumnType<Denominations>[] = [
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
  ]

  return (
    <>
      <CustomTable
        title={deliveredTitle}
        columns={columnas}
        dataSource={denominationsState}
        rowKey={(record: Denominations) => record.DENOMINACION}
        bordered
      />
    </>
  )
}
export default EditableDeliveredTable
