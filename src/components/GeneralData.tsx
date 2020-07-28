import React, { useEffect } from 'react'
import {
  CustomCol,
  CustomFormItem,
  CustomInput,
  CustomRadio,
  CustomRadioGroup,
  CustomRow,
} from '.'
import CustomSelect from './CustomSelect'
import CustomDatePicker from './CustomDatePicker'
import { RadioChangeEvent } from 'antd/lib/radio'
import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '../reducers'
import { getNationalities } from '../actions/general'
import { Select } from 'antd'

const { Option } = Select

const GeneralData = (): React.ReactElement => {
  const [entryStateSex, setEntryStateSex] = React.useState('M')
  const handleStateSexRadioChange = (e: RadioChangeEvent) => {
    setEntryStateSex(e.target.value)
  }
  const dispatch = useDispatch()
  const { nationalities } = useSelector(
    (state: StoreState) => state.nationalities
  )

  const defaultBreakPoints = {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 12,
    xl: 12,
    xxl: 12,
  }

  useEffect(() => {
    dispatch(getNationalities())
  }, [dispatch])

  return (
    <CustomRow justify={'start'}>
      <CustomCol {...defaultBreakPoints}>
        <CustomFormItem
          label={'Cédula'}
          name={'cedula'}
          rules={[
            {
              required: true,
              type: 'number',
              len: 11,
              transform: (value: string) =>
                Number(value) ? value.length : value,
            },
          ]}
        >
          <CustomInput placeholder={'00000000000'} autoComplete={'off'} />
        </CustomFormItem>
      </CustomCol>

      <CustomCol {...defaultBreakPoints}>
        <CustomFormItem
          label={'No. Pasaporte'}
          name={'pasaporte'}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <CustomInput placeholder={'No. Pasaporte'} />
        </CustomFormItem>
      </CustomCol>

      <CustomCol {...defaultBreakPoints}>
        <CustomFormItem
          label={'Nombre(s)'}
          name={'nombre'}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <CustomInput placeholder={'Nombre(s)'} />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakPoints}>
        <CustomFormItem
          label={'Apellido(s)'}
          name={'apellido'}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <CustomInput placeholder={'Apellido(s)'} />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakPoints}>
        <CustomFormItem label={'Apodo'} name={'apodo'}>
          <CustomInput placeholder={'Apodo (opcional)'} />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakPoints}>
        <CustomFormItem
          label={'Nacionalidad'}
          name={'nacionalidad'}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <CustomSelect placeholder={'Nacionalidad'} allowClear>
            {nationalities.map((nationality: string, index: number) => (
              <Option key={`${nationality}-${index}`} value={`${nationality}`}>
                {nationality}
              </Option>
            ))}
          </CustomSelect>
        </CustomFormItem>
      </CustomCol>

      <CustomCol {...defaultBreakPoints}>
        <CustomFormItem
          label={'Lugar de nac.'}
          name={'lugarNacimiento'}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <CustomInput placeholder={'Lugar de nacimiento'} />
        </CustomFormItem>
      </CustomCol>

      <CustomCol {...defaultBreakPoints}>
        <CustomFormItem
          label={'Fecha de nacimiento'}
          name={'fechaNacimiento'}
          rules={[{ required: true }]}
        >
          <CustomDatePicker
            placeholder={'Fecha nacimiento'}
            allowClear
            format={'DD/MM/YYYY'}
          />
        </CustomFormItem>
      </CustomCol>

      <CustomCol {...defaultBreakPoints}>
        <CustomFormItem
          label={'Sexo'}
          name={'sexo'}
          rules={[{ required: true }]}
        >
          <CustomRadioGroup
            value={entryStateSex}
            onChange={handleStateSexRadioChange}
          >
            <CustomRadio value={'M'}>Masculino</CustomRadio>
            <CustomRadio value={'F'}>Femenino</CustomRadio>
          </CustomRadioGroup>
        </CustomFormItem>
      </CustomCol>
    </CustomRow>
  )
}
export default GeneralData
