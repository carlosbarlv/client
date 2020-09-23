import React, { useEffect } from 'react'
import moment from 'moment'
import { Select } from 'antd'
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

const RelatedRecordGeneralData: React.FunctionComponent = () => {
  const { Option } = Select

  const dispatch = useDispatch()
  const { nationalities } = useSelector((state: StoreState) => state.general)

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
          name={'nombres'}
          rules={[{ required: true }]}
        >
          <CustomInput placeholder={'Nombres'} />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Apellidos'}
          name={'apellidos'}
          rules={[{ required: true }]}
        >
          <CustomInput placeholder={'Apellidos'} />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Apodo'}
          name={'apodo'}
          rules={[{ required: true }]}
        >
          <CustomInput placeholder={'Apodo'} />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}></CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Doc. Identidad'}
          name={'documentoIdentidad'}
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
          <CustomInput
            placeholder={'Documento de identidad'}
            autoComplete={'off'}
          />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'No. Pasaporte'}
          name={'numeroPasaporte'}
          rules={[{ required: true }]}
        >
          <CustomInput placeholder={'No. Pasaporte'} />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Fecha nac.'}
          name={'fechaNacimeinto'}
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
          name={'sexo'}
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
          name={'estadoCivil'}
          rules={[{ required: true }]}
        >
          <CustomRadioGroup>
            <CustomRadio value={'S'}>Soltero(a)</CustomRadio>
            <CustomRadio value={'C'}>Casado(a)</CustomRadio>
            <CustomRadio value={'UL'}>Unión libre</CustomRadio>
          </CustomRadioGroup>
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}></CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Nacionalidadd'}
          name={'naccionalidad'}
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
          name={'posicion'}
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
              name={'años'}
              noStyle
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <CustomInputNumber
                placeholder={'Años'}
                type={'number'}
                style={{ width: '40%' }}
              />
            </CustomFormItem>
            <CustomFormItem
              label={'Meses'}
              name={'meses'}
              noStyle
              rules={[
                {
                  required: true,
                },
              ]}
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
