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
import ContribuitonsDepositModal from './ContributionsDepositModal'
import { currentDate } from '../utils/general'
import AccountWithdrawalModal from './AccountWithdrawalModal'

type CatCatchmentsTable = {
  key: string
  producto: string
  idCuenta: string
}

type PlacementsTable = {
  key: string
  producto: string
  idCuenta: string
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

  const showDepositoAportacionesModal = () => {
    setDepositoAportacionesIsVisible(!depositoAportacionesIsVisible)
  }
  const showAccountWithdrawalModal = () => {
    setAccountWithdrawalIsVisible(!accountWithdrawalIsVisible)
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
    },
    {
      key: '2',
      producto: 'Cuenta Ahorros',
      idCuenta: '002-0067233',
    },
    {
      key: '3',
      producto: 'Orden de pago',
      idCuenta: '003-0031441',
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
    },
    {
      key: '2',
      producto: '',
      idCuenta: '',
    },
    {
      key: '3',
      producto: '',
      idCuenta: '',
    },
  ]

  const actionsButtons =  (
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
          <CustomTitle type="secondary" level={4}>
            Identificación del Socio
          </CustomTitle>
          <CustomInput placeholder="047-0091273-1" />
        </CustomCol>
        <CustomCol span={12}>
          <CustomTitle type="secondary" level={4}>
            Nombre
          </CustomTitle>
          <CustomInput placeholder="Alejandro Genao" />
        </CustomCol>
        <CustomCol span={6}>
          <CustomTitle type="secondary" level={4}>
            Transacciones de Caja
          </CustomTitle>
          <CustomText type="secondary" strong>
            {currentDate} 
          </CustomText>
        </CustomCol>
      </CustomRow>

      <CustomRow gutter={[32, 32]} align="top">

        <CustomCol span={12}>
          <ContribuitonsDepositModal
            width={800}
            onCancelClick={showDepositoAportacionesModal}
            onOkClick={showDepositoAportacionesModal}
            visible={depositoAportacionesIsVisible}
          />
          <AccountWithdrawalModal
            width={800}
            onCancelClick={showAccountWithdrawalModal}
            onOkClick={showAccountWithdrawalModal}
            visible={accountWithdrawalIsVisible}
          />
          <CustomTable
            title={() => (
              <CustomTitle type="secondary" level={3}>
                Captaciones
              </CustomTitle>
            )}
            columns={columnsCatchments}
            dataSource={dataCatchments}
            expandable={{
              expandedRowRender: () => actionsButtons
            }}
            pagination={false}
            bordered
          />
        </CustomCol>
        <CustomCol span={11} pull={2}>
          <CustomTable
            title={() => (
              <CustomTitle type="secondary" level={3}>
                Colocaciones
              </CustomTitle>
            )}
            columns={columnsPlacement}
            dataSource={dataPlacements}
            expandable={{
              expandedRowRender: () => (
                <CustomButton
                  style={{backgroundColor: '#2DC8F7', color: 'white'}}
                  onClick={showDepositoAportacionesModal}
                >
                  Depósito
                </CustomButton>
              ),
            }}
            pagination={false}
            bordered
          />
        </CustomCol>
      </CustomRow>
      <CustomRow gutter={[0, 32]} align="bottom">
        <TransitActions />
      </CustomRow>
    </CustomLayout>
  )
}

export default CashTransactions
