import React from 'react'
import { Select } from 'antd'
import { EyeOutlined, PlusOutlined } from '@ant-design/icons'
import {
  CustomButton,
  CustomCheckBox,
  CustomCol,
  CustomDivider,
  CustomFormItem,
  CustomInput,
  CustomRow,
  CustomSelect,
  CustomSpace,
  CustomTextArea,
  CustomTitle,
} from '.'
import { defaultBreakpoints, labelColFullWidth } from '../themes'

const Addresses: React.FunctionComponent = () => {
  const { Option } = Select

  return (
    <CustomRow justify={'center'}>
      <CustomDivider orientation={'left'}>
        <CustomTitle level={4}>Direcciones</CustomTitle>
      </CustomDivider>
      <CustomCol {...defaultBreakpoints}></CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomRow justify={'end'}>
          <CustomSpace>
            <CustomFormItem>
              <CustomButton icon={<EyeOutlined />}>
                Ver direcciones
              </CustomButton>
            </CustomFormItem>
            <CustomFormItem>
              <CustomButton icon={<PlusOutlined />} type={'primary'}>
                Agregar direcciones
              </CustomButton>
            </CustomFormItem>
          </CustomSpace>
        </CustomRow>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Tipo dirección'}
          name={'TIPO_DIRECCION'}
          rules={[{ required: false }]}
        >
          <CustomSelect placeholder={'Tipo dirección'}>
            <Option value={1}>Tipo direccion</Option>
          </CustomSelect>
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints} flex={4}>
        <CustomFormItem label={'Principal?'} name={'PRINCIPAL'}>
          <CustomCheckBox />
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
                {/* TODO: no busca :/ */}
                <CustomSelect showSearch allowClear placeholder={'País'}>
                  {/* <Option value={1}>1</Option> */}
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
                <CustomSelect
                  showSearch
                  allowClear
                  placeholder={'Provincia'}
                ></CustomSelect>
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
                <CustomSelect
                  showSearch
                  allowClear
                  placeholder={'Sector'}
                ></CustomSelect>
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
