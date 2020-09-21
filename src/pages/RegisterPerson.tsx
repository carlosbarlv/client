import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { CustomTabPane, CustomTabs } from '../components'
import Person from './Person'
import PhysicalPerson from './PhysicalPerson'
import LegalPerson from './LegalPerson'
import { getActivityParameters } from '../actions/general'

type TabConfig = {
  title: string
  type: string
  node: React.ReactNode
}

type History = {
  location: {
    state: {
      activityId: string
    }
  }
}

const tabOptions: ReadonlyArray<TabConfig> = [
  {
    title: 'Relación de Personas',
    type: 'root-personaFisica-personaJuridica',
    node: <Person />,
  },
  {
    title: 'Persona Física',
    type: 'personaFisica',
    node: <PhysicalPerson />,
  },
  {
    title: 'Persona Jurídica',
    type: 'personaJuridica',
    node: <LegalPerson />,
  },
  {
    title: 'Proveedor',
    type: 'proveedor',
    node: <div>Proveedor</div>,
  },
  {
    title: 'Empleado',
    type: 'empleado',
    node: <div>Empleado</div>,
  },
  {
    title: 'Direcciones y teléfonos',
    type: 'personaFisica-personaJuridica',
    node: <div>Direcciones y teléfonos</div>,
  },
  {
    title: 'Referencias',
    type: 'personaFisica-personaJuridica',
    node: <div>Referencias</div>,
  },
  {
    title: 'FATCA',
    type: 'personaFisica-personaJuridica',
    node: <div>fatca</div>,
  },
  {
    title: 'Transacciones y Documentos',
    type: 'personaFisica-personaJuridica',
    node: <div>transacciones</div>,
  },
]

const RegisterPerson: React.FunctionComponent<
  FunctionComponent & { history: History }
> = ({ history }) => {
  const dispatch = useDispatch()
  const { activityId } = history.location.state

  useEffect(() => {
    activityId && dispatch(getActivityParameters(activityId))
  }, [dispatch, activityId])

  return (
    <CustomTabs type={'card'} defaultActiveKey={'2'}>
      {tabOptions.map((value: TabConfig, index: number) => (
        <CustomTabPane tab={value.title} key={`${index}`}>
          {value.node}
        </CustomTabPane>
      ))}
    </CustomTabs>
  )
}

export default RegisterPerson
