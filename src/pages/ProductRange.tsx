import React, { useEffect, useState } from 'react'
import { EditOutlined, PlusOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import {
  CustomButton,
  CustomCol,
  CustomForm,
  CustomFormItem,
  CustomInput,
  CustomModal,
  CustomNumberInput,
  CustomRow,
  CustomTable,
  CustomTooltip,
} from '../components'
import { StoreState } from '../reducers'
import {
  createProductRange,
  getProductRanges,
  setProductRangeModalVisibility,
  updateProductRange,
} from '../actions/catchements'
import { Form, Select } from 'antd'
import { ProductRange } from '../reducers/catchements'
import CustomSelect from '../components/CustomSelect'

const getColumns = (
  onEditRow: (
    record: ProductRange,
    showModal: boolean,
    isUpdating: boolean
  ) => void
) => {
  return [
    {
      key: 'action',
      title: 'Acción',
      render: (text: string, record: ProductRange) => {
        return (
          <CustomTooltip title={'Editar'}>
            <CustomButton
              shape={'circle'}
              icon={<EditOutlined />}
              onClick={() => onEditRow(record, true, true)}
            />
          </CustomTooltip>
        )
      },
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
    {
      title: 'Plazos',
      children: [
        {
          key: 'plazoMinimo',
          title: 'Mínimo',
          dataIndex: 'PLAZO_MINIMO',
        },
        {
          key: 'plazoMaximo',
          title: 'Máximo',
          dataIndex: 'PLAZO_MAXIMO',
        },
      ],
    },
  ]
}

const ProductRangePage = (): React.ReactElement => {
  const dispatch = useDispatch()
  const [selectedRecord, setSelectedRecord] = useState({})
  const [productRangeForm] = Form.useForm()
  const [isUpdatingRecord, setIsUpdatingRecord] = useState(false)
  const {
    productRanges,
    fetchingProductRanges,
    sendingProductRangeData,
    showProductRangeModal,
  } = useSelector((state: StoreState) => state.catchements)
  const toogleModalHandler = (
    record: ProductRange | {},
    showModal: boolean,
    isUpdating = true
  ) => {
    productRangeForm.setFieldsValue(record)
    setIsUpdatingRecord(isUpdating)
    // /* TODO: Remove this hardcoded option and grab it from the API */
    setSelectedRecord({ ...record, ID_LIST_FREC_PLAZO: 17 })
    dispatch(setProductRangeModalVisibility(showModal))
  }

  useEffect(() => {
    dispatch(getProductRanges())
  }, [dispatch])

  return (
    <div>
      <CustomRow>
        <CustomCol xs={20} md={20} xl={22}>
          <h2>Rango Productos</h2>
        </CustomCol>
        <CustomCol style={{ textAlign: 'center' }} xs={4} md={4} xl={2}>
          <CustomTooltip title={'Agregar'}>
            <CustomButton
              shape={'circle'}
              icon={<PlusOutlined />}
              onClick={() => {
                setIsUpdatingRecord(false)
                toogleModalHandler({}, true, false)
              }}
            />
          </CustomTooltip>
        </CustomCol>
      </CustomRow>
      <CustomTable
        bordered={true}
        columns={getColumns(toogleModalHandler)}
        dataSource={productRanges}
        loading={fetchingProductRanges}
        rowKey={(row) => row.ID_RANGO}
        size={'small'}
      />
      <CustomModal
        visible={showProductRangeModal}
        confirmLoading={sendingProductRangeData}
        closable={false}
        maskClosable={false}
        destroyOnClose={true}
        onOk={() => {
          productRangeForm.submit()
        }}
        onCancel={() => {
          toogleModalHandler({}, false, false)
        }}
      >
        <CustomForm
          autoComplete="off"
          initialValues={selectedRecord}
          form={productRangeForm}
          preserve={false}
          layout={'vertical'}
          onFinish={(productRangeData) => {
            const productRange = productRangeData as ProductRange

            if (isUpdatingRecord) {
              dispatch(updateProductRange(productRange))
            } else {
              delete productRange.ID_RANGO
              dispatch(createProductRange(productRange))
            }
          }}
        >
          <CustomFormItem name="ID_RANGO" label="ID Rango">
            <CustomInput disabled />
          </CustomFormItem>
          <CustomFormItem
            name="DESCRIPCION"
            label="Descripcion"
            rules={[{ required: true }]}
          >
            <CustomInput />
          </CustomFormItem>
          <CustomFormItem
            name="ID_MONEDA"
            label="ID Moneda"
            rules={[{ required: true }]}
          >
            <CustomInput />
          </CustomFormItem>
          <CustomFormItem
            name="PLAZO_MAXIMO"
            label="Plazo Maximo"
            rules={[{ required: true, type: 'number' }]}
          >
            <CustomNumberInput />
          </CustomFormItem>
          <CustomFormItem
            name="PLAZO_MINIMO"
            label="Plazo Minimo"
            rules={[{ required: true, type: 'number' }]}
          >
            <CustomNumberInput />
          </CustomFormItem>
          <CustomFormItem
            name="MONTO_MINIMO"
            label="Monto Minimo"
            rules={[{ required: true, type: 'number' }]}
          >
            <CustomNumberInput />
          </CustomFormItem>
          <CustomFormItem
            name="MONTO_MAXIMO"
            label="Monto Maximo"
            rules={[{ required: true, type: 'number' }]}
          >
            <CustomNumberInput />
          </CustomFormItem>
          <CustomFormItem
            name="TASA_MINIMA"
            label="Tasa Minima"
            rules={[{ required: true, type: 'number' }]}
          >
            <CustomNumberInput />
          </CustomFormItem>
          <CustomFormItem
            name="TASA_MAXIMA"
            label="Tasa Maxima"
            rules={[{ required: true, type: 'number' }]}
          >
            <CustomNumberInput />
          </CustomFormItem>
          <CustomFormItem
            name="TASA_DEFECTO"
            label="Tasa por defecto"
            rules={[{ required: true, type: 'number' }]}
          >
            <CustomNumberInput />
          </CustomFormItem>
          <CustomFormItem
            name="ESTADO"
            label="Estado"
            rules={[{ required: true, type: 'string' }]}
          >
            <CustomSelect>
              <Select.Option value="A">Activo</Select.Option>
              <Select.Option value="I">Inactivo</Select.Option>
            </CustomSelect>
          </CustomFormItem>
          {/* TODO: Grab frecuencia plazo from the API */}
          <CustomFormItem
            name="FRECUENCIA_PLAZO"
            label="Frecuencia de plazo"
            rules={[{ required: true, type: 'number' }]}
          >
            <CustomSelect>
              <Select.Option value={1}>Diario</Select.Option>
              <Select.Option value={120}>Cuatrimestral</Select.Option>
              <Select.Option value={15}>Quincenal</Select.Option>
              <Select.Option value={30}>Mensual</Select.Option>
            </CustomSelect>
          </CustomFormItem>
        </CustomForm>
      </CustomModal>
    </div>
  )
}

export default ProductRangePage
