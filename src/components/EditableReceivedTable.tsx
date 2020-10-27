import React, { useEffect } from 'react'
import { CustomInput, CustomTable, CustomTitle } from '../components'
import { ColumnType } from 'antd/lib/table'
import CustomInputNumber from './CustomInputNumber'
import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '../reducers'
import { getDenominations, setGeneralStoreData } from '../actions/general'
import { Denominations } from '../reducers/general'

const EditableReceivedTable = (): React.ReactElement => {
  const dispatch = useDispatch()
  const { denominations, generalStore } = useSelector(
    (state: StoreState) => state.general
  )
  useEffect(() => {
    dispatch(getDenominations())
  }, [dispatch])

  useEffect(() => {
    generalStore.denominationsStore.received = denominations.map(
      (value: Denominations) => ({ ...value })
    )
  }, [dispatch, denominations, generalStore])

  const handleOnChange = (
    value: string | number | undefined,
    record: Denominations,
    type: 'amount' | 'quantity' | 'reference' | 'noReference'
  ) => {
    const recordIndex = (generalStore.denominationsStore.received as Array<
      Denominations
    >)
      .map((value) => value.DENOMINACION)
      .indexOf(record.DENOMINACION)
    switch (type) {
      case 'quantity':
        generalStore.denominationsStore.received[
          recordIndex
        ].CANTIDAD_DIGITADA = value as number
        break
      case 'amount':
        generalStore.denominationsStore.received[
          recordIndex
        ].MONTO = value as number
        break
      case 'reference':
        generalStore.denominationsStore.received[
          recordIndex
        ].REFERENCIA = value as string
        break
      case 'noReference':
        generalStore.denominationsStore.received[
          recordIndex
        ].NUMERO_REFERENCIA = value as string
        break
    }
    if (type === 'quantity' && record.TIPO === 'MON') {
      generalStore.denominationsStore.received[recordIndex].MONTO =
        (value as number) * (record.DENOMINACION as number)
    }
    dispatch(setGeneralStoreData(generalStore))
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
      align: 'right',
      render: (value: number, record: Denominations) => (
        <CustomInputNumber
          disabled={
            record.CANTIDAD_DIGITADA === 0 ||
            record.CANTIDAD_DIGITADA === undefined
          }
          onChange={(inputValue: string | number | undefined) =>
            handleOnChange(inputValue, record, 'amount')
          }
          min={0}
          readOnly={record.TIPO === 'MON'}
          value={value || 0}
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
      },
    },
  ]
  const receivedTitle = () => <CustomTitle level={3}>Recibido</CustomTitle>

  return (
    <>
      <CustomTable
        bordered
        columns={columsReceived}
        dataSource={generalStore.denominationsStore.received}
        pagination={false}
        rowKey={(record: Denominations) => record.DENOMINACION}
        title={receivedTitle}
      />
    </>
  )
}
export default EditableReceivedTable
