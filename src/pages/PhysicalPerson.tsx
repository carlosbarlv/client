import React from 'react'
import {
  CustomButton,
  CustomCol,
  CustomForm,
  CustomFormItem,
  CustomLayout,
  CustomRow,
  CustomSpace,
  CustomStep,
  CustomSteps,
} from '../components'
import GeneralData from '../components/GeneralData'
import styled from 'styled-components'
import IncomeInformation from '../components/IncomeInformation'
import PoliticallyExposedPerson from '../components/PoliticallyExposedPerson'
import { formItemLayout } from '../themes'
import { Form, Modal } from 'antd'

type Steps = {
  description: string
  node: React.ReactNode
  title: string
}

const FormContainer = styled.div`
  padding-left: 10px;
  padding-right: 20px;
`

const PhysicalPerson = (): React.ReactElement => {
  const [stepPositionState, setStepPositionState] = React.useState(0)
  const [form] = Form.useForm()

  const validateMessages = {
    required: `$\{label} es requerido.`,
    types: {
      email: `$\{label} no es un email válido.`,
      number: `$\{label} no es un número válido.`,
      regexp: `$\{label} formato no válido.`,
    },
    pattern: {
      mismatch: `$\{label} formato no válido.`,
    },
    number: {
      len: `"$\{label}" debe tener exactamente "$\{len}" caracteres.`,
    },
    string: {
      len: `"$\{label}" debe tener exactamente "$\{len}" caracteres.`,
    },
  }

  const steps: Steps[] = [
    {
      description: 'Información básica',
      node: <GeneralData />,
      title: 'Datos generales',
    },
    {
      description: 'Información de ingresos',
      node: <IncomeInformation />,
      title: 'Ingresos',
    },
    {
      description: 'Persona Expuesta Políticamente',
      node: <PoliticallyExposedPerson />,
      title: 'Peps',
    },
  ]

  const handleNextButtonOnClick = async (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (stepPositionState < steps.length - 1) {
      event.preventDefault()
    }
    try {
      await form.validateFields()
      if (stepPositionState < steps.length - 1) {
        setStepPositionState(stepPositionState + 1)
      }
    } catch (error) {
      Modal.error({
        title: 'Faltan algunos datos',
        content: 'Por favor completa todos los campos requeridos.',
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
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <CustomForm
            {...formItemLayout}
            form={form}
            validateMessages={validateMessages}
          >
            <FormContainer>
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
                      Siguiente
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
            </FormContainer>
          </CustomForm>
        </CustomLayout>
      </CustomCol>
    </CustomRow>
  )
}
export default PhysicalPerson
