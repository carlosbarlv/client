// External API routes
export const WEB_SERVICE_API = process.env.REACT_APP_WEB_SERVICE_API
export const WEB_SERVICE_API_LOGIN = `${WEB_SERVICE_API}/login`
export const WEB_SERVICE_API_BUSINESS = `${WEB_SERVICE_API}/empresa_centro`
export const WEB_SERVICE_API_PERSONAL_MENU = `${WEB_SERVICE_API}/menu_personal`
export const WEB_SERVICE_API_GET_PERSONAS = `${WEB_SERVICE_API}/persona/personas`
export const WEB_SERVICE_API_CREATE_UPDATE_PERSON = `${WEB_SERVICE_API}/persona`
export const WEB_SERVICE_API_GENERAL_GET_NACIONALITIES = `${WEB_SERVICE_API}/pais/nationality`
export const WEB_SERVICE_API_GENERAL_GET_LIST_PARAMETERS = `${WEB_SERVICE_API}/lista_parametros_det/list`
export const WEB_SERVICE_API_GET_PRODUCT_RANGES = `${WEB_SERVICE_API}/rango_productos`
export const WEB_SERVICE_API_GET_ECONOMIC_ACTIVITY = `${WEB_SERVICE_API}/actividad_economica`
export const WEB_SERVICE_API_GET_COINS = `${WEB_SERVICE_API}/moneda`
export const WEB_SERVICE_API_CREATE_UPDATE_PRODUCT_RANGES = `${WEB_SERVICE_API}/rango_productos`
export const WEB_SERVICE_API_GET_ACTIVITY_PARAMETERS = `${WEB_SERVICE_API}/actividad_parametro`
export const WEB_SERVICE_API_GET_TRANSIST_SESSIONS = `${WEB_SERVICE_API}/sesiones_en_transito/sesiones`
// Internal routes
export const PATH_LOGIN = '/login'
export const PATH_MAIN = '/'
export const PATH_REGISTER_PERSON = '/registrar_cliente'
export const PATH_PRODUCT_RANGE = '/rango_productos'
export const PATH_TRANSIST_SESSIONS = '/sesiones_transito'
export const PATH_CASH_TRANSACTIONS = '/transacciones_caja'
