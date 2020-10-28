import React, { useEffect } from 'react'
import { CustomCol, CustomModal, CustomRow, CustomTable, CustomTitle } from '.'
import { ColumnType } from 'antd/lib/table'
import { currentDate, numberFormat } from '../utils/general'
import CustomFormItem from './CustomFormItem'
import CustomInput from './CustomInput'
import CustomForm from './CustomForm'
import CustomInputNumber from './CustomInputNumber'
import CustomSpace from './CustomSpace'
import CustomCheckBox from './CustomCheckBox'
import EditableReceivedTable from './EditableReceivedTable'
import EditableDeliveredTable from './EditableDeliveredTable'
import { TransitIncomeTable } from './TransitIncome'
import { useDispatch, useSelector } from 'react-redux'
import { getDenominations, setGeneralStoreData } from '../actions/general'
import { StoreState } from '../reducers'
import { Denominations } from '../reducers/general'

type PropsType = {
  visible: boolean
  dataInfo: TransitIncomeTable[]
  totalAmount: number
  width?: string | number
  hideModal: () => void
}
type MainInfoTable = {
  emisor: string
  concepto: string
  idCuenta: string
  operacion: string
  moneda: string
  monto: string
}
type DetailsDocTable = {
  key: string
  detalleDoc: React.ReactElement
}

const IncomeDistributionModal = ({
  visible,
  width,
  dataInfo,
  totalAmount,
  hideModal,
}: PropsType): React.ReactElement => {
  const { generalStore } = useSelector((state: StoreState) => state.general)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDenominations())
  }, [dispatch])

  const columnsInfo: ColumnType<MainInfoTable>[] = [
    {
      title: 'Emisor',
      dataIndex: 'emisor',
    },
    {
      title: 'Concepto',
      dataIndex: 'concepto',
    },
    {
      title: 'ID Cuenta',
      dataIndex: 'idCuenta',
    },
    {
      title: 'Operación',
      dataIndex: 'operacion',
    },
    {
      title: 'Moneda',
      dataIndex: 'moneda',
    },
    {
      title: 'Monto',
      dataIndex: 'monto',
    },
  ]
  const columsDetail: ColumnType<DetailsDocTable>[] = [
    {
      title: <CustomTitle level={4}>Detalle de Documento</CustomTitle>,
      dataIndex: 'detalleDoc',
    },
  ]
  const dataDetail: DetailsDocTable[] = [
    {
      key: '0',
      detalleDoc: (
        <CustomForm labelCol={{ sm: 7 }}>
          <CustomFormItem label={'Fecha'}>
            <CustomInput placeholder={'10/08/2020'} />
          </CustomFormItem>
          <CustomFormItem label={'Emisor'}>
            <CustomInput size={'large'} placeholder={'Yusepiz Rosario'} />
          </CustomFormItem>
          <CustomFormItem label={'Beneficiario'}>
            <CustomInput size={'large'} placeholder={'Alejandro Genao'} />
          </CustomFormItem>
        </CustomForm>
      ),
    },
  ]

  const received = () =>
    numberFormat(
      (generalStore.denominationsStore.received as Array<Denominations>).reduce(
        (previous: number, current: Denominations) =>
          previous + (current.MONTO || 0),
        0
      )
    )

  const delivered = () =>
    numberFormat(
      (generalStore.denominationsStore.delivered as Array<
        Denominations
      >).reduce(
        (preview: number, current: Denominations) =>
          preview + (current.MONTO || 0),
        0
      )
    )

  const pending = () =>
    (
      (generalStore.denominationsStore.received as Array<Denominations>).reduce(
        (previous: number, current: Denominations) =>
          previous + (current.MONTO || 0),
        0
      ) -
        (generalStore.denominationsStore.delivered as Array<
          Denominations
        >).reduce(
          (previous: number, current: Denominations) =>
            previous + (current.MONTO || 0),
          0
        ) -
        totalAmount
    )

  const documentDetailsIsVisible = (): boolean => {
    return (generalStore.denominationsStore.received as Array<Denominations>)
    .some(elem => elem.TIPO !== 'MON' && elem.CANTIDAD_DIGITADA )
  }

  const handleOnCancel = () => {
    dispatch(
      setGeneralStoreData({
        denominationsStore: {
          received: (generalStore.denominationsStore.received as Array<
            Denominations
          >).map((value: Denominations) => {
            value.CANTIDAD_DIGITADA = 0
            value.MONTO = 0
            return value
          }),
          delivered: (generalStore.denominationsStore.delivered as Array<
            Denominations
          >).map((value: Denominations) => {
            value.CANTIDAD_DIGITADA = 0
            value.MONTO = 0
            return value
          }),
        },
      })
    )
    hideModal()
  }

  return (
    <CustomModal
      centered
      closable={true}
      title={<CustomTitle level={3}>Distribución Ingresos</CustomTitle>}
      visible={visible}
      width={width}
      onCancel={handleOnCancel}
      onOk={hideModal}
      okButtonProps={{disabled: pending() !== 0}}
    >
      <CustomRow gutter={[16, 32]} align={'top'}>
        <CustomCol xs={24} md={20}>
          <CustomTable
            bordered
            columns={columnsInfo}
            dataSource={dataInfo}
            pagination={false}
          />
        </CustomCol>
        <CustomCol xs={24} md={4}>
          {currentDate}
        </CustomCol>
        <CustomCol xs={24} lg={16}>
          <EditableReceivedTable />
        </CustomCol>
        <CustomCol xs={24} lg={8}>
          <EditableDeliveredTable />
        </CustomCol>

        <CustomCol span={8} pull={4}>
          {
            documentDetailsIsVisible() &&
            <CustomTable
              bordered
              columns={columsDetail}
              dataSource={dataDetail}
              pagination={false}
            />
          }
        </CustomCol>
        <CustomCol xs={24} md={12}>
          <CustomForm labelCol={{ sm: 8 }}>
            <CustomFormItem label={'Total Operaciones'}>
              <CustomSpace>
                <CustomInputNumber disabled placeholder={'RD$'} />
                <CustomInput value={numberFormat(totalAmount)} readOnly />
              </CustomSpace>
            </CustomFormItem>
            <CustomFormItem label={'Recibido'}>
              <CustomSpace>
                <CustomInputNumber placeholder={'RD$'} disabled />
                <CustomInput value={received()} readOnly />
              </CustomSpace>
            </CustomFormItem>
            <CustomFormItem label={'Entregado'}>
              <CustomSpace>
                <CustomInputNumber placeholder={'RD$'} disabled />
                <CustomInput value={delivered()} readOnly />
              </CustomSpace>
            </CustomFormItem>
            <CustomFormItem label={'Pendiente'} hasFeedback validateStatus={pending() === 0 ? 'success': 'error'} >
              <CustomSpace>
                <CustomInputNumber  placeholder={'RD$'} disabled />
                <CustomInput value={numberFormat(pending())} readOnly />
              </CustomSpace>
            </CustomFormItem>
          </CustomForm>
        </CustomCol>
        <CustomCol span={6} pull={18}>
          <CustomCheckBox>Imprimir Recibo Unificado</CustomCheckBox>
        </CustomCol>
      </CustomRow>
    </CustomModal>
  )
}

export default IncomeDistributionModal
