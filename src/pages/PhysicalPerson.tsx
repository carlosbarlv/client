import React from 'react'
import {
  AddressesAndPhone,
  CustomButton,
  CustomCol,
  CustomForm,
  CustomFormContainer,
  CustomFormItem,
  CustomLayout,
  CustomRow,
  CustomSpace,
  CustomStep,
  CustomSteps,
} from '../components'
import GeneralData from '../components/GeneralData'
import IncomeInformation from '../components/IncomeInformation'
import PoliticallyExposedPerson from '../components/PoliticallyExposedPerson'
import { formItemLayout } from '../themes'
import { Form } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { validateMessages } from '../constants/general'
import { createPhysicalPerson } from '../actions/physicalPerson'
import { PhysicalPersonType } from '../reducers/physicalPerson'
import { showNotification } from '../utils/general'
import { StoreState } from '../reducers'
import { getSessionInfo } from '../utils/session'

type Steps = {
  description: string
  node: React.ReactNode
  title: string
}

const PhysicalPerson = (): React.ReactElement => {
  const dispatch = useDispatch()
  const [stepPositionState, setStepPositionState] = React.useState(3)
  const [personData, setPersonData] = React.useState({})
  const [form] = Form.useForm()
  const { activityParameters } = useSelector(
    (state: StoreState) => state.general
  )

  const steps: Steps[] = [
    {
      description: 'Información básica',
      node: <GeneralData />,
      title: 'Datos generales',
    },
    {
      description: 'Información de ingresos',
      node: <IncomeInformation form={form} />,
      title: 'Ingresos',
    },
    {
      description: 'Persona Expuesta Políticamente',
      node: <PoliticallyExposedPerson />,
      title: 'Peps',
    },
    {
      description: 'Direcciones, teléfonos y/o redes sociales',
      node: <AddressesAndPhone />,
      title: 'Direcciones y contactos',
    },
  ]

  const handleNextButtonOnClick = async (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    const data = form.getFieldsValue()
    if (stepPositionState < steps.length - 1) {
      event.preventDefault()
    }
    try {
      await form.validateFields()
      setPersonData(Object.assign(personData, data))
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
    const person = personData as PhysicalPersonType & {
      descCargo?: ''
      descEntidad?: ''
      entidadPep?: ''
      fechaFinal?: ''
      fechaInicio?: ''
    }
    person.ID_EMPRESA = getSessionInfo().businessId
    person.RAZON_SOCIAL = `${person.NOMBRES} ${person.APELLIDOS}`
    person.ESTADO = 'A'
    person.ID_LIST_TIPO_PERSONA = Number(
      activityParameters.ID_LIST_TIPO_PERSONA
    )
    person.ID_LIST_TIPO_ENTIDAD = Number(
      activityParameters.ID_LIST_TIPO_ENTIDAD
    )
    person.TIPO_ENTIDAD = 'C'

    person.ID_CONDICION = '30' // que condicion por defecto debe ser? Hay que pasarlo como param?
    person.ID_TIPO_IDENT = 1 // esto es si es cedula o si es pasaporte?

    //eliminar los campos no requeridos antes de mandar al api
    delete person.ID_PERSONA
    delete person.USUARIO_INSERCION
    delete person.descCargo
    delete person.descEntidad
    delete person.entidadPep
    delete person.fechaFinal
    delete person.fechaInicio
    dispatch(createPhysicalPerson(person))
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
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <CustomForm
            {...formItemLayout}
            form={form}
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

              <CustomRow justify={'start'}>
                <CustomSpace>
                  <CustomFormItem>
                    <CustomButton
                      htmlType={'submit'}
                      type={'primary'}
                      onClick={handleNextButtonOnClick}
                    >
                      {stepPositionState < steps.length - 1
                        ? 'Siguiente'
                        : 'Crear'}
                    </CustomButton>
                  </CustomFormItem>

                  {stepPositionState > 0 && (
                    <CustomFormItem>
                      <CustomButton
                        htmlType={'button'}
                        onClick={handlePrevButtonOnClick}
                      >
                        Anterior
                      </CustomButton>
                    </CustomFormItem>
                  )}
                </CustomSpace>
              </CustomRow>
            </CustomFormContainer>
          </CustomForm>
        </CustomLayout>
      </CustomCol>
    </CustomRow>
  )
}
export default PhysicalPerson
