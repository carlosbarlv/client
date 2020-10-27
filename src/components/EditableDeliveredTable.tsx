import React, { useEffect } from 'react'
import { CustomInputNumber, CustomTable, CustomTitle } from '.'
import { ColumnType } from 'antd/lib/table'
import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '../reducers'
import { getDenominations, setGeneralStoreData } from '../actions/general'
import { Denominations } from '../reducers/general'

type DeliveredPropsType = {
  getTotalDelivered: (monto: number) => void
  doRefresh: boolean
}

const EditableDeliveredTable = (): React.ReactElement => {
  const dispatch = useDispatch()
  const { denominations, generalStore } = useSelector(
    (state: StoreState) => state.general
  )

  useEffect(() => {
    dispatch(getDenominations())
  }, [dispatch])

  useEffect(() => {
    generalStore.denominationsStore.delivered = denominations.map(
      (value: Denominations) => ({ ...value })
    )
  }, [dispatch, denominations, generalStore])

  const deliveredTitle = () => <CustomTitle level={3}>Entregado</CustomTitle>

  const handleOnChange = (
    value: string | number | undefined,
    record: Denominations,
    type: 'amount' | 'quantity'
  ) => {
    const recordIndex = (generalStore.denominationsStore.delivered as Array<
      Denominations
    >)
      .map((denomination: Denominations) => denomination.DENOMINACION)
      .indexOf(record.DENOMINACION)
    if (type === 'quantity')
      generalStore.denominationsStore.delivered[
        recordIndex
      ].CANTIDAD_DIGITADA = value as number
    if (type === 'quantity' && record.TIPO === 'MON')
      generalStore.denominationsStore.delivered[recordIndex].MONTO =
        (value as number) * record.CANTIDAD
    if (type === 'amount' && record.TIPO === 'DOC')
      generalStore.denominationsStore.delivered[
        recordIndex
      ].MONTO = value as number
    dispatch(setGeneralStoreData(generalStore))
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
      dataIndex: 'CANTIDAD_DIGITADA',
      render: (value: number, record: Denominations) => (
        <CustomInputNumber
          max={record.TIPO !== 'MON' ? 1 : Infinity}
          value={record.CANTIDAD_DIGITADA || 0}
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
          value={value || 0}
        />
      ),
    },
  ]

  return (
    <>
      <CustomTable
        bordered
        columns={columnas}
        dataSource={generalStore.denominationsStore.delivered}
        pagination={false}
        rowKey={(record: Denominations) => record.DENOMINACION}
        title={deliveredTitle}
      />
    </>
  )
}
export default EditableDeliveredTable
