import React, { useEffect } from 'react'
import { ColumnsType } from 'antd/lib/table'
import { EditOutlined, PlusOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import {
  CustomButton,
  CustomCol,
  CustomRow,
  CustomTable,
  CustomTooltip,
} from '../components'
import { StoreState } from '../reducers'
import { getProductRanges } from '../actions/catchements'

type ProductRangeColumn = {
  action?: React.ReactNode
  descripcion: string
  idRango: number
  moneda: string
  montoMaximo: number
  montoMinimo: number
  tasaMaxima: number
  tasaMinima: number
  tasaPorDefecto: number
}

const Action = (): React.ReactElement => {
  return (
    <CustomTooltip title={'Editar'}>
      <CustomButton shape={'circle'} icon={<EditOutlined />} />
    </CustomTooltip>
  )
}

const columns: ColumnsType<ProductRangeColumn> = [
  {
    key: 'action',
    title: 'Acción',
    render: Action,
  },
  {
    key: 'idRango',
    title: 'Id',
    dataIndex: 'ID_RANGO',
  },
  {
    key: 'descripcion',
    title: 'Descripción',
    dataIndex: 'DESCRIPCION',
  },
  {
    key: 'moneda',
    title: 'Moneda',
    dataIndex: 'ID_MONEDA',
  },
  {
    title: 'Montos',
    children: [
      {
        key: 'montoMinimo',
        title: 'Mínimo',
        dataIndex: 'MONTO_MINIMO',
      },
      {
        key: 'montoMaximo',
        title: 'Máximo',
        dataIndex: 'MONTO_MAXIMO',
      },
    ],
  },
  {
    title: 'Tasas',
    children: [
      {
        key: 'tasaMinima',
        title: 'Mínima',
        dataIndex: 'TASA_MINIMA',
      },
      {
        key: 'tasaMaxima',
        title: 'Máximo',
        dataIndex: 'TASA_MAXIMA',
      },
      {
        key: 'tasaPorDefecto',
        title: 'Por Defecto',
        dataIndex: 'TASA_DEFECTO',
      },
    ],
  },
]

const ProductRangeTitle = () => {
  return (
    <CustomRow>
      <CustomCol xs={20} md={20} xl={22}>
        <h2>Rango Productos</h2>
      </CustomCol>
      <CustomCol style={{ textAlign: 'center' }} xs={4} md={4} xl={2}>
        <CustomTooltip title={'Agregar'}>
          <CustomButton shape={'circle'} icon={<PlusOutlined />} />
        </CustomTooltip>
      </CustomCol>
    </CustomRow>
  )
}

const ProductRange = (): React.ReactElement => {
  const dispatch = useDispatch()
  const { productRanges, fetchingProductRanges } = useSelector(
    (state: StoreState) => state.catchements
  )

  useEffect(() => {
    dispatch(getProductRanges())
  }, [dispatch])

  return (
    <CustomTable
      title={ProductRangeTitle}
      bordered={true}
      columns={columns}
      dataSource={productRanges}
      loading={fetchingProductRanges}
      rowKey={(row) => row.ID_RANGO}
      size={'small'}
    />
  )
}

export default ProductRange
