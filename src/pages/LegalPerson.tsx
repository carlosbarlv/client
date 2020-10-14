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
  ArrowRightOutlined,
  SaveOutlined,
} from '@ant-design/icons'
import { formItemLayout } from '../themes'
import { validateMessages } from '../constants/general'
import { showNotification } from '../utils/general'
import { StoreState } from '../reducers'
import { getSessionInfo } from '../utils/session'
import { createLegalPerson } from '../actions/Person'
import { PersonType } from '../reducers/Person'

type Steps = {
  title: string
  description: string
  node: React.ReactNode
}

const LegalPerson = (): React.ReactElement => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const [stepPositionState, setStepPositionState] = useState(1)
  const [personData, setPersonData] = useState({
    direcciones: [],
    general: [],
    relacionados: [],
  })
  const { activityParameters } = useSelector(
    (state: StoreState) => state.general
  )

  const handleFormChange = (data: [], name: string) => {
    if (name === 'relacionados') {
      setPersonData(Object.assign(personData, { relacionados: data }))
    } else if (name === 'direcciones') {
      setPersonData(Object.assign(personData, { direcciones: data }))
    }
  }

  const steps: Steps[] = [
    {
      title: 'Datos generales',
      description: 'Información básica',
      node: <GeneralData />,
    },
    {
      title: 'Representantes legales',
      description: 'Agregar representantes legales',
      node: <LegalRepresentatives onModalFormChange={handleFormChange} />,
    },
    {
      title: 'Direciones y Teléfonos',
      description: 'Información de dirección',
      node: <AddressesForm saveData={handleFormChange} />,
    },
  ]

  const handleNextButtonOnClick = async (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    const data = [form.getFieldsValue()]
    if (stepPositionState < steps.length - 1) {
      event.preventDefault()
    }
    try {
      await form.validateFields()
      setPersonData(Object.assign([...personData.general, ...data]))
      if (stepPositionState < steps.length - 1) {
        setStepPositionState(stepPositionState + 1)
      }
    } catch (error) {
      showNotification(
        'Faltan datos',
        'Por favor llenar los campos requeridos.',
        'error'
      )
    }
  }

  const handlePrevButtonOnClick = () => {
    if (stepPositionState > 0) {
      setStepPositionState(stepPositionState - 1)
    }
  }

  const handleOnFinish = () => {
    const person = personData.general as PersonType
    person.ID_EMPRESA = getSessionInfo().businessId
    person.RAZON_SOCIAL = `${person.NOMBRE_EMPRESA}`
    person.TIPO_ENTIDAD = 'E'
    person.ESTADO = 'A'
    person.ID_CONDICION = '30'
    person.ID_TIPO_IDENT = 1

    person.ID_LIST_TIPO_PERSONA = Number(
      activityParameters.ID_LIST_TIPO_PERSONA
    )
    // person.ID_LIST_TIPO_ENTIDAD = Number(
    //   activityParameters.ID_LIST_TIPO_ENTIDAD
    // )

    // Por alguna razon el activityParameters.ID_LIST_TIPO_ENTIDADI
    // no debuelve un valor valido para person.ID_LIST_TIPO_ENTIDAD la cual es requerida
    // y para fines de pruebas les asigne este valor generico.
    person.ID_LIST_TIPO_PERSONA = Number(1)
    person.ID_LIST_TIPO_ENTIDAD = Number(1)

    //eliminar los campos no requeridos antes de mandar al api
    delete person.ID_PERSONA
    delete person.USUARIO_INSERCION

    // eslint-disable-next-line no-console
    console.log(personData)

    dispatch(createLegalPerson(person))
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
              if (name === 'relatedRecord') {
                const { legalPerson } = forms
                const relacionados =
                  legalPerson.getFieldValue('relacionados') || []
                legalPerson.setFieldsValue({
                  relacionados: [...relacionados, values],
                })
              }

              if (name === 'addressesForm') {
                const { addressesForm } = forms
                const direcciones =
                  addressesForm.getFieldValue('direcciones') || []
                addressesForm.setFieldsValue({
                  direcciones: [...direcciones, values],
                })
              }
            }}
          >
            <CustomForm
              {...formItemLayout}
              form={form}
              name={'legalPerson'}
              onFinish={handleOnFinish}
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
                            <ArrowRightOutlined />
                          ) : (
                            <SaveOutlined />
                          )
                        }
                        onClick={handleNextButtonOnClick}
                        type={'primary'}
                      >
                        {stepPositionState < steps.length - 1
                          ? 'Siguiente'
                          : 'Crear'}
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
