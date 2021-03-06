import React, { useState } from 'react'
import { Form } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import {
  AddressesForm,
  CustomButton,
  CustomCol,
  CustomForm,
  CustomFormContainer,
  CustomFormItem,
  CustomFormProvider,
  CustomLayout,
  CustomRow,
  CustomSpace,
  CustomStep,
  CustomSteps,
  GeneralData,
  LegalRepresentatives,
} from '../components'
import {
  ArrowLeftOutlined,
  CheckOutlined,
  DeliveredProcedureOutlined,
} from '@ant-design/icons'
import { formItemLayout } from '../themes'
import { validateMessages } from '../constants/general'
import { showNotification } from '../utils/general'
import { StoreState } from '../reducers'
import { getSessionInfo } from '../utils/session'
import { createLegalPerson, createPhysicalPerson } from '../actions/Person'
import { PersonType } from '../reducers/Person'
import { createAddresses } from '../actions/addresses'
import { AddressType } from '../reducers/addresses'

type Steps = {
  description: string
  index: string
  node: React.ReactNode
  title: string
}

const LegalPerson = (): React.ReactElement => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const [stepPositionState, setStepPositionState] = useState(2)
  const [personData, setPersonData] = useState({})
  const [relatedData, setRelatedData] = useState({})
  const [addressData, setAddressData] = useState({})
  const { Person } = useSelector((state: StoreState) => state.Person)
  const { activityParameters } = useSelector(
    (state: StoreState) => state.general
  )

  const handleOnFinishGeneral = () => {
    const person = personData as PersonType

    person.ID_EMPRESA = getSessionInfo().businessId
    person.RAZON_SOCIAL = `${person.NOMBRE_EMPRESA}`
    person.TIPO_ENTIDAD = 'E'
    person.ESTADO = 'A'
    person.ID_CONDICION = '30'
    person.ID_TIPO_IDENT = 1

    person.ID_LIST_TIPO_PERSONA = Number(
      activityParameters.ID_LIST_TIPO_PERSONA
    )
    person.ID_LIST_TIPO_ENTIDAD = Number(
      activityParameters.ID_LIST_TIPO_ENTIDAD
    )

    //eliminar los campos no requeridos antes de mandar al api
    delete person.ID_PERSONA
    delete person.USUARIO_INSERCION

    dispatch(createLegalPerson(person))
  }

  const handleOnFinishRelated = () => {
    const related = relatedData as PersonType & {
      PROVINCIA?: string
      MUNICIPIO?: string
      PAIS?: string
      CASA?: string
      SECTOR?: string
      ESTADO?: string
      CALLE?: string
      PROXIMO_A?: string
    }

    related.ID_PERSONA = Person.ID_PERSONA
    related.ID_EMPRESA = getSessionInfo().businessId
    related.RAZON_SOCIAL = `${related.NOMBRES} ${related.APELLIDOS}`
    related.ESTADO = 'A'
    related.ID_LIST_TIPO_PERSONA = Number(1)
    related.ID_LIST_TIPO_ENTIDAD = Number(1)
    related.TIPO_ENTIDAD = 'C'
    related.ID_CONDICION = '30'
    related.ID_TIPO_IDENT = 1
    related.ID_MONEDA_DEF = '4'

    delete related.PROVINCIA
    delete related.MUNICIPIO
    delete related.PAIS
    delete related.CASA
    delete related.CALLE
    delete related.SECTOR
    delete related.PROXIMO_A

    dispatch(createPhysicalPerson(related))
  }

  const handleOnFinishAddress = () => {
    const address = addressData as AddressType

    address.ID_EMPRESA = getSessionInfo().businessId
    address.ID_PERSONA = Person.ID_PERSONA || '3'
    address.ID_LISTA = 1 //Que va en este parametro?
    address.LINEA1 = `Calle ${address.CALLE}`
    address.LINEA2 = address.CASA
    address.LINEA3 = address.PROXIMO_A
    address.DEFECTO = address.PRINCIPAL ? 0 : 1
    address.VALOR = '1'
    address.ID_ESTADO = '1'
    address.ID_PAIS = address.PAIS
    address.ID_SECTOR = address.SECTOR
    address.ID_CIUDAD = address.PROVINCIA

    delete address.PAIS
    delete address.PROVINCIA
    delete address.MUNICIPIO
    delete address.SECTOR
    delete address.PRINCIPAL
    delete address.PROXIMO_A
    delete address.TIPO_DIRECCION

    dispatch(createAddresses(address))
  }

  const handleFormChange = (data: {}, index: string) => {
    if (index === 'RELACIONADOS') {
      setRelatedData(Object.assign(relatedData, data))
    } else if (index === 'DIRECCIONES') {
      setAddressData(Object.assign(addressData, data))
    }
  }

  const steps: Steps[] = [
    {
      title: 'Datos generales',
      description: 'Información básica',
      node: <GeneralData />,
      index: 'GENERAL',
    },
    {
      title: 'Representantes legales',
      description: 'Agregar representantes legales',
      node: (
        <LegalRepresentatives
          onModalFormChange={handleFormChange}
          saveData={handleOnFinishRelated}
        />
      ),
      index: 'RELATED',
    },
    {
      title: 'Direciones y Teléfonos',
      description: 'Información de dirección',
      node: (
        <AddressesForm
          onModalFormChange={handleFormChange}
          saveData={handleOnFinishAddress}
        />
      ),
      index: 'ADDRESS',
    },
  ]

  const handleNextButtonOnClick = async (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    try {
      await form.validateFields()

      switch (steps[stepPositionState].index) {
        case 'GENERAL': {
          const data = form.getFieldsValue()
          setPersonData(Object.assign(personData, data))
          handleOnFinishGeneral()
          form.resetFields()
          break
        }
        case 'RELATED':
        case 'ADDRESS':
        default:
          event.preventDefault()
      }
      if (stepPositionState < steps.length - 1) {
        setStepPositionState(stepPositionState + 1)
      }
    } catch (error) {
      showNotification({
        title: 'Faltan datos',
        description: 'Por favor llenar los campos requeridos.',
        type: 'error',
      })
    }
  }

  const handlePrevButtonOnClick = () => {
    if (stepPositionState > 0) {
      setStepPositionState(stepPositionState - 1)
    }
  }

  return (
    <CustomRow justify={'center'}>
      <CustomCol xs={24} xl={18}>
        <CustomLayout
          style={{
            background: 'white',
            padding: '35px 20px',
            boxShadow:
              '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
          }}
        >
          <CustomFormProvider
            onFormFinish={(name, { values, forms }) => {
              if (name === 'legalPerson') {
                const { legalPerson } = forms
                const relacionados =
                  legalPerson.getFieldValue('relacionados') || []
                legalPerson.setFieldsValue({
                  relacionados: [...relacionados, values],
                })
              }

              if (name === 'addressesForm') {
                const { addressesForm } = forms
                const address = addressesForm.getFieldValue('address') || []
                addressesForm.setFieldsValue({
                  address: [...address, values],
                })
              }
            }}
          >
            <CustomForm
              {...formItemLayout}
              form={form}
              name={'LEGAL_PERSON'}
              validateMessages={validateMessages}
            >
              <CustomFormContainer>
                <CustomSteps current={stepPositionState}>
                  {steps.map((step: Steps) => (
                    <CustomStep
                      description={step.description}
                      key={step.title}
                      title={step.title}
                    />
                  ))}
                </CustomSteps>
                {steps[stepPositionState].node}

                <CustomRow justify={'start'} style={{ marginTop: 20 }}>
                  <CustomSpace>
                    {stepPositionState > 0 && (
                      <CustomFormItem>
                        <CustomButton
                          htmlType={'button'}
                          icon={<ArrowLeftOutlined />}
                          onClick={handlePrevButtonOnClick}
                          disabled={stepPositionState === 1 ? true : false}
                        >
                          Anterior
                        </CustomButton>
                      </CustomFormItem>
                    )}
                    <CustomFormItem>
                      <CustomButton
                        htmlType={'submit'}
                        icon={
                          stepPositionState < steps.length - 1 ? (
                            <DeliveredProcedureOutlined />
                          ) : (
                            <CheckOutlined />
                          )
                        }
                        onClick={handleNextButtonOnClick}
                        type={'primary'}
                      >
                        {stepPositionState < steps.length - 1
                          ? 'Guardar y continuar'
                          : 'Finalizar'}
                      </CustomButton>
                    </CustomFormItem>
                  </CustomSpace>
                </CustomRow>
              </CustomFormContainer>
            </CustomForm>
          </CustomFormProvider>
        </CustomLayout>
      </CustomCol>
    </CustomRow>
  )
}

export default LegalPerson
