import React from 'react'
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

type Steps = {
  title: string
  description: string
  node: React.ReactNode
}

const RelatedRecord: React.FunctionComponent = () => {
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

  const handleNextButtonOnClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (stepPositionState < steps.length - 1) {
      setStepPositionState(stepPositionState + 1)
      event.preventDefault()
    }
  }

  const handlePrevButtonOnClick = () => {
    if (stepPositionState > 0) {
      setStepPositionState(stepPositionState - 1)
    }
  }

  return (
    <CustomForm {...formItemLayout} validateMessages={validateMessages}>
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
  )
}

export default RelatedRecord
