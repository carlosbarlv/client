import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Select } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import {
  CustomButton,
  CustomCol,
  CustomDivider,
  CustomFormItem,
  CustomInput,
  CustomInputGroup,
  CustomInputNumber,
  CustomRow,
  CustomSelect,
  CustomTitle,
  CustomTooltip,
} from '.'
import { defaultBreakpoints, labelColFullWidth } from '../themes'
import { getPartnersCategories } from '../actions/general'
import { PartnersCategories } from '../reducers/general'
import { StoreState } from '../reducers'

const GeneralData: React.FunctionComponent = () => {
  const { activityParameters } = useSelector(
    (state: StoreState) => state.general
  )
  const { Option } = Select
  const dispatch = useDispatch()

  const { partnersCategories } = useSelector(
    (state: StoreState) => state.general
  )

  useEffect(() => {
    dispatch(getPartnersCategories(activityParameters.ID_LISTA_CATEGORIAS))
  }, [dispatch, activityParameters.ID_LISTA_CATEGORIAS])

  return (
    <CustomRow justify={'start'}>
      <CustomDivider orientation={'left'}>
        <CustomTitle level={4}>Datos Generales</CustomTitle>
      </CustomDivider>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem label={'Código'} name={'CODIGO'}>
          <CustomInput disabled placeholder={'Código persona'} />
        </CustomFormItem>
      </CustomCol>
      <CustomCol xs={24}>
        <CustomFormItem
          label={'Nombre empresa'}
          name={'NOMBRE_EMPRESA'}
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
          name={'RNC'}
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
          name={'SERVICIOS_OFRECIDOS'}
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
        <CustomFormItem label={'Tiempo empresa'}>
          <CustomInputGroup>
            <CustomFormItem
              label={'Años'}
              name={'ANIO_TIEMPO_EMPRESA'}
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
              name={'MESES_TIEMPO_EMPRESA'}
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

      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Cant. Colaboradores'}
          name={'CANT_COLABORADORES'}
          rules={[{ required: true }]}
        >
          <CustomInputNumber
            placeholder={'Cantidad colaboradores'}
            type={'number'}
            style={{ width: '40%' }}
          />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Categoría socios'}
          name={'ID_CATEGORIA_SOCIO'}
          rules={[
            {
              required: false,
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
