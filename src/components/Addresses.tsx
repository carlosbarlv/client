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
              <CustomButton type={'primary'} icon={<EyeOutlined />}>
                Ver direcciones
              </CustomButton>
            </CustomFormItem>
            <CustomFormItem>
              <CustomButton icon={<PlusOutlined />}>
                Agregar direcciones
              </CustomButton>
            </CustomFormItem>
          </CustomSpace>
        </CustomRow>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem
          label={'Tipo dirección'}
          name={'tipoDireccion'}
          rules={[{ required: true }]}
        >
          <CustomSelect placeholder={'Tipo dirección'}>
            <Option value={1}>Tipo direccion</Option>
          </CustomSelect>
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints} flex={4}>
        <CustomFormItem label={'Principal?'} name={'principal'}>
          <CustomCheckBox />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints} flex={2}>
        <CustomFormItem
          label={'Estado'}
          name={'estado'}
          rules={[{ required: true }]}
        >
          <CustomSelect placeholder={'Estado'}></CustomSelect>
        </CustomFormItem>
      </CustomCol>
      <CustomCol xs={24}>
        <CustomFormItem
          label={'País'}
          name={'pais'}
          rules={[{ required: true }]}
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
          name={'provincia'}
          rules={[{ required: true }]}
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
          name={'municipio'}
          rules={[{ required: true }]}
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
          name={'sector'}
          rules={[{ required: true }]}
          {...labelColFullWidth}
        >
          <CustomRow>
            <CustomCol xs={8}>
              <CustomFormItem noStyle>
                <CustomInput disabled placeholder={'ID Sector'} />
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
          name={'calle'}
          rules={[{ required: true }]}
        >
          <CustomInput placeholder={'Calle'} />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem label={'Casa'} name={'casa'}>
          <CustomInput placeholder={'Casa'} />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem label={'Edificio'} name={'edificio'}>
          <CustomInput placeholder={'Edificio'} />
        </CustomFormItem>
      </CustomCol>
      <CustomCol {...defaultBreakpoints}>
        <CustomFormItem label={'Apartamento'} name={'Apartamento'}>
          <CustomInput placeholder={'Apartamento'} />
        </CustomFormItem>
      </CustomCol>
      <CustomCol xs={24}>
        <CustomFormItem
          label={'Próximo a'}
          name={'proximoA'}
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
