import React, { useEffect } from 'react'
import moment from 'moment'
import { Select } from 'antd'
import { RadioChangeEvent } from 'antd/lib/radio'
import {
  defaultBreakpoints,
  defaultBreakpointsForInputGroupLeft,
  defaultBreakpointsForInputGroupRight,
  labelColFullWidth,
} from '../themes'
import { getEconomicActivity } from '../actions/economicActivities'
import {
  CustomCol,
  CustomDatePicker,
  CustomDivider,
  CustomFormItem,
  CustomInput,
  CustomInputGroup,
  CustomInputNumber,
  CustomRadio,
  CustomRadioGroup,
  CustomRow,
  CustomSelect,
  CustomTextArea,
  CustomTitle,
} from '.'
import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '../reducers'
import { EconomicActivity } from '../reducers/economicActivities'
import { getCoins } from '../actions/general'
import { Coins } from '../reducers/general'

const { Option } = Select

const IncomeInformation = (): React.ReactElement => {
  const [entryJobTypeState, setEntryJobTypeState] = React.useState('')
  const handleStateJobTypeRadioChange = (e: RadioChangeEvent) => {
    setEntryJobTypeState(e.target.value)
  }

  const dispatch = useDispatch()

  const { economicActivities } = useSelector(
    (state: StoreState) => state.economicActivities
  )

  const { coins } = useSelector((state: StoreState) => state.general)

  useEffect(() => {
    dispatch(getEconomicActivity())
    dispatch(getCoins())
  }, [dispatch])

  return (
    <CustomRow justify={'start'}>
      <CustomDivider orientation={'left'}>
        <CustomTitle level={4}>Información de ingresos</CustomTitle>
      </CustomDivider>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Ocupación'}
          name={'OCUPACION'}
          rules={[
            {
              required: true,
              type: 'string',
              pattern: new RegExp('[a-z, A-Z]'),
            },
          ]}
        >
          <CustomInput placeholder={'Ocupación'} />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}></CustomCol>

      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Lugar de trabajo'}
          name={'NOMBRE_EMPRESA'}
          rules={[
            {
              required: true,
              type: 'string',
            },
          ]}
        >
          <CustomInput placeholder={'Nombre de la empresa de trabajo'} />
        </CustomFormItem>
      </CustomCol>

      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Tipo de empleo'}
          name={'TIPO_EMPLEO'}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <CustomRadioGroup
            value={entryJobTypeState}
            onChange={handleStateJobTypeRadioChange}
          >
            <CustomRadio value={'PRIV'}>Privado</CustomRadio>
            <CustomRadio value={'PUBLI'}>Público</CustomRadio>
            <CustomRadio value={'IND'}>Independiente</CustomRadio>
          </CustomRadioGroup>
        </CustomFormItem>
      </CustomCol>

      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Posición en la empresa'}
          name={'POSICION_EMPRESA'}
          rules={[
            {
              required: true,
              type: 'string',
            },
          ]}
        >
          <CustomInput placeholder={'Posición en la empresa'} />
        </CustomFormItem>
      </CustomCol>

      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Fecha de ingreso'}
          name={'FECHA_ENTRADA_EMPRESA'}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <CustomDatePicker
            allowClear
            disabledDate={(date: moment.Moment) => {
              return date && date > moment().endOf('day')
            }}
            format={'DD/MM/YYYY'}
            placeholder={'Fecha entrada a la empresa'}
          />
        </CustomFormItem>
      </CustomCol>

      <CustomCol xs={24}>
        <CustomFormItem label={'Actividad Económica'} {...labelColFullWidth}>
          <CustomRow justify={'start'}>
            <CustomCol {...defaultBreakpointsForInputGroupLeft}>
              <CustomFormItem
                label={'Id actividad'}
                name={'ID_ACTIVIDAD_ECONOMICA'}
                noStyle
                rules={[{ required: true }]}
              >
                <CustomInput disabled placeholder={'Id actividad'} />
              </CustomFormItem>
            </CustomCol>

            <CustomCol {...defaultBreakpointsForInputGroupRight}>
              <CustomFormItem
                label={'Descripción actividad'}
                name={'DACTIVIDAD_ECONOMICA'}
                noStyle
                rules={[{ required: true }]}
              >
                <CustomSelect
                  placeholder={'Descripción actividad económica'}
                  showSearch
                  allowClear
                >
                  {economicActivities.map(
                    (economicActivity: EconomicActivity) => (
                      <Option
                        key={economicActivity.ID_ACTIVIDAD_ECONOMICA}
                        value={economicActivity.ID_ACTIVIDAD_ECONOMICA}
                      >
                        {economicActivity.CONCEPTO}
                      </Option>
                    )
                  )}
                </CustomSelect>
              </CustomFormItem>
            </CustomCol>
          </CustomRow>
        </CustomFormItem>
      </CustomCol>

      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Supervisor'}
          name={'NOMBRE_SUPERVISOR'}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <CustomInput placeholder={'Nombre supervisor'} />
        </CustomFormItem>
      </CustomCol>

      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem label={'Tiempo empresa'} rules={[{ required: true }]}>
          <CustomInputGroup compact>
            <CustomFormItem
              label={'Años'}
              name={'ANIO_TIEMPO_EMPRESA'}
              rules={[{ required: true }]}
            >
              <CustomInputNumber
                placeholder={'Años en empresa'}
                type={'number'}
              />
            </CustomFormItem>
            <CustomFormItem
              label={'Meses'}
              name={'MESES_TIEMPO_EMPRESA'}
              rules={[{ required: true }]}
            >
              <CustomInputNumber
                placeholder={'Meses en empresa'}
                type={'number'}
              />
            </CustomFormItem>
          </CustomInputGroup>
        </CustomFormItem>
      </CustomCol>

      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem label={'Ingreso promedio'}>
          <CustomRow justify={'start'}>
            <CustomCol xs={24} sm={12}>
              <CustomFormItem
                label={'Ingreso promedio'}
                name={'INGRESO_PROMEDIO'}
                noStyle
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <CustomInputNumber
                  placeholder={'Ingreso promedio'}
                  style={{ width: '100%' }}
                  type={'number'}
                />
              </CustomFormItem>
            </CustomCol>

            <CustomCol xs={24} sm={12}>
              <CustomFormItem
                label={'Moneda ingresos promedio'}
                name={'ID_MONEDA_DEF'}
                noStyle
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <CustomSelect placeholder={'Moneda'} showSearch>
                  {coins.map((coin: Coins) => (
                    <Option
                      key={coin.ID_MONEDA}
                      value={coin.ID_MONEDA}
                    >{`${coin.ID_MONEDA} (${coin.DESCRIPCION})`}</Option>
                  ))}
                </CustomSelect>
              </CustomFormItem>
            </CustomCol>
          </CustomRow>
        </CustomFormItem>
      </CustomCol>

      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem label={'Otros Ingresos'}>
          <CustomRow justify={'start'}>
            <CustomCol xs={24} sm={12}>
              <CustomFormItem
                label={'Otros ingresos'}
                name={'OTROS_INGRESOS'}
                noStyle
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <CustomInputNumber
                  placeholder={'Otros Ingresos'}
                  style={{ width: '100%' }}
                  type={'number'}
                />
              </CustomFormItem>
            </CustomCol>

            <CustomCol xs={24} sm={12}>
              <CustomFormItem
                label={'Moneda otros ingresos'}
                name={'ID_MONEDA_OTROS_ING'}
                noStyle
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <CustomSelect placeholder={'Moneda'} showSearch>
                  {coins.map((coin: Coins) => (
                    <Option
                      key={coin.ID_MONEDA}
                      value={coin.ID_MONEDA}
                    >{`${coin.ID_MONEDA} (${coin.DESCRIPCION})`}</Option>
                  ))}
                </CustomSelect>
              </CustomFormItem>
            </CustomCol>
          </CustomRow>
        </CustomFormItem>
      </CustomCol>

      <CustomCol xs={24}>
        <CustomFormItem
          label={'Justifique'}
          name={'RAZON_OTROS_INGRESOS'}
          rules={[
            {
              required: true,
            },
          ]}
          {...labelColFullWidth}
        >
          <CustomTextArea placeholder={'Justifiue otros ingresos'} />
        </CustomFormItem>
      </CustomCol>
    </CustomRow>
  )
}

export default IncomeInformation
