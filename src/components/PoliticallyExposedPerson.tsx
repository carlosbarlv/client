import React from 'react'
import { Select } from 'antd'
import { SelectValue } from 'antd/lib/select'
import { defaultBreakpoints, labelColFullWidth } from '../themes'
import {
  CustomCol,
  CustomDatePicker,
  CustomDivider,
  CustomFormItem,
  CustomInput,
  CustomRow,
  CustomSelect,
  CustomTitle,
  CustomTooltip,
} from '.'

const { Option } = Select

const PoliticallyExposedPerson = (): React.ReactElement => {
  const [
    entryTypePoliticallyExposedPerson,
    setEntryTypePoliticallyExposedPerson,
  ] = React.useState('')
  const handleOnPoliticallyExposedPersonelectChange = (value: SelectValue) => {
    setEntryTypePoliticallyExposedPerson(value.toString())
  }

  return (
    <CustomRow>
      <CustomDivider orientation={'left'}>
        <CustomTitle level={4}>
          Persona Expuesta Políticamente (PoliticallyExposedPerson)
        </CustomTitle>
      </CustomDivider>

      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={
            <span>
              {'¿Es una '}
              <CustomTooltip title={'Persona Expuesta Políticamente'}>
                <b>PEP</b>
              </CustomTooltip>
              ?
            </span>
          }
          name={'pep'}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <CustomSelect
            onSelect={handleOnPoliticallyExposedPersonelectChange}
            value={entryTypePoliticallyExposedPerson}
          >
            <Option value={'1'}>Si</Option>
            <Option value={'0'}>No</Option>
            <Option value={'2'}>Relacionado</Option>
          </CustomSelect>
        </CustomFormItem>
      </CustomCol>

      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Estado'}
          name={'estado'}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <CustomSelect disabled={entryTypePoliticallyExposedPerson === '0'}>
            <Option value={'V'}>Vigente</Option>
            <Option value={'I'}>Inactivo</Option>
          </CustomSelect>
        </CustomFormItem>
      </CustomCol>

      <CustomCol xs={24}>
        <CustomFormItem
          label={'Cargo'}
          name={'cargoPep'}
          {...labelColFullWidth}
        >
          <CustomSelect
            disabled={entryTypePoliticallyExposedPerson === '0'}
            style={{ width: '25%' }}
          >
            <Option value={'C'}>Cargo</Option>
          </CustomSelect>

          <CustomInput
            disabled={entryTypePoliticallyExposedPerson === '0'}
            placeholder={'Descripción cargo'}
            style={{ width: '75%' }}
          />
        </CustomFormItem>
      </CustomCol>

      <CustomCol xs={24}>
        <CustomFormItem
          label={'Entidad'}
          name={'entidadPep'}
          {...labelColFullWidth}
        >
          <CustomSelect
            disabled={entryTypePoliticallyExposedPerson === '0'}
            style={{ width: '25%' }}
          >
            <Option value={'C'}>Cargo</Option>
          </CustomSelect>

          <CustomInput
            disabled={entryTypePoliticallyExposedPerson === '0'}
            placeholder={'Descripción entidad'}
            style={{ width: '75%' }}
          />
        </CustomFormItem>
      </CustomCol>

      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem label={'Fecha inicio'} name={'fechaInicio'}>
          <CustomDatePicker
            disabled={entryTypePoliticallyExposedPerson === '0'}
            placeholder={'Fecha inicio'}
          />
        </CustomFormItem>
      </CustomCol>

      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem label={'Fecha final'} name={'fechaFinal'}>
          <CustomDatePicker
            disabled={entryTypePoliticallyExposedPerson === '0'}
            placeholder={'Fecha final'}
          />
        </CustomFormItem>
      </CustomCol>
    </CustomRow>
  )
}

export default PoliticallyExposedPerson
