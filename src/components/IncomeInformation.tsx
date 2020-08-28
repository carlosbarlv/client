import React, { useEffect } from 'react'
import moment from 'moment'
import { Select } from 'antd'
import { RadioChangeEvent } from 'antd/lib/radio'
import { defaultBreakpoints, labelColFullWidth } from '../themes'
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
          name={'ocupacion'}
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
          name={'lugarTrabajo'}
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
          name={'tipoEmpleo'}
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
          name={'posicionEmpresa'}
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
          name={'fechaIngreso'}
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
        <CustomFormItem
          label={'Actividad Económica'}
          name={'actividadEconomica'}
          rules={[
            {
              required: true,
            },
          ]}
          {...labelColFullWidth}
        >
          <CustomFormItem noStyle>
            <CustomInput
              disabled
              placeholder={'id actividad'}
              style={{ width: '25%' }}
            />
          </CustomFormItem>
          <CustomFormItem noStyle>
            {/* TODO: no busca :/ */}
            <CustomSelect
              placeholder={'Descripción actividad económica'}
              showSearch
              allowClear
              style={{ width: '75%' }}
            >
              {economicActivities.map((economicActivity: EconomicActivity) => (
                <Option
                  key={economicActivity.ID_ACTIVIDAD_ECONOMICA}
                  value={economicActivity.ID_ACTIVIDAD_ECONOMICA}
                >
                  {economicActivity.CONCEPTO}
                </Option>
              ))}
            </CustomSelect>
          </CustomFormItem>
        </CustomFormItem>
      </CustomCol>

      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Supervisor'}
          name={'nombreSupervidor'}
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
        <CustomFormItem
          label={'Tiempo empresa'}
          name={'tiempoEmpresa'}
          rules={[{ required: true }]}
        >
          <CustomInputGroup compact>
            <CustomFormItem label={'Años'}>
              <CustomInputNumber
                placeholder={'Años en empresa'}
                type={'number'}
              />
            </CustomFormItem>
            <CustomFormItem label={'Meses'}>
              <CustomInputNumber
                placeholder={'Meses en empresa'}
                type={'number'}
              />
            </CustomFormItem>
          </CustomInputGroup>
        </CustomFormItem>
      </CustomCol>

      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Ingresos'}
          name={'ingresos'}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <CustomInputNumber
            placeholder={'Ingreso promedio'}
            style={{ width: '50%' }}
            type={'number'}
          />
          <CustomSelect
            placeholder={'Moneda'}
            showSearch
            style={{ width: '50%' }}
          >
            {coins.map((coin: Coins) => (
              <Option
                key={coin.ID_MONEDA}
                value={coin.ID_MONEDA}
              >{`${coin.ID_MONEDA} (${coin.DESCRIPCION})`}</Option>
            ))}
          </CustomSelect>
        </CustomFormItem>
      </CustomCol>

      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Otros Ingresos'}
          name={'otrosIngresos'}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <CustomInputNumber
            placeholder={'Otros Ingresos'}
            style={{ width: '50%' }}
            type={'number'}
          />
          <CustomSelect
            placeholder={'Moneda'}
            showSearch
            style={{ width: '50%' }}
          >
            {coins.map((coin: Coins) => (
              <Option
                key={coin.ID_MONEDA}
                value={coin.ID_MONEDA}
              >{`${coin.ID_MONEDA} (${coin.DESCRIPCION})`}</Option>
            ))}
          </CustomSelect>
        </CustomFormItem>
      </CustomCol>

      <CustomCol xs={24}>
        <CustomFormItem
          label={'Justifique'}
          name={'justifique'}
          {...labelColFullWidth}
        >
          <CustomTextArea placeholder={'Justifiue otros ingresos'} />
        </CustomFormItem>
      </CustomCol>
    </CustomRow>
  )
}

export default IncomeInformation
