import React from 'react';
import { CustomTabs, CustomTabPane } from '../components';

type TabConfig = {
  title: string;
  type: string;
  node: React.ReactNode;
};

const tabOptions: Array<TabConfig> = [
  {
    title: 'Relación de Personas',
    type: 'root-personaFisica-personaJuridica',
    node: <div>RelacionPersona</div>,
  },
  {
    title: 'Persona Física',
    type: 'personaFisica',
    node: <div>PersonaFisica</div>,
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
];

const RegisterPerson: React.FunctionComponent = () => {
  return (
    <CustomTabs type={'card'}>
      {tabOptions.map((value: TabConfig, index: number) => (
        <CustomTabPane tab={value.title} key={`${index}`}>
          {value.node}
        </CustomTabPane>
      ))}
    </CustomTabs>
  );
};

export default RegisterPerson;
