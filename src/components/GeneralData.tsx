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
  CustomButton,
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
import { PlusOutlined } from '@ant-design/icons'

const { Option } = Select

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

const GeneralData = (): React.ReactElement => {
  const dispatch = useDispatch()
  const [entryStateSex, setEntryStateSex] = React.useState('M')
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
  const { nationalities, partnersCategories, activityParameters } = useSelector(
    (state: StoreState) => state.general
  )
  const handleStateSexRadioChange = (e: RadioChangeEvent) => {
    setEntryStateSex(e.target.value)
  }

  useEffect(() => {
    dispatch(getNationalities())
    if (activityParameters.ID_LISTA_CATEGORIAS)
      dispatch(getPartnersCategories(activityParameters.ID_LISTA_CATEGORIAS))
  }, [dispatch, activityParameters.ID_LISTA_CATEGORIAS])

  return (
    <div>
      <CustomRow justify={'start'}>
        <CustomDivider orientation={'left'}>
          <CustomTitle level={4}>Datos Generales</CustomTitle>
        </CustomDivider>
        <CustomCol {...defaultBreakpoints}>
          <CustomFormItem label={'Código'} name={'ID_PERSONA'}>
            <CustomInput disabled placeholder={'Código persona'} />
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
            label={'Nombre(s)'}
            name={'NOMBRES'}
            onlyLetters
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
            onlyLetters
            name={'APELLIDOS'}
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
          <CustomFormItem label={'Apodo'} onlyLetters name={'APODO'}>
            <CustomInput placeholder={'Apodo (opcional)'} />
          </CustomFormItem>
        </CustomCol>
        <CustomCol {...defaultBreakpoints}>
          <CustomFormItem
            label={'Nacionalidad'}
            name={'NACIONALIDAD'}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <CustomSelect placeholder={'Nacionalidad'} allowClear showSearch>
              {nationalities.map((nationality: string, index: number) => (
                <Option
                  key={`${nationality}-${index}`}
                  value={`${nationality}`}
                >
                  {nationality}
                </Option>
              ))}
            </CustomSelect>
          </CustomFormItem>
        </CustomCol>

        <CustomCol {...defaultBreakpoints}>
          <CustomFormItem
            label={'Lugar de nac.'}
            onlyLetters
            name={'LUGAR_NAC'}
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
            name={'FECHA_NAC'}
            rules={[{ required: true }]}
            labelCol={{
              xs: 24,
              sm: 8,
              md: 12,
              lg: 8,
            }}
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
            name={'SEXO'}
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
            name={'ESTADO_CIVIL'}
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
            name={'ID_CATEGORIA_SOCIO'}
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

      <CustomRow justify={'end'}>
        <CustomButton icon={<PlusOutlined />} type={'primary'}>
          Agregar Relacionado
        </CustomButton>
      </CustomRow>
    </div>
  )
}
export default GeneralData
