const menuOptions = [
  {
    name: 'Socios',
    id: '01-1',
    children: [
      {
        name: 'Parametros',
        id: '01-1-2',
      },
      {
        name: 'Operaciones',
        id: '01-1-1',
        children: [
          {
            name: 'Registrar persona',
            id: '01-1-1-1',
          },
        ],
      },
      {
        name: 'Consultas',
        id: '01-1-3',
      },
    ],
  },
  {
    name: 'Captaciones',
    id: '01-2',
    children: [
      {
        name: 'Parametros',
        id: '01-2-1',
        children: [
          {
            name: 'Tipos de Captacion',
            id: '01-2-1-1',
          },
          {
            name: 'Rangos de Productos',
            id: '01-2-1-2',
          },
        ],
      },
      {
        name: 'Operaciones',
        id: '01-2-2',
        children: [
          {
            name: 'Crear Cuentas',
            id: '01-2-2-1',
          },
          {
            name: 'Transferencia entre Cuentas',
            id: '01-2-2-2',
          },
          {
            name: 'Creditos a Cuentas',
            id: '01-2-2-3',
          },
          {
            name: 'Debitos a Cuentas',
            id: '01-2-2-4',
          },
          {
            name: 'Reversar Transaccion',
            id: '01-2-2-98',
          },
          {
            name: 'Anular Transaccion',
            id: '01-2-2-99',
          },
        ],
      },
      {
        name: 'Procesos',
        id: '01-2-3',
        children: [
          {
            name: 'Restringir Cuentas',
            id: '01-2-3-1',
          },
          {
            name: 'Cancelar Cuentas',
            id: '01-2-3-2',
          },
        ],
      },
      {
        name: 'Consultas',
        id: '01-2-4',
        children: [
          {
            name: 'Movimientos de Cuentas',
            id: '01-2-4-1',
          },
          {
            name: 'Estado de Cuentas',
            id: '01-2-4-2',
          },
          {
            name: 'Saldos entre Fechas',
            id: '01-2-4-3',
          },
          {
            name: 'Cuentas por Estado',
            id: '01-2-4-4',
          },
        ],
      },
    ],
  },
  {
    name: 'Negocios',
    id: '01-3',
    children: [
      {
        name: 'Parametros',
        id: '01-3-1',
        children: [
          {
            name: 'Parametros Generales',
            id: '01-2-1-99',
          },
          {
            name: 'Tipos de Prestamos',
            id: '01-3-1-1',
          },
          {
            name: 'Rango de Productos',
            id: '01-3-1-2',
          },
          {
            name: 'Tipos de Garantias',
            id: '01-3-1-3',
          },
          {
            name: 'Parametros Generales',
            id: '01-3-1-99',
          },
        ],
      },
      {
        name: 'Operaciones',
        id: '01-3-2',
      },
      {
        name: 'Procesos',
        id: '01-3-3',
      },
      {
        name: 'Consultas',
        id: '01-3-4',
      },
    ],
  },
  {
    name: 'Tesoreria',
    id: '01-4',
    children: [
      {
        name: 'Cajas',
        id: '01-4-1',
        children: [
          {
            name: 'Parametros',
            id: '01-4-1-1',
          },
          {
            name: 'Operaciones',
            id: '01-4-1-2',
          },
          {
            name: 'Procesos',
            id: '01-4-1-3',
          },
          {
            name: 'Consultas',
            id: '01-4-1-4',
          },
        ],
      },
      {
        name: 'Bancos',
        id: '01-4-2',
        children: [
          {
            name: 'Parametros',
            id: '01-4-2-1',
          },
          {
            name: 'Operaciones',
            id: '01-4-2-2',
          },
          {
            name: 'Procesos',
            id: '01-4-2-3',
          },
          {
            name: 'Consultas',
            id: '01-4-2-4',
          },
        ],
      },
    ],
  },
  {
    name: 'Contabilidad',
    id: '01-5',
    children: [
      {
        name: 'Parametros',
        id: '01-5-1',
      },
      {
        name: 'Operaciones',
        id: '01-5-2',
      },
      {
        name: 'Procesos',
        id: '01-5-3',
      },
      {
        name: 'Consultas',
        id: '01-5-4',
      },
    ],
  },
  {
    name: 'Configuración',
    id: '01-99',
  },
];

export default menuOptions;
