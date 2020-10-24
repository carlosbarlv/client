import React, { useEffect, useState } from 'react'
import { Select } from 'antd'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import {
  CustomCheckBox,
  CustomCol,
  CustomDivider,
  CustomFormItem,
  CustomInput,
  CustomRow,
  CustomSelect,
  CustomTextArea,
  CustomTitle,
} from '.'
import { defaultBreakpoints, labelColFullWidth } from '../themes'
import { getCountries, getProvinces, getSectors } from '../actions/general'
import { StoreState } from '../reducers'
import { GeneralType } from '../reducers/general'
import { useDispatch, useSelector } from 'react-redux'

const Addresses: React.FunctionComponent = () => {
  const { Option } = Select
  const dispatch = useDispatch()
  const { countries, provinces, sectors } = useSelector(
    (state: StoreState) => state.general
  )
  const [checkboxState, setCheckboxState] = useState(false)
  const [countryData, setCountryData] = useState('')

  useEffect(() => {
    dispatch(getCountries())
    dispatch(getProvinces(countryData))
    dispatch(
      getSectors({
        condition: {
          ID_PROVINCIA: '1100',
          ID_MUNICIPIO: '1101',
        },
      })
    )
  }, [dispatch, countryData])

  const handleOnChangeCheckbox = (e: CheckboxChangeEvent) =>
    setCheckboxState(e.target.checked)

  return (
    <CustomRow justify={'center'}>
      <CustomDivider orientation={'left'}>
        <CustomTitle level={4}>Direcciones</CustomTitle>
      </CustomDivider>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Tipo dirección'}
          name={'TIPO_DIRECCION'}
          rules={[{ required: false }]}
        >
          <CustomSelect placeholder={'Tipo dirección'}>
            {/* <Option onChange={handleOnChange}>Tipo direccion</Option> */}
          </CustomSelect>
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints} flex={4}>
        <CustomFormItem name={'PRINCIPAL'}>
          <CustomCheckBox
            checked={checkboxState}
            onChange={handleOnChangeCheckbox}
          >
            ¿Principal?
          </CustomCheckBox>
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints} flex={2}>
        <CustomFormItem
          label={'Estado'}
          name={'ESTADO'}
          rules={[{ required: false }]}
        >
          <CustomSelect placeholder={'Estado'}></CustomSelect>
        </CustomFormItem>
      </CustomCol>
      <CustomCol xs={24}>
        <CustomFormItem
          label={'País'}
          name={'PAIS'}
          rules={[{ required: false }]}
          {...labelColFullWidth}
        >
          <CustomRow>
            <CustomCol xs={8}>
              <CustomFormItem noStyle>
                <CustomInput disabled placeholder={'ID País'} />
              </CustomFormItem>
            </CustomCol>
            <CustomCol xs={16}>
              <CustomFormItem noStyle>
                <CustomSelect
                  onChange={(value) => {
                    setCountryData(`${value}`)
                  }}
                  showSearch
                  allowClear
                  placeholder={'País'}
                >
                  {countries.map((country: GeneralType, index: number) => (
                    <Option key={`${index}`} value={`${country.value}`}>
                      {country.desc}
                    </Option>
                  ))}
                </CustomSelect>
              </CustomFormItem>
            </CustomCol>
          </CustomRow>
        </CustomFormItem>
      </CustomCol>
      <CustomCol xs={24}>
        <CustomFormItem
          label={'Provincia'}
          name={'PROVINCIA'}
          rules={[{ required: false }]}
          {...labelColFullWidth}
        >
          <CustomRow>
            <CustomCol xs={8}>
              <CustomFormItem noStyle>
                <CustomInput disabled placeholder={'ID Provincia'} />
              </CustomFormItem>
            </CustomCol>
            <CustomCol xs={16}>
              <CustomFormItem noStyle>
                <CustomSelect showSearch allowClear placeholder={'Provincia'}>
                  {provinces.map((province: GeneralType, index: number) => (
                    <Option key={`${index}`} value={`${province.value}`}>
                      {province.desc}
                    </Option>
                  ))}
                </CustomSelect>
              </CustomFormItem>
            </CustomCol>
          </CustomRow>
        </CustomFormItem>
      </CustomCol>
      <CustomCol xs={24}>
        <CustomFormItem
          label={'Municipio'}
          name={'MUNICIPIO'}
          rules={[{ required: false }]}
          {...labelColFullWidth}
        >
          <CustomRow>
            <CustomCol xs={8}>
              <CustomFormItem noStyle>
                <CustomInput disabled placeholder={'ID Municipio'} />
              </CustomFormItem>
            </CustomCol>
            <CustomCol xs={16}>
              <CustomFormItem noStyle>
                <CustomSelect
                  showSearch
                  allowClear
                  placeholder={'Municipio'}
                ></CustomSelect>
              </CustomFormItem>
            </CustomCol>
          </CustomRow>
        </CustomFormItem>
      </CustomCol>
      <CustomCol xs={24}>
        <CustomFormItem
          label={'Sector'}
          name={'SECTOR'}
          rules={[{ required: false }]}
          {...labelColFullWidth}
        >
          <CustomRow>
            <CustomCol xs={8}>
              <CustomFormItem noStyle>
                <CustomInput disabled placeholder={'ID SECTOR'} />
              </CustomFormItem>
            </CustomCol>
            <CustomCol xs={16}>
              <CustomFormItem noStyle>
                <CustomSelect showSearch allowClear placeholder={'Sector'}>
                  {sectors.map((sector: GeneralType, index: number) => (
                    <Option key={`${index}`} value={`${sector.value}`}>
                      {sector.desc}
                    </Option>
                  ))}
                </CustomSelect>
              </CustomFormItem>
            </CustomCol>
          </CustomRow>
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Calle'}
          name={'CALLE'}
          rules={[{ required: false }]}
        >
          <CustomInput placeholder={'Calle'} />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem label={'Casa'} name={'CASA'}>
          <CustomInput placeholder={'Casa'} />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem label={'Edificio'} name={'EDIFICIO'}>
          <CustomInput placeholder={'Edificio'} />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem label={'Apartamento'} name={'APARTAMENTO'}>
          <CustomInput placeholder={'Apartamento'} />
        </CustomFormItem>
      </CustomCol>
      <CustomCol xs={24}>
        <CustomFormItem
          label={'Próximo a'}
          name={'PROXIMO_A'}
          rules={[{ required: false }]}
          {...labelColFullWidth}
        >
          <CustomTextArea placeholder={'Próximo a...'} />
        </CustomFormItem>
      </CustomCol>
    </CustomRow>
  )
}

export default Addresses
