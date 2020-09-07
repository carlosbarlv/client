import React from 'react'
import { Select } from 'antd'
import { SelectValue } from 'antd/lib/select'
import {
  defaultBreakpoints,
  defaultBreakpointsForInputGroupLeft,
  defaultBreakpointsForInputGroupRight,
  labelColFullWidth,
} from '../themes'
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
import moment from 'moment'

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
        <CustomTitle level={4}>Persona Expuesta Políticamente</CustomTitle>
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
          name={'IND_PEP'}
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
          name={'ENTIDAD_PEP'}
          rules={[
            {
              required: entryTypePoliticallyExposedPerson !== '0',
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
        <CustomFormItem label={'Cargo'} {...labelColFullWidth}>
          <CustomRow justify={'start'}>
            <CustomCol {...defaultBreakpointsForInputGroupLeft}>
              <CustomFormItem
                label={'Cargo'}
                name={'ID_CARGO'}
                noStyle
                rules={[
                  {
                    required: entryTypePoliticallyExposedPerson !== '0',
                  },
                ]}
              >
                <CustomSelect
                  disabled={entryTypePoliticallyExposedPerson === '0'}
                  placeholder={'Id cargo'}
                >
                  <Option value={'C'}>Cargo</Option>
                </CustomSelect>
              </CustomFormItem>
            </CustomCol>

            <CustomCol {...defaultBreakpointsForInputGroupRight}>
              <CustomFormItem
                label={'Descripción cargo'}
                name={'descCargo'}
                noStyle
                rules={[
                  {
                    required: entryTypePoliticallyExposedPerson !== '0',
                  },
                ]}
              >
                <CustomInput
                  disabled={entryTypePoliticallyExposedPerson === '0'}
                  placeholder={'Descripción cargo'}
                />
              </CustomFormItem>
            </CustomCol>
          </CustomRow>
        </CustomFormItem>
      </CustomCol>

      <CustomCol xs={24}>
        <CustomFormItem label={'Entidad'} {...labelColFullWidth}>
          <CustomRow justify={'start'}>
            <CustomCol {...defaultBreakpointsForInputGroupLeft}>
              <CustomFormItem
                label={'Entidad'}
                name={'entidadPep'}
                noStyle
                rules={[
                  { required: entryTypePoliticallyExposedPerson !== '0' },
                ]}
                {...labelColFullWidth}
              >
                <CustomSelect
                  disabled={entryTypePoliticallyExposedPerson === '0'}
                  placeholder={'Id entidad'}
                >
                  <Option value={'C'}>Cargo</Option>
                </CustomSelect>
              </CustomFormItem>
            </CustomCol>

            <CustomCol {...defaultBreakpointsForInputGroupRight}>
              <CustomFormItem
                label={'Descripción entidad'}
                name={'descEntidad'}
                noStyle
                rules={[
                  { required: entryTypePoliticallyExposedPerson !== '0' },
                ]}
                {...labelColFullWidth}
              >
                <CustomInput
                  disabled={entryTypePoliticallyExposedPerson === '0'}
                  placeholder={'Descripción entidad'}
                />
              </CustomFormItem>
            </CustomCol>
          </CustomRow>
        </CustomFormItem>
      </CustomCol>

      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem label={'Fecha inicio'} name={'fechaInicio'}>
          <CustomDatePicker
            disabledDate={(date: moment.Moment) => {
              return date && date > moment().endOf('day')
            }}
            disabled={entryTypePoliticallyExposedPerson === '0'}
            placeholder={'Fecha inicio'}
          />
        </CustomFormItem>
      </CustomCol>

      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem label={'Fecha final'} name={'fechaFinal'}>
          <CustomDatePicker
            disabledDate={(date: moment.Moment) => {
              return date && date < moment().endOf('day')
            }}
            disabled={entryTypePoliticallyExposedPerson === '0'}
            placeholder={'Fecha final'}
          />
        </CustomFormItem>
      </CustomCol>
    </CustomRow>
  )
}

export default PoliticallyExposedPerson
