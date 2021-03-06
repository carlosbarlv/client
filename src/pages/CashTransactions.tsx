import React, { useState } from 'react'
import {
  CustomButton,
  CustomCol,
  CustomInput,
  CustomLayout,
  CustomRow,
  CustomSpace,
  CustomTable,
  CustomText,
  CustomTitle,
} from '../components'
import { ColumnType } from 'antd/lib/table'
import ContribuitonsDepositModal from '../components/ContributionsDepositModal'
import { currentDate } from '../utils/general'
import TransitIncome from '../components/TransitIncome'
import TransitEgress from '../components/TransitEgress'
import AccountWithdrawalModal from '../components/AccountWithdrawalModal'
import { PlusOutlined } from '@ant-design/icons'
import LoanPaymentModal from '../components/LoanPaymentModal'
import PaymentDistributionModal from '../components/PaymentDistributionModal'

type CatCatchmentsTable = {
  key: string
  producto: string
  idCuenta: string
  actions: React.ReactElement
}
type PlacementsTable = {
  key: string
  producto: string
  idCuenta: string
  actions: React.ReactElement
}

const CashTransactions = (): React.ReactElement => {
  const [
    depositoAportacionesIsVisible,
    setDepositoAportacionesIsVisible,
  ] = useState(false)

  const [
    accountWithdrawalIsVisible,
    setAccountWithdrawalIsVisible,
  ] = useState(false)

  const [
    loanPaymentIsVisible,
    setLoanPaymentIsVisible,
  ] = useState(false)

  const [isPaymentDistributionVisible, setIsPaymentDistributionVisible] = useState(false)

  const [isPaymentOrders, setIsPaymentOrders] = useState(false)

  const showDepositoAportacionesModal = () => {
    setDepositoAportacionesIsVisible(!depositoAportacionesIsVisible)
  }
  const showAccountWithdrawalModal = () => {
    setAccountWithdrawalIsVisible(!accountWithdrawalIsVisible)
    setIsPaymentOrders(false)
  }
  const showLoanPaymentModal = () => {
    setLoanPaymentIsVisible(!loanPaymentIsVisible)
  }
  const showPaymentOrdersModal = () => {
    setAccountWithdrawalIsVisible(!accountWithdrawalIsVisible)
    setIsPaymentOrders(true)
  }
  const showPaymentDistribution = () => {
    setIsPaymentDistributionVisible(!isPaymentDistributionVisible)
  }

  const columnsCatchments: ColumnType<CatCatchmentsTable>[] = [
    {
      title: 'Producto',
      dataIndex: 'producto',
    },
    {
      title: 'ID Cuenta',
      dataIndex: 'idCuenta',
    },
  ]
  const dataCatchments: CatCatchmentsTable[] = [
    {
      key: '1',
      producto: 'Aportaciones',
      idCuenta: '001-0023443',
      actions: (
        <CustomSpace>
          <CustomButton
            style={{backgroundColor: '#2DC8F7', color: 'white'}}
            onClick={showDepositoAportacionesModal}
          >
            Depósito
          </CustomButton>
        </CustomSpace>
      )
    },
    {
      key: '2',
      producto: 'Cuenta Ahorros',
      idCuenta: '002-0067233',
      actions: (
        <CustomSpace>
          <CustomButton
            style={{backgroundColor: '#2DC8F7', color: 'white'}}
            onClick={showDepositoAportacionesModal}
          >
            Depósito
          </CustomButton>
          <CustomButton
            style={{backgroundColor: '#F54738', color: 'white'}}
            onClick={showAccountWithdrawalModal}
          >
            Retiro
          </CustomButton>
        </CustomSpace>
      )
    },
    {
      key: '3',
      producto: 'Orden de pago',
      idCuenta: '003-0031441',
      actions: (
        <CustomSpace>
          <CustomButton
            style={{backgroundColor: '#2DC8F7', color: 'white'}}
            onClick={showDepositoAportacionesModal}
          >
            Depósito
          </CustomButton>
          <CustomButton
            style={{backgroundColor: '#F54738', color: 'white'}}
            onClick={showPaymentOrdersModal}
          >
            Ordenes
          </CustomButton>
        </CustomSpace>
      )
    },
  ]
  const columnsPlacement: ColumnType<PlacementsTable>[] = [
    {
      title: 'Producto',
      dataIndex: 'producto',
    },
    {
      title: 'ID Cuenta',
      dataIndex: 'idCuenta',
    },
  ]
  const dataPlacements: PlacementsTable[] = [
    {
      key: '1',
      producto: 'Préstamo Corriente',
      idCuenta: '0024991',
      actions: (
        <CustomSpace>
          <CustomButton
            style={{backgroundColor: '#2DC8F7', color: 'white'}}
            onClick={showLoanPaymentModal}
          >
            Pagos
          </CustomButton>
        </CustomSpace>
      )
    },
    {
      key: '2',
      producto: '',
      idCuenta: '',
      actions: <></>
    },
    {
      key: '3',
      producto: '',
      idCuenta: '',
      actions: <></>
    },
  ]
  const captacionesTitle = () => (
    <CustomRow>
      <CustomCol span={12}>
        <CustomTitle type="secondary" level={3}>
          Captaciones
        </CustomTitle>
      </CustomCol>
      <CustomCol span={12}>
        <CustomRow align={'bottom'}>
          <CustomButton 
            type="primary"
            shape={'circle'}
            size={'large'}
            icon={<PlusOutlined />}
          />
        </CustomRow>
      </CustomCol>
    </CustomRow>
  )
  const colocacionesTitle = () => (
    <CustomRow>
      <CustomCol span={12}>
        <CustomTitle type="secondary" level={3}>
          Colocaciones
        </CustomTitle>
      </CustomCol>
        <CustomCol span={12}>
          <CustomRow align={'bottom'}>
            <CustomButton 
              type="primary"
              shape={'circle'}
              size={'large'}
              icon={<PlusOutlined />}
            />
          </CustomRow>
        </CustomCol>
    </CustomRow>
  )

  return (
    <CustomLayout
      style={{
        height: 'auto !important',
        background: 'white',
        padding: '35px 20px',
        boxShadow:
          '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
        marginLeft: 20,
        marginRight: 20,
      }}
    >
      <CustomRow gutter={[32, 16]}>
        <CustomCol span={6}>
          <CustomTitle type={'secondary'} level={4}>
            Identificación del Socio
          </CustomTitle>
          <CustomInput placeholder={'047-0091273-1'} />
        </CustomCol>
        <CustomCol span={12}>
          <CustomTitle type={'secondary'} level={4}>
            Nombre
          </CustomTitle>
          <CustomInput placeholder={'Alejandro Genao'} />
        </CustomCol>
        <CustomCol span={6}>
          <CustomTitle type={'secondary'} level={4}>
            Transacciones de Caja
          </CustomTitle>
          <CustomText type={'secondary'} strong>
            {currentDate} 
          </CustomText>
        </CustomCol>
      </CustomRow>

      <CustomRow gutter={[32, 32]} align={'top'}>
        <CustomCol span={12}>
          <ContribuitonsDepositModal
            width={'60%'}
            onCancelClick={showDepositoAportacionesModal}
            onOkClick={showDepositoAportacionesModal}
            visible={depositoAportacionesIsVisible}
          />
          <AccountWithdrawalModal
            isPayment={isPaymentOrders}
            width={'60%'}
            onCancelClick={showAccountWithdrawalModal}
            onOkClick={showAccountWithdrawalModal}
            visible={accountWithdrawalIsVisible}
          />
          <LoanPaymentModal 
            width={'60%'}
            onCancelClick={showLoanPaymentModal}
            onOkClick={showLoanPaymentModal}
            visible={loanPaymentIsVisible} 
            showPaymentDistribution={showPaymentDistribution}
          />
            <PaymentDistributionModal 
              visible={isPaymentDistributionVisible}
              width={'50%'}
              hideModal={showPaymentDistribution}
            />
          <CustomTable
            title={captacionesTitle}
            columns={columnsCatchments}
            dataSource={dataCatchments}
            expandable={{
              expandedRowRender: record => record.actions
            }}
            scroll={{ y: 240 }}
            pagination={false}
            bordered
          />
        </CustomCol>
        <CustomCol span={12} >
          <CustomTable
            title={colocacionesTitle}
            columns={columnsPlacement}
            dataSource={dataPlacements}
            expandable={{
              expandedRowRender: record => record.actions
            }}
            scroll={{ y: 240 }}
            pagination={false}
            bordered
          />
        </CustomCol>
      </CustomRow>
      <CustomRow gutter={[0, 32]} align={'bottom'}>
        <TransitIncome />
        <TransitEgress />
      </CustomRow>
    </CustomLayout>
  )
}

export default CashTransactions
