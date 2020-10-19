import React, { useEffect } from 'react'
import {
  CustomCol,
  CustomModal,
  CustomRow,
  CustomTable,
  CustomTitle,
} from '.'
import { ColumnType } from 'antd/lib/table'
import { currentDate } from '../utils/general'
import CustomFormItem from './CustomFormItem'
import CustomInput from './CustomInput'
import CustomForm from './CustomForm'
import CustomInputNumber from './CustomInputNumber'
import CustomSpace from './CustomSpace'
import CustomCheckBox from './CustomCheckBox'
import EditableReceivedTable from './EditableReceivedTable'
import EditableDeliveredTable from './EditableDeliveredTable'
import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '../reducers'
import { getDenominations } from '../actions/general'

type PropsType = {
  visible: boolean
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
  detalleDoc: React.ReactElement
}

const IncomeDistributionModal = ({visible, width, hideModal}: PropsType): React.ReactElement => {

  const dispatch = useDispatch()
  const denominations  = useSelector((state: StoreState) => state.general.denominations)

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

  const dataInfo: MainInfoTable[] = [
    {
      emisor: 'Caja',
      concepto: 'Aportaciones',
      idCuenta: '001-0023443',
      operacion: 'Depósito',
      moneda: 'RD$',
      monto: '1,000.00'
    },
    {
      emisor: 'Caja',
      concepto: 'Prestamo Corriente',
      idCuenta: '0023443',
      operacion: 'Pago a Cuota',
      moneda: 'RD$',
      monto: '14,455.00'
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
        <CustomCol span={20}>
          <CustomTable columns={columnsInfo} dataSource={dataInfo} pagination={false} bordered />
        </CustomCol>
        <CustomCol span={4}>
          {currentDate}
        </CustomCol>
        <CustomCol span={14}>
          <EditableReceivedTable  denominations={denominations} />
        </CustomCol>
        <CustomCol span={10}>
          <EditableDeliveredTable denominations={denominations} />
        </CustomCol>

        <CustomCol span={8} pull={4}>
          <CustomTable 
            columns={columsDetail} 
            dataSource={dataDetail} 
            pagination={false} 
            bordered
          />
        </CustomCol>
        <CustomCol span={12}>
          <CustomForm labelCol={{sm: 8}}>
            <CustomFormItem label={'Total Operaciones'} >
              <CustomSpace>
                <CustomInputNumber placeholder={'RD$'} disabled/>
                <CustomInput value={'15,500.00'} disabled/>
              </CustomSpace>
            </CustomFormItem>
            <CustomFormItem label={'Recibido'} >
              <CustomSpace>
                <CustomInputNumber placeholder={'RD$'} disabled/>
                <CustomInput value={'15,500.00'} disabled/>
              </CustomSpace>
            </CustomFormItem>
            <CustomFormItem label={'Entregado'} >
              <CustomSpace>
                <CustomInputNumber placeholder={'RD$'} disabled/>
                <CustomInput value={'15,500.00'} disabled/>
              </CustomSpace>
            </CustomFormItem>
            <CustomFormItem label={'Pendiente'} >
              <CustomSpace>
                <CustomInputNumber placeholder={'RD$'} disabled/>
                <CustomInput value={'15,500.00'} disabled/>
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