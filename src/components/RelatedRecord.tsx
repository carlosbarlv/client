import React from 'react'
import { Form } from 'antd'
import {
  AddressesAndPhone,
  CustomButton,
  CustomForm,
  CustomFormContainer,
  CustomFormItem,
  CustomRow,
  CustomSpace,
  CustomStep,
  CustomSteps,
  PoliticallyExposedPerson,
} from '../components'
import { RelatedRecordGeneralData } from '.'
import { formItemLayout } from '../themes'
import { validateMessages } from '../constants/general'
import { showNotification } from '../utils/general'
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  SaveOutlined,
} from '@ant-design/icons'


type Steps = {
  title: string
  description: string
  node: React.ReactNode
}

const RelatedRecord: React.FunctionComponent = () => {
  const [form] = Form.useForm()
  const [stepPositionState, setStepPositionState] = React.useState(0)

  const steps: Steps[] = [
    {
      title: 'Datos generales',
      description: 'Información básica',
      node: <RelatedRecordGeneralData />,
    },
    {
      title: 'Direcciones',
      description: 'Información de dirección',
      node: <AddressesAndPhone />,
    },
    {
      title: 'PEP',
      description: 'Persona expusta políticamente',
      node: <PoliticallyExposedPerson />,
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
    <CustomForm
      {...formItemLayout}
      form={form}
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
                {stepPositionState < steps.length - 1 ? 'Siguiente' : 'Crear'}
              </CustomButton>
            </CustomFormItem>
          </CustomSpace>
        </CustomRow>
      </CustomFormContainer>
    </CustomForm>
  )
}

export default RelatedRecord
