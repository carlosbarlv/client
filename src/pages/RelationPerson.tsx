import React from 'react';
import CustomTable from '../components/CustomTable';
import { ColumnType } from 'antd/lib/table';
import { Button, Tooltip, Row, Col, Radio } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import Search from 'antd/lib/input/Search';
import Text from 'antd/lib/typography/Text';
import { RadioChangeEvent } from 'antd/lib/radio';

interface Person {
  action?: React.ReactNode;
  codigo: string | number;
  nombre: string;
  doc_identidad: string;
  telefono: string;
  email: string;
  categoria: string;
  key: string;
}

const Action = (): React.ReactElement => {
  return (
    <Tooltip title={'Editar'}>
      <Button shape={'circle'} icon={<EditOutlined />} />
    </Tooltip>
  );
};

const columns: ColumnType<Person>[] = [
  {
    key: 'action',
    title: 'Acción',
    render: Action,
  },
  {
    key: 'codigo',
    title: 'Código',
    dataIndex: 'codigo',
  },
  {
    key: 'nombre',
    title: 'Nombre',
    dataIndex: 'nombre',
  },
  {
    key: 'doc_identidad',
    title: 'Cédula/RNC',
    dataIndex: 'doc_identidad',
  },
  {
    key: 'telefono',
    title: 'Teléfono',
    dataIndex: 'telefono',
  },
  {
    key: 'email',
    title: 'Email',
    dataIndex: 'email',
  },
  {
    key: 'categoria',
    title: 'Categoría',
    dataIndex: 'categoria',
  },
];

const data: Person[] = [
  {
    codigo: '1',
    nombre: 'Carlos',
    doc_identidad: '8',
    telefono: '849',
    email: '@',
    categoria: '1',
    key: '1',
  },
  {
    codigo: '2',
    nombre: 'Carlos2',
    doc_identidad: '82',
    telefono: '8492',
    email: '@2',
    categoria: '12',
    key: '12',
  },
];

const CustomTitle = () => {
  const [radioValue, setRadioValue] = React.useState('T');
  const handlerRadioChange = (e: RadioChangeEvent) => {
    setRadioValue(e.target.value);
  };
  return (
    <Row>
      <Col xs={24} md={12}>
        <h2>Relación personas</h2>
      </Col>
      <Col xs={24} md={12}>
        <Row justify={'end'}>
          <Search placeholder={'Buscar...'} />
          <Text style={{ marginRight: 10 }}>Ver: </Text>
          <Radio.Group value={radioValue} onChange={handlerRadioChange}>
            <Radio value="T">Todos</Radio>
            <Radio value="A">Activos</Radio>
            <Radio value="I">Inactivos</Radio>
          </Radio.Group>
        </Row>
      </Col>
    </Row>
  );
};

const RelationPerson: React.FunctionComponent<any> = (): React.ReactElement => (
  <div>
    <CustomTable title={CustomTitle} columns={columns} dataSource={data} />
  </div>
);

export default RelationPerson;
