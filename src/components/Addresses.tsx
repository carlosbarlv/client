import React, { useEffect, useState } from 'react'
import { Select } from 'antd'
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
import {
  getCountries,
  getMunicipalities,
  getProvinces,
  getSectors,
} from '../actions/general'
import { StoreState } from '../reducers'
import { GeneralType } from '../reducers/general'
import { useDispatch, useSelector } from 'react-redux'
import { defaultBreakpoints, labelColFullWidth } from '../themes'

const Addresses: React.FunctionComponent = () => {
  const { Option } = Select
  const dispatch = useDispatch()
  const [checkboxState, setCheckboxState] = useState(false)
  const [countryData, setCountryData] = useState('')
  const [provinceData, setProvinceData] = useState('')
  const [municipalityData, setMunicipalityData] = useState('')
  const [sectorData, setSectorData] = useState('')
  const [homeTypeState, setHomeTypeState] = useState('')
  const { countries, municipalities, provinces, sectors } = useSelector(
    (state: StoreState) => state.general
  )

  useEffect(() => {
    if (countryData === '') {
      dispatch(getCountries())
    }
  }, [dispatch, countryData])

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
          <CustomSelect placeholder={'Tipo dirección'}></CustomSelect>
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints} flex={4}>
        <CustomFormItem name={'PRINCIPAL'}>
          <CustomCheckBox
            checked={checkboxState}
            onChange={(e) => setCheckboxState(e.target.checked)}
          >
            ¿Principal?
          </CustomCheckBox>
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints} flex={2}>
        <CustomFormItem
          initialValue={'A'}
          label={'Estado'}
          name={'ESTADO'}
          rules={[{ required: true }]}
        >
          <CustomSelect>
            <Option value={'A'}>Activo</Option>
            <Option value={'I'}>Inactivo</Option>
          </CustomSelect>
        </CustomFormItem>
      </CustomCol>
      <CustomCol xs={24}>
        <CustomFormItem
          label={'País'}
          name={'PAIS'}
          rules={[{ required: true }]}
          {...labelColFullWidth}
        >
          <CustomRow>
            <CustomCol xs={8}>
              <CustomFormItem
                name={'ID_PAIS'}
                noStyle
              >
                <CustomInput
                  value={countryData}
                  disabled
                  placeholder={'ID País'}
                />
              </CustomFormItem>
            </CustomCol>
            <CustomCol xs={16}>
              <CustomFormItem noStyle>
                <CustomSelect
                  onChange={(value) => setCountryData(`${value}`)}
                  onSelect={(value) => dispatch(getProvinces(`${value}`))}
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
          rules={[{ required: true }]}
          {...labelColFullWidth}
        >
          <CustomRow>
            <CustomCol xs={8}>
              <CustomFormItem name={'ID_PROVINCIA'} noStyle>
                <CustomInput
                  value={provinceData}
                  disabled
                  placeholder={'ID Provincia'}
                />
              </CustomFormItem>
            </CustomCol>
            <CustomCol xs={16}>
              <CustomFormItem noStyle>
                <CustomSelect
                  onChange={(value) => setProvinceData(`${value}`)}
                  onSelect={(value) =>
                    dispatch(
                      getMunicipalities({
                        condition: { ID_PROVINCIA: `${value}` },
                      })
                    )
                  }
                  showSearch
                  allowClear
                  disabled={countryData === ''}
                  placeholder={'Provincia'}
                >
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
          rules={[{ required: true }]}
          {...labelColFullWidth}
        >
          <CustomRow>
            <CustomCol xs={8}>
              <CustomFormItem name={'ID_MUNICIPIO'} noStyle>
                <CustomInput
                  value={municipalityData}
                  disabled
                  placeholder={'ID Municipio'}
                />
              </CustomFormItem>
            </CustomCol>
            <CustomCol xs={16}>
              <CustomFormItem noStyle>
                <CustomSelect
                  onSelect={(value) => {
                    dispatch(
                      getSectors({
                        condition: {
                          ID_PROVINCIA: provinceData,
                          ID_MUNICIPIO: `${value}`,
                        },
                      })
                    )
                  }}
                  onChange={(value) => setMunicipalityData(`${value}`)}
                  disabled={provinceData === ''}
                  showSearch
                  allowClear
                  placeholder={'Municipio'}
                >
                  {municipalities.map(
                    (municipality: GeneralType, index: number) => (
                      <Option key={`${index}`} value={`${municipality.value}`}>
                        {municipality.desc}
                      </Option>
                    )
                  )}
                </CustomSelect>
              </CustomFormItem>
            </CustomCol>
          </CustomRow>
        </CustomFormItem>
      </CustomCol>
      <CustomCol xs={24}>
        <CustomFormItem
          label={'Sector'}
          name={'SECTOR'}
          rules={[{ required: true }]}
          {...labelColFullWidth}
        >
          <CustomRow>
            <CustomCol xs={8}>
              <CustomFormItem name={'ID_SECTOR'} noStyle>
                <CustomInput
                  value={sectorData}
                  disabled
                  placeholder={'ID Sector'}
                />
              </CustomFormItem>
            </CustomCol>
            <CustomCol xs={16}>
              <CustomFormItem noStyle>
                <CustomSelect
                  onChange={(value) => setSectorData(`${value}`)}
                  disabled={municipalityData === ''}
                  showSearch
                  allowClear
                  placeholder={'Sector'}
                >
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
          rules={[{ required: true }]}
        >
          <CustomInput placeholder={'Calle'} />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Casa'}
          name={'CASA'}
          rules={[
            {
              required: homeTypeState !== 'A',
            },
          ]}
        >
          <CustomInput
            onChange={(e) => {
              setHomeTypeState(e.target.value.length ? 'C' : '')
            }}
            disabled={homeTypeState === 'A'}
            placeholder={'Casa'}
          />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Edificio'}
          name={'EDIFICIO'}
          rules={[
            {
              required: homeTypeState !== 'C',
            },
          ]}
        >
          <CustomInput
            onChange={(e) => {
              setHomeTypeState(e.target.value.length ? 'A' : '')
            }}
            disabled={homeTypeState === 'C'}
            placeholder={'Edificio'}
          />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Apartamento'}
          name={'APARTAMENTO'}
          rules={[
            {
              required: homeTypeState !== 'C',
            },
          ]}
        >
          <CustomInput
            onChange={(e) => {
              setHomeTypeState(e.target.value.length ? 'A' : '')
            }}
            disabled={homeTypeState === 'C'}
            placeholder={'Apartamento'}
          />
        </CustomFormItem>
      </CustomCol>
      <CustomCol xs={24}>
        <CustomFormItem
          label={'Próximo a'}
          name={'PROXIMO_A'}
          rules={[{ required: true }]}
          {...labelColFullWidth}
        >
          <CustomTextArea placeholder={'Próximo a...'} />
        </CustomFormItem>
      </CustomCol>
    </CustomRow>
  )
}

export default Addresses
