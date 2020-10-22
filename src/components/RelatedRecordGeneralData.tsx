import React, { useEffect } from 'react'
import moment from 'moment'
import { Select } from 'antd'
import { RadioChangeEvent } from 'antd/lib/radio'
import { QuestionCircleOutlined } from '@ant-design/icons'
import {
  CustomButton,
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
  CustomTitle,
  CustomTooltip,
} from '.'
import { defaultBreakpoints } from '../themes'
import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '../reducers'
import { getNationalities } from '../actions/general'

type IdType = {
  [key: string]: {
    placeholder: string
    name: string
    rules: {
      len?: number
      transform?: ((value: string) => string | number) | undefined
      type?:
        | 'string'
        | 'number'
        | 'boolean'
        | 'object'
        | 'enum'
        | 'method'
        | 'regexp'
        | 'integer'
        | 'float'
        | 'date'
        | 'url'
        | 'hex'
        | 'email'
        | undefined
    }
  }
}

const RelatedRecordGeneralData: React.FunctionComponent = () => {
  const { Option } = Select

  const dispatch = useDispatch()
  const { nationalities } = useSelector((state: StoreState) => state.general)
  const [entryIdTypeState, setEntryIdTypeState] = React.useState('')
  const idType: IdType = {
    C: {
      placeholder: '00000000000',
      name: 'DOCUMENTO_IDENTIDAD',
      rules: {
        len: 11,
        transform: (value: string) => (Number(value) ? value.length : value),
        type: 'number',
      },
    },
    P: {
      placeholder: 'SC0785877',
      name: 'NO_PASAPORTE',
      rules: {
        type: 'string',
      },
    },
    '': {
      placeholder: 'Elige el tipo de documento (Cédula o pasaporte)',
      name: '',
      rules: {
        type: 'string',
      },
    },
  }

  useEffect(() => {
    dispatch(getNationalities())
  }, [dispatch])

  return (
    <CustomRow>
      <CustomDivider orientation={'left'}>
        <CustomTitle level={4}>Datos Generales</CustomTitle>
      </CustomDivider>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Nombres'}
          name={'NOMBRES'}
          rules={[{ required: true }]}
        >
          <CustomInput placeholder={'Nombres'} />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Apellidos'}
          name={'APELLIDOS'}
          rules={[{ required: true }]}
        >
          <CustomInput placeholder={'Apellidos'} />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem label={'Apodo'} name={'APODO'}>
          <CustomInput placeholder={'Apodo'} />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}></CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem label={'Tipo documento'}>
          <CustomRadioGroup
            onChange={(e: RadioChangeEvent) => {
              setEntryIdTypeState(e.target.value)
            }}
            value={entryIdTypeState}
          >
            <CustomRadio value={'C'}>Cédula</CustomRadio>
            <CustomRadio value={'P'}>Pasaporte</CustomRadio>
          </CustomRadioGroup>
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Doc. Identidad'}
          name={idType[entryIdTypeState].name}
          normalize={(value: string) => value.toUpperCase()}
          rules={[
            Object.assign({ required: true }, idType[entryIdTypeState].rules),
          ]}
        >
          <CustomInput
            disabled={entryIdTypeState === ''}
            placeholder={idType[entryIdTypeState].placeholder}
          />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Fecha nac.'}
          name={'FECHA_NAC'}
          rules={[{ required: true }]}
        >
          <CustomDatePicker
            allowClear
            placeholder={'Fecha de nacimeinto'}
            disabledDate={(date: moment.Moment) => {
              return date && date > moment().endOf('day')
            }}
          />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Sexo'}
          name={'SEXO'}
          rules={[{ required: true }]}
        >
          <CustomRadioGroup>
            <CustomRadio value={'M'}>Masculino</CustomRadio>
            <CustomRadio value={'F'}>Femenino</CustomRadio>
          </CustomRadioGroup>
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Estado civil'}
          name={'ESTADO_CIVIL'}
          rules={[{ required: true }]}
        >
          <CustomRadioGroup>
            <CustomRadio value={'S'}>Soltero(a)</CustomRadio>
            <CustomRadio value={'C'}>Casado(a)</CustomRadio>
            <CustomRadio value={'U'}>Unión libre</CustomRadio>
          </CustomRadioGroup>
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}></CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Nacionalidadd'}
          name={'NACIONALIDAD'}
          rules={[{ required: true }]}
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
      <CustomCol {...defaultBreakpoints}></CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Posición'}
          name={'POSICION_EMPRESA'}
          rules={[{ required: true }]}
        >
          <CustomInput placeholder={'Posición'} />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem label={'Tiempo empresa'}>
          <CustomInputGroup>
            <CustomFormItem
              label={'Años'}
              name={'ANIO_TIEMPO_EMPRESA'}
              noStyle
              rules={[{ required: true }]}
            >
              <CustomInputNumber
                placeholder={'Años'}
                type={'number'}
                style={{ width: '40%' }}
              />
            </CustomFormItem>
            <CustomFormItem
              label={'Meses'}
              name={'MESES_TIEMPO_EMPRESA'}
              noStyle
              rules={[{ required: true }]}
            >
              <CustomInputNumber
                placeholder={'Meses'}
                type={'number'}
                max={11}
                style={{ width: '40%' }}
              />
            </CustomFormItem>
            <CustomTooltip title={'Años y Meses en la empresa'}>
              <CustomButton icon={<QuestionCircleOutlined />} type={'link'} />
            </CustomTooltip>
          </CustomInputGroup>
        </CustomFormItem>
      </CustomCol>
    </CustomRow>
  )
}

export default RelatedRecordGeneralData
