import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PlusOutlined } from '@ant-design/icons'
import { Select } from 'antd'
import {
  CustomButton,
  CustomCol,
  CustomDivider,
  CustomForm,
  CustomFormContainer,
  CustomFormItem,
  CustomInput,
  CustomInputGroup,
  CustomInputNumber,
  CustomLayout,
  CustomRow,
  CustomSelect,
  CustomSpace,
  CustomTitle,
  LegalRepresentatives,
} from '../components'
import {
  defaultBreakpoints,
  formItemLayout,
  labelColFullWidth,
} from '../themes'
import { getPartnersCategories } from '../actions/general'
import { validateMessages } from '../constants/general'
import { PartnersCategories } from '../reducers/general'
import { StoreState } from '../reducers'

const LegalPerson = (): React.ReactElement => {
  const { Option } = Select

  const dispatch = useDispatch()

  const { partnersCategories } = useSelector(
    (state: StoreState) => state.general
  )

  useEffect(() => {
    dispatch(getPartnersCategories())
  }, [dispatch])

  return (
    <CustomRow justify={'center'}>
      <CustomCol xs={24} xl={18}>
        <CustomLayout
          style={{
            background: 'white',
            padding: '35px 20px',
            boxShadow:
              '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <CustomForm {...formItemLayout} validateMessages={validateMessages}>
            <CustomFormContainer>
              <CustomRow justify={'start'}>
                <CustomDivider orientation={'left'}>
                  <CustomTitle level={4}>Datos Generales</CustomTitle>
                </CustomDivider>
                <CustomCol {...defaultBreakpoints}>
                  <CustomFormItem label={'Codigo'} name={'codigo'}>
                    <CustomInput disabled placeholder={'Código persona'} />
                  </CustomFormItem>
                </CustomCol>
                <CustomCol xs={24}>
                  <CustomFormItem
                    label={'Nombre Empresa'}
                    name={'nombreEmpresa'}
                    {...labelColFullWidth}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <CustomInput placeholder={'Nombre de la Empresa'} />
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
                    label={'Servicios Ofrecidos'}
                    name={'serviciosOfrecidos'}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <CustomInput placeholder="Servicios Ofrecidos" />
                  </CustomFormItem>
                </CustomCol>
                <CustomCol {...defaultBreakpoints}>
                  <CustomFormItem
                    label={'Tiempo empresa'}
                    name={'tiempoEmpresa'}
                    rules={[{ required: true }]}
                  >
                    <CustomInputGroup compact>
                      <CustomFormItem
                        label={'Años'}
                        rules={[{ required: true }]}
                      >
                        <CustomInputNumber
                          placeholder={'Años en empresa'}
                          type={'number'}
                        />
                      </CustomFormItem>
                      <CustomFormItem
                        label={'Meses'}
                        rules={[{ required: true }]}
                      >
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
                      placeholder={'Cantidad Colaboradores'}
                      type={'number'}
                    />
                  </CustomFormItem>
                </CustomCol>
                <CustomCol {...defaultBreakpoints}>
                  <CustomFormItem
                    label={'Categoría Socios'}
                    name={'categoriaSocio'}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <CustomSelect placeholder="Categoría Socios" allowClear>
                      {partnersCategories.map(
                        (
                          parnertCategory: PartnersCategories,
                          index: number
                        ) => (
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
                  Agregar representante
                </CustomButton>
              </CustomRow>
              <CustomSpace direction={'vertical'} size={'large'}>
                <LegalRepresentatives />
                <CustomRow justify={'start'}>
                  <CustomFormItem>
                    <CustomButton htmlType={'submit'} type={'primary'}>
                      Guardar
                    </CustomButton>
                  </CustomFormItem>
                </CustomRow>
              </CustomSpace>
            </CustomFormContainer>
          </CustomForm>
        </CustomLayout>
      </CustomCol>
    </CustomRow>
  )
}

export default LegalPerson
