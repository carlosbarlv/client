import React from 'react'
import { CustomTabPane, CustomTabs } from '../components'
import Person from './Person'
import PhysicalPerson from './PhysicalPerson'

type TabConfig = {
  title: string
  type: string
  node: React.ReactNode
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
    node: <div>PersonaJuridica</div>,
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
    node: <div>DireccionesTelefonos</div>,
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

const RegisterPerson: React.FunctionComponent = () => {
  return (
    <CustomTabs type={'card'} activeKey={'1'}>
      {tabOptions.map((value: TabConfig, index: number) => (
        <CustomTabPane tab={value.title} key={`${index}`}>
          {value.node}
        </CustomTabPane>
      ))}
    </CustomTabs>
  )
}

export default RegisterPerson
