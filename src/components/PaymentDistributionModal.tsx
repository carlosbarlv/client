import React from 'react'
import {
  CustomCol,
  CustomModal,
  CustomRow,
  CustomTable,
  CustomTitle,
} from '.'
import { ColumnType } from 'antd/lib/table'
import CustomInputNumber from './CustomInputNumber'

type PropsType = {
  visible: boolean
  width?: number | string
  hideModal: () => void
}
type PaymentDistributionTable = {
  key: string
  noCuota: string
  fecha: string
  capital: string
  interes: string
  mora: string
  otrosCargos: string
  totalCuota: string
}

const PaymentDistributionModal = ({visible, width, hideModal}: PropsType): React.ReactElement => {
  const columns: ColumnType<PaymentDistributionTable>[] = [
    {
      title: 'No. Cuota',
      dataIndex: 'noCuota',
    },
    {
      title: 'Fecha',
      dataIndex: 'fecha',
    },
    {
      title: 'Capital',
      dataIndex: 'capital',
    },
    {
      title: 'Interés',
      dataIndex: 'interes',
    },
    {
      title: 'Mora',
      dataIndex: 'mora',
    },
    {
      title: 'Otros Cargos',
      dataIndex: 'otrosCargos',
    },
    {
      title: 'Total Cuota',
      dataIndex: 'totalCuota',
    },
  ]
  const data: PaymentDistributionTable[] = [
    {
      key: '0',
      noCuota: '4',
      fecha: '21/08/2020',
      capital: '6,500.00',
      interes:' 7,955.00',
      mora: '0.00',
      otrosCargos: '0.00',
      totalCuota: '14,455.00'
    },
    {
      key: '1',
      noCuota: '5',
      fecha: '21/08/2020',
      capital: '6,500.00',
      interes:' 7,955.00',
      mora: '0.00',
      otrosCargos: '0.00',
      totalCuota: '14,455.00'
    },
  ]

  return (
    <CustomModal
      title={<CustomTitle level={4}>Distribucion de Pago</CustomTitle>}
      visible={visible}
      width={width}
      closable
      onCancel={() => hideModal()}
      onOk={() => hideModal()}
      footer={false}
    >
      <CustomRow gutter={[10, 2]}>
        <CustomCol span={10} offset={14}>
        </CustomCol>
        <CustomCol span={24}>
            <CustomTable columns={columns} dataSource={data} pagination={false} bordered/>
        </CustomCol>
        <CustomCol span={4}>
            <CustomInputNumber placeholder={'28,910.00'} readOnly />
        </CustomCol>
      </CustomRow>
    </CustomModal>
  )
}
export default PaymentDistributionModal
