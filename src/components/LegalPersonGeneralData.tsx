import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Select } from 'antd'
import {
  CustomCol,
  CustomDivider,
  CustomFormItem,
  CustomInput,
  CustomInputGroup,
  CustomInputNumber,
  CustomRow,
  CustomSelect,
  CustomTitle,
} from '.'
import { defaultBreakpoints, labelColFullWidth } from '../themes'
import { getPartnersCategories } from '../actions/general'
import { PartnersCategories } from '../reducers/general'
import { StoreState } from '../reducers'

const GeneralData: React.FunctionComponent = () => {
  const { Option } = Select

  const dispatch = useDispatch()

  const { partnersCategories } = useSelector(
    (state: StoreState) => state.general
  )

  useEffect(() => {
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
      <CustomCol xs={24}>
        <CustomFormItem
          label={'Nombre empresa'}
          name={'nombreEmpresa'}
          {...labelColFullWidth}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <CustomInput placeholder={'Nombre de la empresa'} />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Rnc'}
          name={'rnc'}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <CustomInput placeholder={'Rnc'} />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}></CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Servicios ofrecidos'}
          name={'serviciosOfrecidos'}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <CustomInput placeholder="Servicios ofrecidos" />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Tiempo empresa'}
          name={'tiempoEmpresa'}
          rules={[{ required: true }]}
        >
          <CustomInputGroup compact>
            <CustomFormItem label={'Años'} rules={[{ required: true }]}>
              <CustomInputNumber
                placeholder={'Años en empresa'}
                type={'number'}
              />
            </CustomFormItem>
            <CustomFormItem label={'Meses'} rules={[{ required: true }]}>
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
          label={'Cant. Colaboradores'}
          name={'cantidadColaboradores'}
          rules={[{ required: true }]}
        >
          <CustomInputNumber
            placeholder={'Cantidad colaboradores'}
            type={'number'}
          />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Categoría socios'}
          name={'categoriaSocio'}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <CustomSelect placeholder="Categoría socios" allowClear>
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
