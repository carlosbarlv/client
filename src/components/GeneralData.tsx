import React, { useEffect } from 'react'
import moment from 'moment'
import { Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { RadioChangeEvent } from 'antd/lib/radio'
import { StoreState } from '../reducers'
import { getNationalities, getPartnersCategories } from '../actions/general'
import { PartnersCategories } from '../reducers/general'
import { defaultBreakpoints } from '../themes'
import {
  CustomCol,
  CustomDatePicker,
  CustomDivider,
  CustomFormItem,
  CustomInput,
  CustomRadio,
  CustomRadioGroup,
  CustomRow,
  CustomSelect,
  CustomTitle,
} from '.'

const { Option } = Select

const GeneralData = (): React.ReactElement => {
  const [entryStateSex, setEntryStateSex] = React.useState('M')
  const handleStateSexRadioChange = (e: RadioChangeEvent) => {
    setEntryStateSex(e.target.value)
  }
  const dispatch = useDispatch()
  const { nationalities, partnersCategories } = useSelector(
    (state: StoreState) => state.general
  )

  useEffect(() => {
    dispatch(getNationalities())
    dispatch(getPartnersCategories())
  }, [dispatch])

  return (
    <CustomRow justify={'start'}>
      <CustomDivider orientation={'left'}>
        <CustomTitle level={4}>Datos Generales</CustomTitle>
      </CustomDivider>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem label={'Código'} name={'codigo'}>
          <CustomInput disabled placeholder={'Código persona'} />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}></CustomCol>
      <CustomCol {...defaultBreakpoints}>
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

      <CustomCol {...defaultBreakpoints}>
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

      <CustomCol {...defaultBreakpoints}>
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
      <CustomCol {...defaultBreakpoints}>
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
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem label={'Apodo'} name={'apodo'}>
          <CustomInput placeholder={'Apodo (opcional)'} />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Nacionalidad'}
          name={'nacionalidad'}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <CustomSelect placeholder={'Nacionalidad'} allowClear showSearch>
            {nationalities.map((nationality: string, index: number) => (
              <Option key={`${nationality}-${index}`} value={`${nationality}`}>
                {nationality}
              </Option>
            ))}
          </CustomSelect>
        </CustomFormItem>
      </CustomCol>

      <CustomCol {...defaultBreakpoints}>
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

      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Fecha de nacimiento'}
          name={'fechaNacimiento'}
          rules={[{ required: true }]}
        >
          <CustomDatePicker
            allowClear
            disabledDate={(date: moment.Moment) => {
              return date && date > moment().endOf('day')
            }}
            format={'DD/MM/YYYY'}
            placeholder={'Fecha nacimiento'}
          />
        </CustomFormItem>
      </CustomCol>

      <CustomCol {...defaultBreakpoints}>
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

      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Estado Civil'}
          name={'estadoCivil'}
          rules={[{ required: true }]}
        >
          <CustomRadioGroup
            value={entryStateSex}
            onChange={handleStateSexRadioChange}
          >
            <CustomRadio value={'S'}>Soltero(a)</CustomRadio>
            <CustomRadio value={'C'}>Casado(a)</CustomRadio>
            <CustomRadio value={'U'}>Unión Libre</CustomRadio>
          </CustomRadioGroup>
        </CustomFormItem>
      </CustomCol>

      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Categoría Solicitada'}
          name={'categoriaSolicitada'}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <CustomSelect placeholder={'Categoría solicitada'} allowClear>
            {partnersCategories.map(
              (parnertCategory: PartnersCategories, index: number) => (
                <Option
                  key={`${parnertCategory.desc}-${index}`}
                  value={`${parnertCategory.value}`}
                >
                  {parnertCategory.desc}
                </Option>
              )
            )}
          </CustomSelect>
        </CustomFormItem>
      </CustomCol>
    </CustomRow>
  )
}
export default GeneralData
