import React, { useEffect, useState } from 'react'
import {
  CustomCol,
  CustomModal,
  CustomRow,
  CustomTable,
  CustomTitle,
} from '.'
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
import { useDispatch } from 'react-redux'
import { getDenominations } from '../actions/general'

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

const IncomeDistributionModal = ({visible, width, dataInfo, totalAmount, hideModal}: PropsType): React.ReactElement => {
  const [totalAmountDelivered, setTotalAmountDelivered] = useState(0)
  const [totalAmountReceived, setTotalAmountReceived] = useState(0)
  const [pendingAmount, setPendingAmount] = useState(0)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDenominations())
  }, [dispatch])
  
  useEffect(() => {
    const referenceAmount = totalAmountReceived - totalAmountDelivered
    setPendingAmount(referenceAmount - totalAmount)
  }, [totalAmountReceived, totalAmountDelivered, totalAmount])
 
  const getTotalDelivered = (monto: number) => {
    setTotalAmountDelivered(monto)
  }
  const getTotalReceived = (monto: number) => {
    setTotalAmountReceived(monto)
  }

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
        <CustomForm labelCol={{sm: 7}}>
          <CustomFormItem label={'Fecha'}>
            <CustomInput placeholder={'10/08/2020'} />
          </CustomFormItem>
          <CustomFormItem label={'Emisor'}>
            <CustomInput size={'large'} placeholder={'Yusepiz Rosario'} />
          </CustomFormItem>
          <CustomFormItem label={'Beneficiario'}>
            <CustomInput size={"large"} placeholder={'Alejandro Genao'} />
          </CustomFormItem>
        </CustomForm>
      )
    }
  ]

  return (
    <CustomModal
      centered
      closable={true}
      title={<CustomTitle level={3}>Distribución Ingresos</CustomTitle>}
      visible={visible}
      width={width}
      onCancel={() => hideModal()}
      onOk={() => hideModal()}
    >
      <CustomRow gutter={[16, 32]} align={'top'}>
        <CustomCol xs={24} md={20}>
          <CustomTable columns={columnsInfo} dataSource={dataInfo} pagination={false} bordered />
        </CustomCol>
        <CustomCol xs={24} md={4}>
          {currentDate}
        </CustomCol>
        <CustomCol xs={24} lg={16}>
          <EditableReceivedTable getTotalReceived={getTotalReceived} />
        </CustomCol>
        <CustomCol xs={24} lg={8}>
          <EditableDeliveredTable getTotalDelivered={getTotalDelivered} />
        </CustomCol>

        <CustomCol span={8} pull={4}>
          <CustomTable 
            columns={columsDetail} 
            dataSource={dataDetail} 
            pagination={false} 
            bordered
          />
        </CustomCol>
        <CustomCol xs={24} md={12}>
          <CustomForm labelCol={{sm: 8}}>
            <CustomFormItem label={'Total Operaciones'} >
              <CustomSpace>
                <CustomInputNumber placeholder={'RD$'} disabled/>
                <CustomInput value={numberFormat(totalAmount)} readOnly/>
              </CustomSpace>
            </CustomFormItem>
            <CustomFormItem label={'Recibido'} >
              <CustomSpace>
                <CustomInputNumber placeholder={'RD$'} disabled/>
                <CustomInput value={numberFormat(totalAmountReceived)} readOnly/>
              </CustomSpace>
            </CustomFormItem>
            <CustomFormItem label={'Entregado'} >
              <CustomSpace>
                <CustomInputNumber placeholder={'RD$'} disabled/>
                <CustomInput value={numberFormat(totalAmountDelivered)} readOnly />
              </CustomSpace>
            </CustomFormItem>
            <CustomFormItem label={'Pendiente'} >
              <CustomSpace>
                <CustomInputNumber placeholder={'RD$'} disabled/>
                <CustomInput value={numberFormat(pendingAmount)} readOnly/>
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