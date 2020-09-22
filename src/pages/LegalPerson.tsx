import React from 'react'
import { Form } from 'antd'
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
  GeneralData,
  LegalRepresentatives,
} from '../components'
import { formItemLayout } from '../themes'
import { validateMessages } from '../constants/general'
import { showNotification } from '../utils/general'

type Steps = {
  title: string
  description: string
  node: React.ReactNode
}

const LegalPerson = (): React.ReactElement => {
  const [form] = Form.useForm()
  const [stepPositionState, setStepPositionState] = React.useState(0)

  const steps: Steps[] = [
    {
      title: 'Datos generales',
      description: 'Información básica',
      node: <GeneralData />,
    },
    {
      title: 'Representantes legales',
      description: 'Agregar representantes legales',
      node: <LegalRepresentatives />,
    },
    {
      title: 'Direciones y Teléfonos',
      description: 'Información de dirección',
      node: <AddressesAndPhone />,
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
          <CustomForm
            {...formItemLayout}
            validateMessages={validateMessages}
            form={form}
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
                  {stepPositionState === steps.length - 1 && (
                    <CustomFormItem>
                      <CustomButton htmlType={'submit'} type={'primary'}>
                        Guardar
                      </CustomButton>
                    </CustomFormItem>
                  )}
                  {stepPositionState < steps.length - 1 && (
                    <CustomFormItem>
                      <CustomButton
                        htmlType={'submit'}
                        type={'primary'}
                        onClick={handleNextButtonOnClick}
                      >
                        Siguiente
                      </CustomButton>
                    </CustomFormItem>
                  )}
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

export default LegalPerson
