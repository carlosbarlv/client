import { PhysicalPersonAction } from '../actions/physicalPerson'
import {
  PHYSICAL_PERSON_CREATE_PERSON,
  PHYSICAL_PERSON_CREATE_PERSON_FAILURE,
  PHYSICAL_PERSON_CREATE_PERSON_SUCCESS,
} from '../constants/actions'

export type PhysicalPersonType = {
  ALERGIAS_MEDICAMENTOS?: string
  ANIO_TIEMPO_EMPRESA?: number
  ANIO_TIEMPO_MERCADO?: number
  APARTADO_POSTAL?: string
  APARTAMENTO?: string
  APELLIDOS?: string
  APLICA_MORA?: number
  APODO?: string
  BANCO_CUENTA?: string
  BANCO_TARJETA?: string
  CAL_DESC_DEF?: string
  CALIFICACION_CTE?: string
  CALLE?: string
  CANT_COLABORADORES?: number
  CANT_DEPENDIENTES?: number
  CANTIDAD_HIJOS?: number
  CARGO_VINCULADO?: string
  CARTA_RETENCION_CORREO?: number
  CASA_PROPIA?: string
  CASA?: string
  CATEGORIA_LIC?: string
  CIUDAD_AFUERAS?: number
  CIUDAD_PROVINCIA?: string
  CLIENTEVIP?: number
  CODIGO_VIEJO?: string
  COMISION_VEN?: number
  COMISION_VENTA?: number
  CONTACTO_PRINCIPAL?: string
  COSTO_LIQ_INCLUYE_OFERTA?: number
  CUENTA_CONTABLE?: string
  CXP_CAL_DESC_DEF?: string
  CXP_CODIGO_VIEJO?: string
  CXP_DIRECCION?: string
  CXP_ID_CONDICION?: string
  CXP_ID_MONEDA_DEF?: string
  CXP_ID_TIPO_NCF?: string
  CXP_LIMITE_CREDITO?: number
  CXP_NOTAS?: string
  DEPORTE_QUE_PRACTICA?: string
  DESC_ALERGIAS?: string
  DESC_FACTURA?: number
  DIA_PAGO_PERIODICO?: number
  DIAS_ANTICIPADO_PAGO?: number
  DIAS_ANTICIPADOS_NOTIF?: number
  DIRECCION_EMAIL?: string
  DIRECCION_EMPRESA?: string
  DIRECCION_WEB?: string
  DOC_IDENTIDAD_REP_EMPRESA?: string
  DOCUMENTO_IDENTIDAD?: string
  EDAD?: number
  EDIFICIO?: string
  EMAIL_EMPRESA?: string
  EMP_ID_ESTADO?: string
  EMP_NOTA?: string
  EMPRESA_POLIZA?: string
  ES_RECURRENTE?: number
  ESMODIFICABLE?: string
  ESTADO_CIVIL?: string
  ESTADO?: string
  ESTATURA_FT?: number
  ESTATURA_IN?: number
  EXTRANJERO?: number
  FAX_EMPRESA?: string
  FAX?: string
  FECHA_ACTUALIZACION?: Date
  FECHA_ANIVERSARIO?: Date
  FECHA_ENTRADA_EMPRESA?: Date
  FECHA_INGRESO?: Date
  FECHA_INSERCION?: Date
  FECHA_NAC?: Date
  FECHA_SALIDA?: Date
  FECHA_SOLICITUD?: Date
  FECHA_VENC_REG_MERCANTIL?: Date
  FONDOS_NEG_USA?: number
  FUMA?: number
  ID_ACCION?: string
  ID_ACTIVIDAD_ECONOMICA?: string
  ID_AREA?: string
  ID_ASEGURADORA?: string
  ID_BANCO_TRANS?: string
  ID_BANCO?: string
  ID_CATEGORIA_SOCIO?: string
  ID_CLASIF_DGII_SUP?: string
  ID_CLASIFICACION?: string
  ID_CLIENTE_REFERIDO?: string
  ID_CONDICION_VEND?: string
  ID_CONDICION?: string
  ID_CUENTA_TRANS?: string
  ID_CUENTA?: string
  ID_DEP_EXTERNO?: string
  ID_DEPARTAMENTO?: string
  ID_EMPLEADO_SUP?: string
  ID_EMPRESA?: string
  ID_ESTADO?: string
  ID_GRUPO_CLIENTE?: number
  ID_HORARIO?: string
  ID_LIST_CATEGORIA_SOCIO?: string
  ID_LIST_TIPO_ENTIDAD?: number
  ID_LIST_TIPO_PERSONA?: number
  ID_LISTA_DEP_EXT?: string
  ID_MONEDA_DEF?: string
  ID_MONEDA_OTROS_ING?: string
  ID_MUNICIPIO?: string
  ID_NACIONALIDAD?: string
  ID_NIVEL_ACA?: string
  ID_PAIS?: string
  ID_PERSONA?: string
  ID_PERSONAL_VENDEDOR?: string
  ID_PERSONAL?: string
  ID_PROVINCIA_VINCULADO?: string
  ID_PROVINCIA?: string
  ID_PUESTO?: string
  ID_REP_VEN?: string
  ID_REPRESENTANTE?: string
  ID_RUTA?: string
  ID_SECTOR_ECONOMICO?: string
  ID_SECTOR?: string
  ID_SUB_TIPO_CTE?: string
  ID_TIPO_BIEN_SERVICIO_ISR?: string
  ID_TIPO_BIEN_SERVICIO_ITBIS?: string
  ID_TIPO_CATEGORIA?: string
  ID_TIPO_CLIENTE?: number
  ID_TIPO_GASTO_DET?: string
  ID_TIPO_IDENT?: number
  ID_TIPO_NCF_PAGO?: string
  ID_TIPO_NCF?: string
  ID_TIPO_PROVEEDOR?: string
  ID_TIPO_TRANS?: string
  IND_PEP?: number
  INDNUEVO?: string
  INDVALIDADO?: number
  INGRESO_PROMEDIO?: number
  INGRESOS_USA?: number
  INTERMEDIARIO_PAGO?: string
  ITBIS_INCLUIDO_DEF?: number
  LICENCIA_CON?: string
  LIMITE_CREDITO?: number
  LIMITE_DESCUENTO?: number
  LIMITE_DIAS_VEN?: number
  LIMITE_FACT_PEND_CTE?: number
  LIMITE_MONTO_CUOTA?: number
  LIMITE_NUM_CUOTA?: number
  LIMITE_PORC_INICIAL?: number
  LIMITE_TASA_FIN?: number
  LIMTE_FACT_PEND_VENC?: number
  LINEA1?: string
  LINEA2?: string
  LST_SECTOR_ECONOMICO?: string
  LUGAR_NAC?: string
  MAQUINA?: string
  MESES_TIEMPO_EMPRESA?: number
  MESES_TIEMPO_MERCADO?: number
  NACIONALIDAD?: string
  NO_CARNET?: string
  NO_GREEN_CARD?: string
  NO_LICENCIA_USA?: string
  NO_PASAPORTE?: string
  NO_TIN?: string
  NOMBRE_DUENO_CASA?: string
  NOMBRE_EMPRESA?: string
  NOMBRE_SUPERVISOR?: string
  NOMBRES?: string
  NOTAS?: string
  NSS?: string
  NUMERO_POLIZA?: string
  OCUPACION?: string
  OTRAS_PATOLOGIAS?: string
  OTROS_INGRESOS?: number
  OTROSIDIOMAS?: number
  PAGA_IMP_USA?: number
  PAGA_ISR_USA?: number
  PAIS?: string
  PEPS?: string
  PESO_LB?: number
  PODER_PERSONA_USA?: number
  POLIZA_NO?: string
  PORC_DESC_DEF?: number
  PORC_IMP_RETENIDO?: number
  PORC_RET_ISR?: number
  PORC_RET_ITBIS?: number
  PORC_RET?: number
  POSEE_CUENTA?: string
  POSEE_TARJETA?: string
  POSICION_EMPRESA?: string
  PRACTICA_DEPORTE?: number
  PROCESO_CIUDADANIA_O_RES_USA?: number
  PROFESION?: string
  PUESTO_CONTACTO_PRIN?: string
  PUESTO?: string
  RANKING_DATA_CREDITO?: string
  RAZON_FONDOS?: string
  RAZON_INGRESOS?: string
  RAZON_OTROS_INGRESOS?: string
  RAZON_SOCIAL?: string
  REFERENCIA_DOMICILIO?: string
  REFERENCIA_EXTERNA?: string
  REFERIDO_POR?: string
  REPRESENTANTE_CUENTA?: string
  RNC?: string
  RUTA_FOTO?: string
  SERVICIOS_OFRECIDOS?: string
  SEXO?: string
  TEL_OFICINA?: string
  TELEFONO_CONTACTO?: string
  TELEFONO_DUENO_CASA?: string
  TELEFONO_EMPRESA?: string
  TELEFONO_MOVIL?: string
  TELEFONO?: string
  TIENE_ALERGIAS?: number
  TIENE_VEHPROP?: number
  TIPO_CUENTA_TRANS?: string
  TIPO_EMPLEO?: number
  TIPO_ENTIDAD?: string
  TIPO_PERSONA?: string
  TIPO_SOCIETARIO?: string
  TOMA_ALCOHOL?: number
  TRABAJO_TEMP_USA?: number
  TRANSFERENCIA_USA?: number
  USUARIO_ACTUALIZACION?: string
  USUARIO_INSERCION?: string
  VALOR_FISCAL?: number
  VINCULADO_A?: string
  WEB_EMPRESA?: string
}

export type PhysicalPersonState = {
  physicalPerson: PhysicalPersonType
}

const initialState = {
  physicalPerson: {},
}

const physicalPerson = (
  state: PhysicalPersonState = initialState,
  action: PhysicalPersonAction
): PhysicalPersonState => {
  switch (action.type) {
    case PHYSICAL_PERSON_CREATE_PERSON_SUCCESS: {
      return {
        ...state,
        physicalPerson: action.newPhysicalPerson,
      }
    }
    case PHYSICAL_PERSON_CREATE_PERSON_FAILURE:
    case PHYSICAL_PERSON_CREATE_PERSON:
    default:
      return state
  }
}

export default physicalPerson
