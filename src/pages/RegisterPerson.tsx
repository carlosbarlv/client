import React from 'react';
import CustomTabs from '../components/CustomTabs';
import CustomTabPane from '../components/CustomTabPane';
import RelationPerson from './RelationPerson';

type TTabs = {
  title: string;
  type: string;
  node: React.ReactNode;
};

const tabs = [
  {
    title: 'Relación de Personas',
    type: 'root-personaFisica-personaJuridica',
    node: <RelationPerson />,
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
    <div>
      <CustomTabs type={'card'}>
        {tabs.map((value: TTabs, index: number) => (
          <CustomTabPane tab={value.title} key={`${index}`}>
            {value.node}
          </CustomTabPane>
        ))}
      </CustomTabs>
    </div>
  );
};

export default RegisterPerson;
